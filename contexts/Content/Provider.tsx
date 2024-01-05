import { ComponentProps, useMemo, useState } from "react";
import ContentContext from "./Context";

import { Page } from "@prisma/client";
import { useUser } from "../User";
import { Avatar, Card } from "@nextui-org/react";
import Button from "@/components/interactive/Button";
import front from "@/utils/front";
import { Lang } from "@/app/layout";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  ImageWithFallback,
} from "@/content/components";

import * as images from "@/images";
import Image from "next/image";
import clsx from "clsx";

export default function ContentProvider({
  children,
  page,
  assets = [],
  lang,
}: ComponentProps<"div"> & {
  page?: Page;
  lang: Lang;
  assets: (typeof front.Asset.Type)[];
}) {
  const [updatedContent, setUpdatedContent] = useState<object>({});
  const [previewedImage, setPreviewedImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  function edit(id: string, value: string) {
    if (!page?.content || id === value) return;
    setUpdatedContent((curr) => ({ ...curr, [id]: value }));
  }

  function selectImage(nameOrSrc: string) {
    if (!previewedImage) return setSelectedImage(null);
    setSelectedImage(nameOrSrc);
    edit(previewedImage, nameOrSrc);
  }

  const { user } = useUser();
  const [publishing, setPublishing] = useState(false);
  function publish() {
    if (!page || !user) return;
    setPublishing(true);
    front.ContentEdit.create({
      pageId: page.id,
      userId: user.id,
      content: updatedContent,
    })
      .then(() => {
        location.reload();
        setPublishing(false);
      })
      .catch((e) => {
        console.error(e);
        location.reload();
        setPublishing(false);
      });
  }

  const isEdited = useMemo(() => {
    return Object.keys(updatedContent).length > 0;
  }, [updatedContent]);

  return (
    <ContentContext.Provider
      value={{
        content: { ...(page?.content as any), ...updatedContent } as any,
        edit,
        isEdited,
        publish,
        lang,
        openImageSelector: setPreviewedImage,
      }}
    >
      <Drawer
        open={!!previewedImage}
        onOpenChange={(isOpen) => {
          if (!isOpen) setPreviewedImage(null);
        }}
      >
        <DrawerContent className="lg:overflow-y-scroll block pointer-events-auto z-50">
          <DrawerHeader>
            <DrawerTitle>Edit Image</DrawerTitle>
            <hr />
          </DrawerHeader>
          <div className="w-full lg:overflow-y-scroll pointer-events-auto z-50">
            <div>
              <p className="text-sm font-bold p-4">Local images</p>
              <div className="flex space-x-4 py-2 overflow-x-scroll">
                {Object.entries(images).map(([name, img], i) => (
                  <Image
                    alt={name}
                    src={img}
                    key={i}
                    className={clsx(
                      "w-auto block h-24 object-cover transition rounded-lg shrink-0 cursor-pointer",
                      selectedImage === name &&
                        "ring-2 ring-offset-2 ring-offset-transparent ring-purple-600",
                      previewedImage &&
                        page?.content?.[
                          previewedImage as keyof typeof page.content
                        ] === name &&
                        "ring-2 ring-offset-2 ring-offset-transparent ring-blue-600"
                    )}
                    onClick={() => selectImage(name)}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-sm font-bold p-4">Uploaded images</p>
                <Button
                  href="https://front.memoized.tech/assets"
                  target="_blank"
                  size="sm"
                  className="max-w-fit"
                  as="a"
                >
                  Add
                </Button>
              </div>
              <div className="flex space-x-4 py-2 overflow-x-scroll">
                {assets.map((asset, i) => {
                  const src = `https://front.memoized.tech/assets/${asset.slug}`;
                  return (
                    <ImageWithFallback
                      alt={asset.name}
                      src={`https://front.memoized.tech/assets/${asset.slug}`}
                      key={i}
                      width={200}
                      height={200}
                      className={clsx(
                        "w-auto block h-24 object-cover transition rounded-lg shrink-0 cursor-pointer",
                        selectedImage === src &&
                          "ring-2 ring-offset-2 ring-offset-transparent ring-purple-600",
                        previewedImage &&
                          page?.content?.[
                            previewedImage as keyof typeof page.content
                          ] === src &&
                          "ring-2 ring-offset-2 ring-offset-transparent ring-blue-600"
                      )}
                      onClick={() => selectImage(src)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      {children}

      {user && (
        <div className="fixed left-0 bottom-0 right-0 z-50 px-6">
          <Card className="w-full max-w-3xl mx-auto flex flex-row justify-between items-center px-8 py-4 mb-6">
            <div className="flex space-x-4 items-center">
              <Avatar name={user.name!} />
              <div className="max-w-lg">
                <p className="text-xl font-bold">Admin View</p>
                <p className="text-sm text-gray-500 max-w-md">
                  Click on any content and start typing to edit it. Click the
                  publish button to save your changes.
                </p>
              </div>
            </div>
            <Button
              onClick={publish}
              size="md"
              isDisabled={!isEdited}
              isLoading={publishing}
              color="success"
              startContent={
                !publishing && (
                  <div className="relative mr-1">
                    {isEdited && (
                      <div className="w-2 h-2 bg-background rounded-full animate-ping absolute" />
                    )}
                    <div className="w-2 h-2 bg-background rounded-full" />
                  </div>
                )
              }
            >
              Publish
            </Button>
          </Card>
        </div>
      )}
    </ContentContext.Provider>
  );
}
