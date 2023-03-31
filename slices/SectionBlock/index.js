import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import SectionCentered from "../../components/sections/SectionCentered";
import SectionDefault from "../../components/sections/SectionDefault";

/**
 * @typedef {import("@prismicio/client").Content.SectionBlockSlice} SectionBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionBlockSlice>} SectionBlockProps
 * @param { SectionBlockProps }
 */
const SectionBlock = ({ slice }) => {
  const type = slice.primary.style;

  function sectionSwitch(type, slice) {
    switch (type) {
      case "Centered":
        return <SectionCentered slice={slice} />;
      case "Image Left":
        return <SectionDefault slice={slice} />;
      default:
        return <SectionDefault slice={slice} />;
    }
  }

  return <>{sectionSwitch(type, slice)}</>;
};

export default SectionBlock;
