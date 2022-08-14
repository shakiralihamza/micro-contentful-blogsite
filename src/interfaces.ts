export interface PostProps {
  post: {
    node: {
      createdAt: string
      description: { description: string }
      featuredImage: { url: string }
      title: string
      slug: string
    }
  };
}
