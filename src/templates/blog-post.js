import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            createdAt(formatString: "Do MMMM, YYYY")
            featuredImage {
                url
            }
            body {
                raw
            }
        }
    }
`;

const richTextDocument = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Hello",
          data: {},
          marks: [{ type: "bold" }]
        },
        {
          nodeType: "text",
          value: " world!",
          data: {},
          marks: [{ type: "italic" }]
        }
      ]
    }
  ]
};
function SEO(props) {
  return null;
}

SEO.propTypes = {};

function BlogPost(props) {

  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost.createdAt}
        </span>

        {props.data.contentfulBlogPost.featuredImage && (
          <img src={props.data.contentfulBlogPost.featuredImage.url} alt="img" />
        )}
      </div>
      <p>{documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}</p>
    </Layout>
  );
}

export default BlogPost;
