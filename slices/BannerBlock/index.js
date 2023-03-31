import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import CustomLink from "../../components/CustomLink";

/**
 * @typedef {import("@prismicio/client").Content.BannerBlockSlice} BannerBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BannerBlockSlice>} BannerBlockProps
 * @param { BannerBlockProps }
 */
const BannerBlock = ({ slice }) => (
  <div className="banner">
    {slice.primary.background_image && (
      <PrismicNextImage
        field={slice.primary.background_image}
        className="banner-bg"
      />
    )}
    <div className="container">
      <div className="banner-grid">
        <div className="banner-grid-item">
          {slice.primary.title && (
            <PrismicRichText field={slice.primary.title} />
          )}
          {slice.primary.description && (
            <PrismicRichText field={slice.primary.description} />
          )}
          <div className="banner-ctas">
            {slice?.items?.map((item, i) => (
              <CustomLink
                key={i}
                link={item.cta_link}
                className="btn btn-secondary"
              >
                {item.cta_text}
              </CustomLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BannerBlock;
