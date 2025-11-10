import blogPosts from '@src/constants/blog';

const blogLinks = blogPosts.map((post) => ({
  title: post.title,
  href: `/blog/${post.id}`,
}));

export default blogLinks;
