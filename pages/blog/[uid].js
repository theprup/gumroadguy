// ~/pages/[uid].js

import { PrismicRichText, SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient, linkResolver } from "../../prismicio";
import { components } from "../../slices";
import Image from 'next/image'

function BlogPage({page}) {
    return (
            <><PrismicRichText field={page.data.title} />
            <PrismicRichText field={page.data.description} />
            <PrismicRichText field={page.data.author} />
            <SliceZone slices={page.data.slices} components={components} /></>
    );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("blogpage", params.uid);

  return {
    props: {
      page: page,
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
<style jsx>{` 
  .p {
    color: green
  }
  `}</style>
export default BlogPage;