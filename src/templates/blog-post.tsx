// noinspection GraphQLUnresolvedReference

import * as React from "react";
import { graphql, Link as GatsbyLink } from "gatsby";
import Layout from "../components/layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useAuthValue } from "../components/Auth/AuthContext";

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            slug
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
  const blogContent = props.data.contentfulBlogPost.body.raw;
  const imgUrl = props.data.contentfulBlogPost.featuredImage.url;
  const featuredImage = props.data.contentfulBlogPost.featuredImage;
  const createdAt = props.data.contentfulBlogPost.createdAt;
  const title = props.data.contentfulBlogPost.title;

  const [cookies, setCookie] = useCookies(["postViewCount", "postsViewed"]);
  const { currentUser } = useAuthValue();

  useEffect(() => {
    // If the user is logged in, we don't need to track their views
    if (currentUser === null) {
      const newPostViewCount = cookies.postViewCount ? Number(cookies.postViewCount) + 1 : 1;
      const newPostsViewed = cookies.postsViewed ? [...cookies.postsViewed, props.data.contentfulBlogPost.slug] : [props.data.contentfulBlogPost.slug];

      //if current post already visited, don't consider it
      if (cookies.postsViewed && cookies.postsViewed.includes(props.data.contentfulBlogPost.slug)) {
        return;
      } else {
        setCookie("postsViewed", newPostsViewed, { path: "/", maxAge: 3600 });
      }

      //if current post already visited, don't count it
      if (cookies.postViewCount && cookies.postViewCount.includes(props.data.contentfulBlogPost.slug)) {
        return;
      } else {
        setCookie("postViewCount", newPostViewCount, { path: "/", maxAge: 3600 });
      }
    }
  }, []);

  return (
    <Layout>
      <Link component={GatsbyLink} to="/" sx={{ pl: 1 }}>&#60; Go Back</Link>
      <div>
        <Typography variant={"h4"} sx={{ py: 2 }}>{title}</Typography>
        <Box className="meta" component={"i"}>
          Posted on {createdAt}
        </Box>

        {featuredImage && (
          <img src={imgUrl} alt="img" style={{ width: "100%" }} />
        )}

      </div>
      <Box>
        {
          cookies.postViewCount > 3
            ? currentUser === null
              ? <GatedBlogPost postContent={blogContent} />
              : <FullBlogPost postContent={blogContent} />
            : <FullBlogPost postContent={blogContent} />
        }
      </Box>
    </Layout>
  );
}

const FullBlogPost = ({ postContent }) => <>{documentToReactComponents(JSON.parse(postContent))}</>;

const GatedBlogPost = ({ postContent }) => (<>
  {
    // @ts-ignore
    documentToReactComponents(JSON.parse(postContent)).slice(0, 3)
  }
  <blockquote><b>...</b></blockquote>
  <Alert severity="warning">
    <AlertTitle>Sorry, you've reached your limit</AlertTitle>
    Please Sign Up to view full blog post, or try again in an hour
  </Alert>
</>);

export default BlogPost;
