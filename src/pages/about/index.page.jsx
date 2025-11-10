/* eslint-disable react/jsx-props-no-spreading */
import Hero from '@src/pages/about/components/hero/Hero';
import Overview from '@src/pages/about/components/overview/Overview';
import Services from '@src/pages/about/components/services/Services';
import Process from '@src/pages/about/components/process/Process';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'FINBIZ - About',
  description: 'A PLATFORM TO CONNECT, LEARN, AND GROW IN THE WORLD OF BUSINESS AND FINTECH.',
  keywords: [
    'FINBIZ',
    'Adani University',
    'Business Club',
    'Fintech Club',
    'Business Events',
    'Workshops',
    'Networking',
    'Startups',
    'Entrepreneurship',
    'Finance',
    'Technology',
    'Innovation',
    'Learning',
    'Growth',
    'Student Community',
    'Business Development',
    'Fintech Trends',
    'Industry Insights',
    'Professional Development',
    'Collaboration',
    'Leadership',
    'Career Opportunities',
    'Business Strategies',
    'Financial Literacy',
    'Tech Integration',
    'Market Analysis',
    'Investment Opportunities',
    'Club Activities',
    'Student Engagement',
    'Adani University Students',
    'Campus Life',
    'Extracurricular Activities',
    'University Clubs',
    'Student Organizations',
    'Business Networking',
    'Fintech Innovations',
    'Club Membership',
    'Event Management',
    'Skill Development',
    'Business Competitions',
    'Guest Lectures',
    'Industry Experts',
    'Alumni Network',
    'Career Growth',
    'Personal Development',
    'Team Building',
    'Project Management',
    'Business Planning',
    'Financial Management',
    'Tech Solutions',
    'Digital Transformation',
    'E-commerce',
    'Blockchain Technology',
    'Artificial Intelligence in Finance',
    'Cybersecurity in Fintech',
    'Regulatory Compliance',
    'Financial Technologies',
    'Business Analytics',
  ],
};
function Page() {
  return (
    <>
      <CustomHead {...seo} />

      <Hero />
      <Overview />
      <Services />
      <Process />
    </>
  );
}

export default Page;
