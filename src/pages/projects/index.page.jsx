import { useEffect } from 'react';

import CustomHead from '@src/components/dom/CustomHead';
import { useRouter } from 'next/router';

const seo = {
  title: 'FINBIZ - Blog',
  description: 'Selected initiatives now live inside the FINBIZ blog.',
};

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/blog');
  }, [router]);

  return <CustomHead {...seo} />;
}

export const getServerSideProps = () => ({
  redirect: {
    destination: '/blog',
    permanent: true,
  },
});

export default Page;
