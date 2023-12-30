import Script from "next/script";

export function LD(ld: any) {
  return (
    <Script
      type="application/ld+json"
      id={`ld+json+${JSON.stringify(ld)}`}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
