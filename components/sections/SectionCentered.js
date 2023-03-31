import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import CustomLink from "../CustomLink";

/**
 * @typedef {import("@prismicio/client").Content.SectionBlockSlice} SectionBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionBlockSlice>} SectionBlockProps
 * @param { SectionBlockProps }
 */
const SectionCentered = ({ slice }) => {
  return (
    <section className="section section--centered">
      <PrismicNextImage
        field={slice.primary.background_image}
        className={
          slice.primary.background_colour
            ? "section section--centered section--grey"
            : "section section--centered"
        }
      />
      <div className="container">
        {slice.primary.title && <PrismicRichText field={slice.primary.title} />}
        {slice.primary.description && (
          <PrismicRichText field={slice.primary.description} />
        )}
        {slice?.items?.map((item, i) => (
          <CustomLink link={item.cta_link} key={i} className="btn btn-primary">
            {item.cta_text}
          </CustomLink>
        ))}
      </div>
    </section>
  );
};

export default SectionCentered;
