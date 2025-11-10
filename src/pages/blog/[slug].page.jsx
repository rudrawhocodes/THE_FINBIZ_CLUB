import clsx from 'clsx';
import Image from 'next/image';
import blogPosts from '@src/constants/blog';
import styles from '@src/pages/blog/blogPost.module.scss';
import CustomHead from '@src/components/dom/CustomHead';

function BlogPostPage({ post }) {
    const seo = {
        title: `FINBIZ - ${post.title}`,
        description: post.excerpt,
    };

    return (
        <>
            <CustomHead {...seo} />
            <article className={clsx(styles.root, 'layout-block-inner')}>
                <header className={clsx(styles.header, 'layout-grid-inner')}>
                    <div className={styles.meta}>
                        <span className="p-s">{post.date}</span>
                        <span className="p-s">{post.readingTime}</span>
                    </div>
                    <h1 className="h1">{post.title}</h1>
                    <p className="p-l">{post.excerpt}</p>
                </header>
                <div className={clsx(styles.imageWrapper, 'layout-grid-inner')}>
                    <div>
                        <Image src={post.img} fill sizes="100%" alt={post.title} />
                    </div>
                </div>
                <section className={clsx(styles.body, 'layout-grid-inner')}>
                    <div>
                        {(post.content || []).map((paragraph) => (
                            <p className="p-l" key={paragraph}>
                                {paragraph}
                            </p>
                        ))}
                        {(!post.content || post.content.length === 0) && (
                            <p className="p-l">Full article content will appear here as soon as the FINBIZ editorial team completes the draft.</p>
                        )}
                    </div>
                </section>
            </article>
        </>
    );
}

export function getStaticPaths() {
    return {
        paths: blogPosts.map((post) => ({
            params: { slug: post.id },
        })),
        fallback: false,
    };
}

export function getStaticProps({ params }) {
    const post = blogPosts.find((entry) => entry.id === params.slug);

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            post,
        },
    };
}

export default BlogPostPage;
