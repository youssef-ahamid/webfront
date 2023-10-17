import { ComponentProps, useEffect, useMemo, useState } from "react";
import ContentContext from "./Context";

import { api } from "@/utils/api";
import { Page } from "@prisma/client";
import { useUser } from "../User";
import { Avatar, Card, CardFooter, User } from "@nextui-org/react";
import { Button } from "@/components/interactive";

export default function ContentProvider({
  children,
  page,
}: ComponentProps<"div"> & { page?: Page }) {
  const [updatedContent, setUpdatedContent] = useState<object>({});
  function edit(id: string, value: string) {
    if (!page?.content) return;
    if ((page.content as any)[id] === value) {
      const { [id]: _, ...rest } = updatedContent as any;
      setUpdatedContent(rest);
      return;
    }
    setUpdatedContent({ ...updatedContent, [id]: value });
  }

  const { user } = useUser();
  const [publishing, setPublishing] = useState(false);
  function publish() {
    if (!page || !user) return;
    setPublishing(true);
    api.editContent(page.id, user.id, updatedContent).then(() => {
      location.reload();
      setPublishing(false);
    });
  }

  const isEdited = useMemo(() => {
    return Object.keys(updatedContent).length > 0;
  }, [updatedContent]);

  return (
    <ContentContext.Provider
      value={{ content: page?.content as any, edit, isEdited, publish }}
    >
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
