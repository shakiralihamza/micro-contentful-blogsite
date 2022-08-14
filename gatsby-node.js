exports.createPages = async ({graphql, actions }) => {
  const { createPage } = actions

  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: require.resolve("./src/templates/blog-post.tsx"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
