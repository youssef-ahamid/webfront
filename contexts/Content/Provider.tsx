import { ComponentProps, useEffect, useMemo, useState } from "react";
import ContentContext from "./Context";

import { api } from "@/utils/api";
import { Page } from "@prisma/client";
import { useUser } from "../User";

export default function ContentProvider({
  children,
  page,
}: ComponentProps<"div"> & { page?: Page }) {
  const [updatedContent, setUpdatedContent] = useState<object>({});
  function edit(id: string, value: string) {
    if (!page) return;
    if (page.content[id] === value) {
      const { [id]: _, ...rest } = updatedContent;
      setUpdatedContent(rest);
      return;
    }
    setUpdatedContent({ ...updatedContent, [id]: value });
  }

  const { user } = useUser();
  function publish() {
    if (!page || !user) return;
    api
      .editContent(page.id, user.id, updatedContent)
      .then(() => location.reload());
  }

  const isEdited = useMemo(() => {
    return Object.keys(updatedContent).length > 0;
  }, [updatedContent]);

  return (
    <ContentContext.Provider
      value={{ content: page?.content, edit, isEdited, publish }}
    >
      {children}
      {isEdited && (
        <button
          className="fixed bottom-20 left-1/2 -translate-x-1/2"
          onClick={publish}
        >
          Publish
        </button>
      )}
    </ContentContext.Provider>
  );
}
