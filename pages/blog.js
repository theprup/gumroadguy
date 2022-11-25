import { SliceZone, PrismicLink, PrismicRichText } from '@prismicio/react'
import { components } from '../slices/index'
import { createClient } from '../prismicio';


const BlogHomePage = ({ slices }) => {
    return (
      <SliceZone slices={slices} components={components} />
    );
};

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('bloghomepage')

  return {
    props: {slices: page.data.slices}, // Will be passed to the page component as props
  }
}


export default BlogHomePage;