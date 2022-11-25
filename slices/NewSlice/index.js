import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const NewSlice = ({ slice }) => (
  <section>
    <span>
    <div>
  <PrismicRichText field={slice.primary.heading} /></div>
<div><PrismicRichText field={slice.primary.paragraph} /></div>
</span>
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

export default NewSlice