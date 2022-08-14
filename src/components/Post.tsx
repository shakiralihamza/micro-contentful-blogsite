import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "gatsby";
import { PostProps } from "../interfaces";

export default function Post(props: PostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component={Link} to={`/blog/${post.node.slug}`}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.node.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.node.createdAt}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.node.description.description}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={post.node.featuredImage.url}
            alt={"img"}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}