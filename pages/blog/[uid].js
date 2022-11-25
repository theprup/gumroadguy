// ~/pages/[uid].js

import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";

function BlogPage({slices}) {
    return (

            <SliceZone slices={slices} components={components} />
    );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("blogpage", params.uid);

  return {
    props: {
      slices: page.data.slices,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const blogs = await client.getAllByType("blogpage");

  return {
    paths: blogs.map((blogpage) => prismicH.asLink(blogpage, linkResolver)),
    fallback: false,
  };
}

export default BlogPage;