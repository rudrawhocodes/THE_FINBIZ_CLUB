import AppearByWords from '@src/components/animationComponents/appearByWords/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import blogPosts from '@src/constants/blog';
import styles from '@src/pages/components/blog/styles/blog.module.scss';

function Blog() {
    const featuredPosts = blogPosts.slice(0, 3);

    return (
        <>
            <section className={clsx(styles.titleContainer, 'layout-grid-inner')}>
                <h1 className={clsx(styles.title, 'h1')}>
                    <AppearByWords>What's Coming to the Blog</AppearByWords>
                </h1>
            </section>
            <section className={clsx(styles.root, 'layout-block-inner')}>
                <div className={clsx(styles.grid, 'layout-grid-inner')}>
                    {featuredPosts.map((post) => (
                        <Link aria-label={`Read ${post.title}`} key={post.id} scroll={false} href={`/blog/${post.id}`} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image src={post.img} fill sizes="100%" alt={post.title} />
                            </div>
                            <div className={styles.meta}>
                                <span className="p-s">{post.date}</span>
                                <span className={clsx('p-s', styles.readingTime)}>{post.readingTime}</span>
                            </div>
                            <h3 className="h3">{post.title}</h3>
                            <p className="p-s">{post.excerpt}</p>
                        </Link>
                    ))}
                </div>
                <div className={styles.buttonContainer}>
                    <ButtonLink href="/blog" label="VISIT THE BLOG" />
                </div>
            </section>
        </>
    );
}

export default Blog;
