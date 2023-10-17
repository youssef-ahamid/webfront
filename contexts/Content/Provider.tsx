import { ComponentProps, useEffect, useMemo, useState } from "react";
import ContentContext from "./Context";

import content from "@/content.json";
import { api } from "@/utils/api";

export default function ContentProvider({ children }: ComponentProps<"div">) {
  const [updatedContent, setUpdatedContent] = useState<Partial<typeof content>>(
    {}
  );
  function edit(id: keyof typeof content, value: string) {
    if (content[id] === value) {
      const { [id]: _, ...rest } = updatedContent;
      setUpdatedContent(rest);
      return;
    }
    setUpdatedContent({ ...updatedContent, [id]: value });
  }

  const isEdited = useMemo(() => {
    return Object.keys(updatedContent).length > 0;
  }, [updatedContent]);

  return (
    <ContentContext.Provider value={{ content, edit, isEdited }}>
      {children}
    </ContentContext.Provider>
  );
}
