import { ComponentProps, useMemo, useState } from "react";
import ContentContext from "./Context";

import { Page } from "@prisma/client";
import { useUser } from "../User";
import { Avatar, Card } from "@nextui-org/react";
import Button from "@/components/interactive/Button";
import front from "@/utils/front";
import { Lang } from "@/app/layout";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/content/components";

import * as images from "@/images";
import Image from "next/image";
import clsx from "clsx";

export default function ContentProvider({
  children,
  page,
  lang,
}: ComponentProps<"div"> & { page?: Page; lang: Lang }) {
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
      <Sheet
        defaultOpen
        open={!!previewedImage}
        onOpenChange={(isOpen) => {
          setSelectedImage(null);
          if (!isOpen) setPreviewedImage(null);
        }}
      >
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Image</SheetTitle>
          </SheetHeader>
          <hr />
          <br />
          <p className="text-xl font-bold pb-2">Local images</p>
          <div className="flex flex-wrap max-w-xl w-full">
            {Object.entries(images).map(([name, img], i) => (
              <div
                key={i}
                className={clsx(
                  "p-2 opacity-75 hover:opacity-90 hover:scale-105 transition rounded-lg",
                  selectedImage === name && "opacity-100 scale-100"
                )}
              >
                <Image
                  alt={name}
                  src={img}
                  className={clsx(
                    "w-auto block h-24 object-cover transition rounded-lg",
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
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>

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
