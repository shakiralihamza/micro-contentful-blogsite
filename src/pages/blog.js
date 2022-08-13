import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import Seo from "../components/seo";


const SecondPage = () => {
  const data = useStaticQuery(
    graphql`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        id
                        slug
                        createdAt
                        description {
                            description
                        }
                        featuredImage {
                            url
                        }
                        title
                    }
                }
            }
        }
    `
  );
  return (
    <Layout>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>

      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.createdAt}</span>
              </div>
              {edge.node.featuredImage && (
                <img src={edge.node.featuredImage.url} alt="img" />
              )}
              <p className="excerpt">
                {edge.node.description.description}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
