import React from 'react'
import { PrismicRichText, PrismicLink} from '@prismicio/react'
import {  } from '@prismicio/react'

const TextSlice = ({ slice }) => (
  <section>
  <PrismicRichText field={slice.primary.eyebrow} />
    <span className="title">
      {
        slice.primary.title ?
        <PrismicRichText field={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
   
      <PrismicRichText field={slice.primary.paragraph} />
      


    <PrismicLink  field={slice.primary.link}>{ slice.primary.label }</PrismicLink>

    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default TextSlice