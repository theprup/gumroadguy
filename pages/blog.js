import { SliceZone, PrismicLink, PrismicRichText } from "@prismicio/react";
import { components } from "../slices/index";
import { createClient } from "../prismicio";
import { Navigation } from "../components/Navigation";


const BlogHomePage = ({ navigation, page }) => (
  <div>

    <PrismicRichText field={page.data.heading} />
    <div><Navigation navigation={navigation} /></div>
    <SliceZone slices={page.data.slices} components={components} />
    {page.data.articles.map((article) => (
      // eslint-disable-next-line react/jsx-key
      <PrismicLink document={article.blog_article}>
        <PrismicRichText field={article.blog_article.data.title} />
        <PrismicRichText field={article.blog_article.data.description} />
        <PrismicRichText field={article.blog_article.data.author} />

      </PrismicLink>

    ))}
  </div>

);

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const navigation = await client.getSingle("navigation");

  const page = await client.getSingle("bloghomepage", {
    graphQuery: blogHomePageGraphQuery,
  });

  return {
    props: { page: page, navigation }, 
    // Will be passed to the page component as props
  };
}

export const blogHomePageGraphQuery = `{
  bloghomepage{
    articles{
      blog_article{
        title
        description
        author
        imageauthor
      }
    }
    slices
  }
}`;


export default BlogHomePage;
