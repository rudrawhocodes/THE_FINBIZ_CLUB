/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import blogPosts from '@src/constants/blog';
import styles from '@src/pages/blog/blog.module.scss';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'FINBIZ - Blog',
  description: 'Stories and insights from THE FINBIZ CLUB community at Adani University.',
  keywords: ['FINBIZ blog', 'Adani University insights', 'Fintech updates', 'Campus entrepreneurship stories', 'Business club news'],
};

const heroHighlights = [
  'Club announcements and event recaps curated by the leadership pods.',
  'Financial literacy guides shaped for the FINBIZ community.',
  'Spotlights on student research, partner collaborations, and mentoring.',
];

function BlogPage({ posts = blogPosts }) {
  return (
    <>
      <CustomHead {...seo} />
      <section className={clsx(styles.root, 'layout-block-inner')}>
        <div className={clsx(styles.layout, 'layout-grid-inner')}>
          <div className={styles.hero}>
            <span className="p-s">Stories</span>
            <h1 className="h2">FINBIZ Blog</h1>
            <p className="p-l">
              Our editorial desk is preparing articles tailored for the FINBIZ Club. Until the first wave drops, preview the themes we will explore with students, partners, and mentors.
            </p>
            <ul className={styles.heroHighlights}>
              {heroHighlights.map((item) => (
                <li key={item} className="p-s">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.cardList}>
            {posts.map((post) => (
              <Link aria-label={`Read ${post.title}`} key={post.id} href={`/blog/${post.id}`} scroll={false} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={post.img} fill sizes="(min-width: 1024px) 360px, 100vw" alt={post.title} />
                </div>
                <div className={styles.meta}>
                  <span className="p-s">{post.date}</span>
                  <span className="p-s">{post.readingTime}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className="h3">{post.title}</h3>
                  <p className="p-s">{post.excerpt}</p>
                </div>
                <span className={clsx('p-s', styles.cardCta)}>Preview →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: blogPosts,
    },
  };
}

export default BlogPage;
