
import { createClient } from '../prismicio'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { components } from '../slices/index'
import { Navigation } from "../components/Navigation";



const Page = ({ navigation, page }) => {
  return ( 
    <div>
        <Navigation navigation={navigation} />
        <PrismicRichText field={page.data.header} />
        <SliceZone slices={page.data.slices} components={components} />
    </div>
  )
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  const navigation = await client.getSingle("navigation");
  const page = await client.getSingle('home')

  return {
    props: {
      page,
      navigation
    },
  }
}