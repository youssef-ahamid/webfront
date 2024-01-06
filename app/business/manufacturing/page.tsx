import { Appear, Content, Hero, PaddedContent, Page, Reveal } from "@/components";
import {
  Astra,
  AstraGraphic,
  AstraLollipops,
  FundayPopcorn,
  FundayProducts,
  MoussyFactory,
  MoussyGlass,
  PortSaid,
  Spring,
  SpringFactory,
} from "@/images";
import Image from "next/image";

import { getSeoForPage } from "@/config/seo";
import { ContentImage } from "@/content/components";
export const generateMetadata = getSeoForPage("/business/manufacturing");

export default function Manufacturing() {
  return (
    <Page>
      <Hero
        title="hero-title"
        subtitle="hero-subtitle"
        graphicUrl={"SpringFactory"}
      />

      <PaddedContent>
        <Reveal
          direction="left-to-right"
          duration={1.4}
          className="max-w-none w-full"
        >
          <div className="w-full h-px bg-foreground/40 mb-1 mt-32" />
        </Reveal>
      </PaddedContent>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <PaddedContent className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg flex flex-col items-start">
              <Appear delay={0.2}>
                <ContentImage
                  contentId="factory-1-image"
                  src={"Spring"}
                  alt="Spring Factory"
                  className="max-h-20 w-full object-contain mb-4"
                />
              </Appear>
              <Appear delay={0.2}>
                <Content
                  size="header/md"
                  className="mb-4"
                  contentId="factory-1-title"
                >
                  The Spring Factory
                </Content>
              </Appear>
              <Appear delay={0.6}>
                <Content
                  size="body/lg"
                  className="mb-6"
                  contentId="factory-1-subtitle"
                  textContent="At the Spring Factory, we specialize in producing glass-bottled beverages, combining precision with eco-friendly practices. Our bottling line is a marvel of modern technology, filling high-quality glass bottles that preserve the taste and freshness of each beverage. This process is central to our operation, ensuring we meet our goal of sustainable packaging and product longevity. \n\n Our facility, staffed by a dedicated team of professionals, is outfitted with state-of-the-art equipment. This enables us to efficiently produce a significant volume of bottles daily, while maintaining the highest standards of quality. Our workforce, skilled in various aspects of production, is the backbone of our operation, ensuring that each bottle meets our rigorous quality checks. \n\n Proud partners of industry leaders like Moussy and PepsiCo, the Spring Factory is a testament to our commitment to excellence and our ability to meet diverse market demands. \n\n"
                >
                  At the Spring Factory, we specialize in producing
                  glass-bottled beverages, combining precision with eco-friendly
                  practices. Our bottling line is a marvel of modern technology,
                  filling high-quality glass bottles that preserve the taste and
                  freshness of each beverage. This process is central to our
                  operation, ensuring we meet our goal of sustainable packaging
                  and product longevity.{"\n\n"}
                  Our facility, staffed by a dedicated team of professionals, is
                  outfitted with state-of-the-art equipment. This enables us to
                  efficiently produce a significant volume of bottles daily,
                  while maintaining the highest standards of quality. Our
                  workforce, skilled in various aspects of production, is the
                  backbone of our operation, ensuring that each bottle meets our
                  rigorous quality checks.{"\n\n"}
                  Proud partners of industry leaders like Moussy and PepsiCo,
                  the Spring Factory is a testament to our commitment to
                  excellence and our ability to meet diverse market demands. Our
                  collaboration with these giants, along with our capacity for
                  large-scale production, highlights our role as a key player in
                  the beverage industry.{"\n\n"}
                  <ContentImage
                    contentId="factory-1-product-image-1"
                    src={"MoussyGlass"}
                    alt="Moussy Glass"
                    className="object-contain my-4"
                  />
                  {"\n\n"}
                </Content>
              </Appear>
            </div>
          </div>
        </PaddedContent>
        <div className="lg:-ml-12 -mt-12 py-12 pr-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 overflow-hidden">
          <Appear delay={0.4}>
            <ContentImage
              className="w-[48rem] max-w-none rounded-xl bg-transparent shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={"MoussyFactory"}
              contentId="factory-1-product-image-2"
              alt="Moussy Factory"
            />
          </Appear>
        </div>
      </div>

      <PaddedContent>
        <Reveal
          direction="left-to-right"
          duration={1.4}
          className="max-w-none w-full"
        >
          <div className="w-full h-px bg-foreground/40 mb-1 mt-32" />
        </Reveal>
      </PaddedContent>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <PaddedContent className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg flex flex-col items-start">
              <Appear delay={0.2}>
                <ContentImage
                  contentId="factory-2-image"
                  src={"Astra"}
                  alt="Astra Logo"
                  className="max-h-20 w-full object-contain mb-4"
                />
              </Appear>
              <Appear delay={0.2}>
                <Content
                  size="header/md"
                  className="mb-4"
                  contentId="factory-2-title"
                >
                  The Astra Factory
                </Content>
              </Appear>
              <Appear delay={0.6}>
                <Content
                  size="body/lg"
                  className="mb-6"
                  contentId="factory-2-subtitle"
                  textContent="Astra Factory specializes in creating hand-drawn lollipops and hard candies, where each piece is a blend of flavor and design. With techniques and insights gained from our collaboration with Astra Sweets, we ensure a unique confectionery experience. Our artisans skillfully produce a variety of designs, making each candy a small work of art. \n\n Equipped for large-scale production, our facility seamlessly combines traditional artistry with modern efficiency. Our team is dedicated to crafting candies that are not only delicious but also visually stunning. \n\n As a testament to our commitment to quality and innovation, Astra Factory has carved a niche in the confectionery market, offering a delightful range of artistic and flavorful treats. \n\n"
                >
                  Astra Factory specializes in creating hand-drawn lollipops and
                  hard candies, where each piece is a blend of flavor and
                  design. With techniques and insights gained from our
                  collaboration with Astra Sweets, we ensure a unique
                  confectionery experience. Our artisans skillfully produce a
                  variety of designs, making each candy a small work of art.
                  {"\n\n"}
                  <ContentImage
                    contentId="factory-2-product-image-1"
                    src={"AstraLollipops"}
                    alt="Astra Lollipops"
                    className="object-contain"
                  />
                  {"\n\n"}
                  Equipped for large-scale production, our facility seamlessly
                  combines traditional artistry with modern efficiency. Our team
                  is dedicated to crafting candies that are not only delicious
                  but also visually stunning.{"\n\n"}
                  As a testament to our commitment to quality and innovation,
                  Astra Factory has carved a niche in the confectionery market,
                  offering a delightful range of artistic and flavorful treats.
                  {"\n\n"}
                </Content>
              </Appear>
            </div>
          </div>
        </PaddedContent>
        <div className="lg:-ml-12 -mt-12 py-12 pr-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 overflow-hidden">
          <Appear delay={0.4}>
            <ContentImage
              className="w-[48rem] max-w-none rounded-xl bg-transparent shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={"AstraGraphic"}
              contentId="factory-2-product-image-2"
              alt="Astra Graphic"
            />
          </Appear>
        </div>
      </div>

      <PaddedContent>
        <Reveal
          direction="left-to-right"
          duration={1.4}
          className="max-w-none w-full"
        >
          <div className="w-full h-px bg-foreground/40 mb-1 mt-32" />
        </Reveal>
      </PaddedContent>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <PaddedContent className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg flex flex-col items-start">
              <Appear delay={0.2}>
                <ContentImage
                  contentId="factory-3-image"
                  src={"PortSaid"}
                  alt="Port Said Factory Logo"
                  className="max-h-20 w-full object-contain mb-4"
                />
              </Appear>
              <Appear delay={0.2}>
                <Content
                  size="header/md"
                  className="mb-4"
                  contentId="factory-3-title"
                >
                  The Port Said Factory
                </Content>
              </Appear>
              <Appear delay={0.6}>
                <Content
                  size="body/lg"
                  className="mb-6"
                  contentId="factory-3-subtitle"
                  textContent={
                    "Home to the Funday brand, the Port Said Factory is a dynamic production hub churning out a diverse range of snacks. With over 50 SKUs, including delightful cakes and popcorn, Funday is a testament to our versatility and creativity in snack production. Operating under Ayman Afandy LLC&apos;s distribution wing, this factory is key to delivering a variety of high-quality, tasty treats.\n\n Our production lines are tailored to handle the complexities of creating multiple snack varieties, ensuring efficiency and quality in every package. The factory&apos;s commitment to maintaining a wide-ranging portfolio reflects our mission to cater to diverse consumer tastes.\n\n Funday&apos;s presence in the market, supported by Ayman Afandy LLC&apos;s robust distribution network, ensures our products are enjoyed far and wide, bringing smiles with every snack. \n\n"
                  }
                >
                  Home to the Funday brand, the Port Said Factory is a dynamic
                  production hub churning out a diverse range of snacks. With
                  over 50 SKUs, including delightful cakes and popcorn, Funday
                  is a testament to our versatility and creativity in snack
                  production. Operating under Ayman Afandy LLC&apos;s
                  distribution wing, this factory is key to delivering a variety
                  of high-quality, tasty treats.{"\n\n"}
                  Our production lines are tailored to handle the complexities
                  of creating multiple snack varieties, ensuring efficiency and
                  quality in every package. The factory&apos;s commitment to
                  maintaining a wide-ranging portfolio reflects our mission to
                  cater to diverse consumer tastes.{"\n\n"}
                  Funday&apos;s presence in the market, supported by Ayman
                  Afandy LLC&apos;s robust distribution network, ensures our
                  products are enjoyed far and wide, bringing smiles with every
                  snack.
                  {"\n\n"}
                  <ContentImage
                    contentId="factory-3-product-image-1"
                    src={"FundayProducts"}
                    alt="Funday Products"
                    className="object-contain my-4"
                  />
                  {"\n\n"}
                </Content>
              </Appear>
            </div>
          </div>
        </PaddedContent>
        <div className="lg:-ml-12 -mt-12 py-12 pr-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 overflow-hidden">
          <Appear delay={0.4}>
            <ContentImage
              className="w-[48rem] max-w-none rounded-xl bg-transparent shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={"FundayPopcorn"}
              contentId="factory-3-product-image-2"
              alt="Funday Popcorn"
            />
          </Appear>
        </div>
      </div>
    </Page>
  );
}
