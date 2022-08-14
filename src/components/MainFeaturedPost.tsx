import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Link as GatsbyLink} from "gatsby";
import Box from "@mui/material/Box";
import { PostProps } from "../interfaces";

export default function MainFeaturedPost(props: PostProps) {
  const { post } = props;

  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${post.node.featuredImage.url})`
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={post.node.featuredImage.url} alt={"img"} />}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)"
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 }
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.node.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.node.description.description}
            </Typography>
            <Link component={GatsbyLink} to={`/blog/${post.node.slug}`}>
              continue reading...
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
