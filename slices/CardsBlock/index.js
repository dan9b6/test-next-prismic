import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import CustomLink from "../../components/CustomLink";

/**
 * @typedef {import("@prismicio/client").Content.CardsBlockSlice} CardsBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardsBlockSlice>} CardsBlockProps
 * @param { CardsBlockProps }
 */
const CardsBlock = ({ slice }) => {
  return (
    <section
      className={
        slice.primary.background_colour ? `section section--grey` : "section"
      }
    >
      <div className="container">
        <div className="section-header">
          {slice.primary.title && (
            <PrismicRichText field={slice.primary.title} />
          )}
          {slice.primary.description && (
            <PrismicRichText field={slice.primary.description} />
          )}
        </div>
        <div
          className={
            slice.primary.columns
              ? `grid grid--${slice.primary.columns}`
              : "grid"
          }
        >
          {slice?.items?.map((item, i) => (
            <div className="card" key={i}>
              <PrismicNextImage field={item.item_image} className="card-img" />
              <div className="card-body">
                <div className="card-content">
                  <h3 className="h4">{item.item_heading}</h3>
                  <PrismicRichText field={item.item_description} />
                </div>
                <div className="card-footer">
                  <CustomLink
                    link={item.item_cta_link}
                    className="btn btn-primary"
                  >
                    {item.item_cta_text}
                  </CustomLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsBlock;
