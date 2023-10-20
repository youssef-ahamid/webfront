import northstarConfig from "@/northstar.config.json";
import Script from "next/script";

export const Analytics = () => {
  return (
    <Script
      async
      src={`${northstarConfig.baseUrl}/script.js`}
      data-website-id={northstarConfig.websiteId}
    />
  );
};
