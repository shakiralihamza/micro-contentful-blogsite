// noinspection GraphQLUnresolvedReference

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import MainFeaturedPost from "../components/MainFeaturedPost";
import Grid from "@mui/material/Grid";
import Post from "../components/Post";
import Layout from "../components/layout";


const BlogPage = () => {
  const data = useStaticQuery(
    graphql`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        id
                        slug
                        createdAt(formatString: "Do MMMM, YYYY")
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
    <>
      <Layout>
        <main>
          <MainFeaturedPost post={data.allContentfulBlogPost.edges[0]} />
          <Grid container spacing={4}>
            {data.allContentfulBlogPost.edges.map((post) => (
              <Post key={post.node.title} post={post} />
            ))}
          </Grid>
        </main>
      </Layout>
    </>
  );
};


export default BlogPage;
