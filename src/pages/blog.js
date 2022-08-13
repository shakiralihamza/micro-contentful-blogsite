// noinspection GraphQLUnresolvedReference

import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Seo from "../components/seo";
import MainFeaturedPost from "../components/MainFeaturedPost";
import Grid from "@mui/material/Grid";
import Post from "../components/Post";
import Layout from "../components/layout";


const SecondPage = () => {
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
              <Post key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/*<Main title="From the firehose" posts={posts} />*/}
          </Grid>
        </main>
      </Layout>
    </>
  );
};

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
