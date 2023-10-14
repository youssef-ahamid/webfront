import { useContext } from "react";
import MouseContext from "./Context";

export default function useMouse() {
  return useContext(MouseContext);
}
