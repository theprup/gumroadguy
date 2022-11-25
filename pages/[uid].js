
import { createClient, linkResolver } from '../prismicio'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { components } from '../slices/index'
import * as prismicH from "@prismicio/helpers"
import { Navigation } from '../components/Navigation'

function Page({ navigation, slices }) {
  return (
    <div>
          <SliceZone slices={slices} components={components} />
  </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const navigation = await client.getSingle("navigation");
  console.log('test',navigation)
  const page = await client.getByUID("page", params.uid);

  return {
    props: {
      navigation,
      slices: page.data.slices,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("page","bloghomepage","blogpage");

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}

export default Page;