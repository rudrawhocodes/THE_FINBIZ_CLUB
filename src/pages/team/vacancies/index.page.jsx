/* eslint-disable react/jsx-props-no-spreading */
import clsx from 'clsx';
import CustomHead from '@src/components/dom/CustomHead';
import styles from '@src/pages/team/vacancies/vacancies.module.scss';

const seo = {
  title: 'FINBIZ - Join the Team',
  description: 'Explore open leadership and volunteer roles within THE FINBIZ CLUB at Adani University.',
  keywords: ['FINBIZ vacancies', 'Adani University club roles', 'student leadership openings', 'FINBIZ recruitment'],
};

const VACANCIES = [
  {
    id: 'research-analyst',
    title: 'Research Analyst (Volunteer)',
    status: 'Opening soon',
    summary: 'Collaborate with the knowledge pod to prepare market briefs, fintech primers, and speaker dossiers.',
  },
  {
    id: 'events-coordinator',
    title: 'Events Coordinator (Volunteer)',
    status: 'Opening soon',
    summary: 'Support hybrid and on-campus programmes with logistics, partner coordination, and attendee experience.',
  },
  {
    id: 'content-strategist',
    title: 'Content Strategist (Volunteer)',
    status: 'Opening soon',
    summary: 'Shape storytelling across newsletters, social campaigns, and the FINBIZ Journal in collaboration with comms leads.',
  },
];

function VacanciesPage() {
  return (
    <>
      <CustomHead {...seo} />
      <section className={clsx(styles.root, 'layout-block-inner')}>
        <div className={clsx(styles.hero, 'layout-grid-inner')}>
          <div className={styles.heroContent}>
            <span className="p-s">Recruitment</span>
            <h1 className="h2">Join the FINBIZ Team</h1>
            <p className="p-l">
              We are formalising new roles for the upcoming semester. Browse the upcoming opportunities below and register interest to be the first to know when applications go live.
            </p>
            <a className={clsx('p-s', styles.registerLink)} href="mailto:talent@finbizclub.in" aria-label="Email FINBIZ talent desk">
              Register Interest ↗
            </a>
          </div>
        </div>
        <div className={clsx(styles.list, 'layout-grid-inner')}>
          {VACANCIES.map((role) => (
            <article key={role.id} className={styles.card}>
              <header className={styles.cardHeader}>
                <span className={clsx('p-s', styles.status)}>{role.status}</span>
                <h2 className="h3">{role.title}</h2>
              </header>
              <p className="p-s">{role.summary}</p>
              <button type="button" className={clsx('p-xs', styles.notifyButton)} aria-label={`Notify me about ${role.title}`}>
                Notify Me
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default VacanciesPage;
