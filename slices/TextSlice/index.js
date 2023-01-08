import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import {} from "@prismicio/react";
import { asDate } from "@prismicio/helpers";


const TextSlice = ({ slice }) => (
  <section>
    <div className="eyebrow">
      <PrismicRichText field={slice.primary.eyebrow} />
    </div>
    <div >
      {slice.primary.title ? (
        <PrismicRichText field={slice.primary.title} components={{
          heading1: ({ children }) => <h1 className="title">{children}</h1>
        }
        }/>
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </div>

    <PrismicRichText field={slice.primary.paragraph} />

    <PrismicLink field={slice.primary.link}>{slice.primary.label}</PrismicLink>

    <style jsx>{`
      section {
        text-align: center;
        background-color: #ff90e8;
        font-family: 'Mabry pro', sans-serif;
        padding: 2em;
      }
      .title {
        font-size: 5rem;
        padding-right: 150px;
        padding-left: 150px;
        font-weight: lighter;
        margin-block-start: 0em;
        margin-block-end: 0em;
      }
      .eyebrow {
        font-weight: bold;
      }
    `}</style>
  </section>
);

export default TextSlice;
