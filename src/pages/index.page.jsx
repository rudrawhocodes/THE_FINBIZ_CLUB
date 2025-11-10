/* eslint-disable react/jsx-props-no-spreading */
import Home from '@src/pages/components/home/Index';
import About from '@src/pages/components/about/Index';
import Quote from '@src/pages/components/quote/Index';
import Blog from '@src/pages/components/blog/Index';
import Clients from '@src/pages/components/clients/Index';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'FINBIZ - Adani University Business & Fintech Club',
  description: 'THE FINBIZ CLUB at Adani University — a student-run business and fintech club focused on entrepreneurship, finance, and technology. Join us for events, workshops and networking.',
  keywords: ['FINBIZ', 'Adani University', 'Business Club', 'Fintech', 'Student Club', 'Entrepreneurship', 'Workshops', 'Events'],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Home />
      <About />
      <Clients />
      <Quote />
      <Blog />
    </>
  );
}

export default Page;
