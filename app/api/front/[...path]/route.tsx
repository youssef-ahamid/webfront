import { createFrontRouteHandler } from "@/front";
import front from "@/utils/front";

const { GET } = createFrontRouteHandler(front);
export { GET };
