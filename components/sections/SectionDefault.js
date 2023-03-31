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
    <section
      className={
        slice.primary.background_colour
          ? "section section--default section--grey"
          : "section section--default"
      }
    >
      <PrismicNextImage
        field={slice.primary.background_image}
        className="section-bg"
      />
      <div className="container">
        <div className="grid grid--2">
          <div className="section-text">
            {slice.primary.title && (
              <PrismicRichText field={slice.primary.title} />
            )}
            {slice.primary.description && (
              <PrismicRichText field={slice.primary.description} />
            )}
            {slice?.items?.map((item, i) => (
              <CustomLink
                link={item.cta_link}
                key={i}
                className="btn btn-primary"
              >
                {item.cta_text}
              </CustomLink>
            ))}
          </div>

          <PrismicNextImage
            field={slice.primary.image}
            className="section-img"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCentered;
