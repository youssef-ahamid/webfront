import { useContext } from "react";
import ContentContext from "./Context";

export default function useContent() {
  return useContext(ContentContext);
}
