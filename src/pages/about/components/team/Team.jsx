import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/team/styles/team.module.scss';

const MEMBERS = [
    {
        name: 'Rudra Thacker',
        role: 'Managing Director (M.D)',
        description: 'Oversees club strategy, coordinates cross-committee priorities, and maintains institution partnerships.',
        linkedin: 'https://www.linkedin.com/company/finbiz-adani-university',
        email: 'mailto:leadership@finbizclub.in',
    },
    {
        name: 'Mahir Shah',
        role: 'Chief Technical Officer (C.T.O)',
        description: 'Leads the club\'s technology roadmap, from platform experimentation to analytics and automation pilots.',
        linkedin: 'https://www.linkedin.com/company/finbiz-adani-university',
        email: 'mailto:leadership@finbizclub.in',
    },
    {
        name: 'Mann Shah',
        role: 'Chief Financial Officer (C.F.O)',
        description: 'Manages budgeting frameworks, sponsorship pipelines, and transparent reporting for every initiative.',
        linkedin: 'https://www.linkedin.com/company/finbiz-adani-university',
        email: 'mailto:leadership@finbizclub.in',
    },
    {
        name: 'Divyanshiba Gohil',
        role: 'Chief Communication Officer (C.C.O)',
        description: 'Shapes messaging guidelines, steers storytelling, and ensures member updates stay clear and consistent.',
        linkedin: 'https://www.linkedin.com/company/finbiz-adani-university',
        email: 'mailto:communications@finbizclub.in',
    },
    {
        name: 'Yesha Desai',
        role: 'Chief Marketing Officer (C.M.O)',
        description: 'Designs campaign playbooks, manages outreach calendars, and keeps the FINBIZ brand energetic.',
        linkedin: 'https://www.linkedin.com/company/finbiz-adani-university',
        email: 'mailto:marketing@finbizclub.in',
    },
    {
        name: 'Khushi Savaliya',
        role: 'Joint Event Managing Officer (E.M.O)',
        description: 'Coordinates on-campus experiences, volunteer workflows, and the logistics that power every gathering.',
        linkedin: 'https://www.linkedin.com/company/finbiz-adani-university',
        email: 'mailto:events@finbizclub.in',
    },
    {
        name: 'Manya Patel',
        role: 'Joint Event Managing Officer (E.M.O)',
        description: 'Partners on event production, audience engagement, and smooth delivery across hybrid and in-person formats.',
        linkedin: 'https://www.linkedin.com/company/finbiz-adani-university',
        email: 'mailto:events@finbizclub.in',
    },
];

function Team() {
    return (
        <section className={clsx(styles.root, 'layout-grid-inner')}>
            <div className={styles.header}>
                <AppearTitle>
                    <span className={clsx('p-s', styles.sectionLabel)}>Leadership</span>
                    <h2 className="h2">Founding Team</h2>
                    <div className="p-l">Meet the students anchoring THE FINBIZ CLUB. Detailed bios and contact links will be published soon as programmes go live.</div>
                </AppearTitle>
            </div>
            <div className={styles.grid}>
                {MEMBERS.map((member) => (
                    <AppearTitle key={member.name}>
                        <article className={styles.card}>
                            <div className={styles.cardHeading}>
                                <span className={clsx('p-s', styles.role)}>{member.role}</span>
                                <h4 className="h4">{member.name}</h4>
                            </div>
                            <p className={clsx('p-s', styles.description)}>{member.description}</p>
                            <div className={styles.links}>
                                <a aria-label={`${member.name} LinkedIn`} href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-xs">
                                    LinkedIn ↗
                                </a>
                                <a aria-label={`Email ${member.name}`} href={member.email} className="p-xs">
                                    Email ↗
                                </a>
                            </div>
                        </article>
                    </AppearTitle>
                ))}
            </div>
            <div className={styles.ctaRow}>
                <a className={clsx('p-s', styles.joinButton)} href="/team/vacancies" rel="noopener noreferrer" aria-label="View FINBIZ team vacancies">
                    Join the Team
                </a>
            </div>
        </section>
    );
}

export default Team;
