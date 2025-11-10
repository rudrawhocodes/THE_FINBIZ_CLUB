/* eslint-disable react/jsx-props-no-spreading */
import TeamSection from '@src/pages/about/components/team/Team';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
    title: 'FINBIZ - Team',
    description: 'Meet the founding leadership team guiding THE FINBIZ CLUB at Adani University.',
    keywords: [
        'FINBIZ team',
        'Adani University leaders',
        'Student leadership',
        'Business club team',
        'Fintech club committee',
        'Club officers',
    ],
};

function TeamPage() {
    return (
        <>
            <CustomHead {...seo} />
            <TeamSection />
        </>
    );
}

export default TeamPage;
