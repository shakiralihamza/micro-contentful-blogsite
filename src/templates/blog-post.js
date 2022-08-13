// noinspection GraphQLUnresolvedReference

import React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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


function BlogPost(props) {

  return (
    <Layout>
      <Link component={GatsbyLink} to="/blog" sx={{pl:1}}>&#60; Go Back</Link>
      <div>
        <Typography variant={'h4'} sx={{py:2}}>{props.data.contentfulBlogPost.title}</Typography>
        <Box className="meta" component={'i'}>
          Posted on {props.data.contentfulBlogPost.createdAt}
        </Box>

        {props.data.contentfulBlogPost.featuredImage && (
          <img src={props.data.contentfulBlogPost.featuredImage.url} alt="img" style={{width:'100%'}}/>
        )}
      </div>
      <p>{documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}</p>
    </Layout>
  );
}

export default BlogPost;
