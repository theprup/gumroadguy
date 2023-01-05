import { createClient } from "../prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "../slices/index";
import { Navigation } from "../components/Navigation";
import Head from "next/head"

const Page = ({ navigation, page}) => {
  return (
    
    <div>
    <Head> <title>{ page.data.seotitle }</title>
    <meta name="description" content={ page.data.seodescription }></meta>
     </Head>
      <div className="header">
      
        <PrismicRichText field={page.data.header} />
      </div>
      <Navigation navigation={navigation} />

      <SliceZone slices={page.data.slices} components={components} />
    </div>
  
  );
};

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const navigation = await client.getSingle("navigation");
  const page = await client.getSingle("home");

  return {
    props: {
      page,
      navigation,
    },
  };
}
