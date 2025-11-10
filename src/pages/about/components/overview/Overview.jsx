import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">A thriving club is a launchpad where curiosity</h3>
            <h3 className="h3">
              meets <span className="medium">experimentation</span> and shared wins.
            </h3>
            <h3 className="h3">
              FINBIZ keeps that momentum <span className="medium">alive</span> every day.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">A thriving club is a launchpad where curiosity becomes capability.</h3>
            <h3 className="h3">
              FINBIZ blends <span className="medium">experimentation</span>, mentorship, and community so growth feels natural.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        {!isMobile ? (
          <AppearTitle key="desktop-overview">
            <h6 className="h6">THE FINBIZ CLUB is the official Business & Fintech student club at Adani University.</h6>
            <h6 className="h6">We organise workshops, speaker sessions, hackathons and networking events to</h6>
            <h6 className="h6">help students explore entrepreneurship, finance and financial technology.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Our mission is to bridge academic learning with real-world business skills,</h6>
            <h6 className="h6">connect students with industry mentors, and support early-stage ideas and teams.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>We welcome students from all backgrounds — whether you&apos;re curious about</h6>
            <h6 className="h6">startups, financial modelling, product, or fintech engineering — join us!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>THE FINBIZ CLUB.</h6>
          </AppearTitle>
        ) : (
          <AppearTitle key="mobile-overview">
            <h6 className="h6">THE FINBIZ CLUB is the official Business & Fintech student club at Adani University.</h6>
            <h6 className="h6">We organise workshops, speaker sessions, hackathons and networking events to</h6>
            <h6 className="h6">help students explore entrepreneurship, finance and financial technology.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>Our mission is to bridge academic learning with real-world business skills,</h6>
            <h6 className="h6">connect students with industry mentors, and support early-stage ideas and teams.</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>We welcome students from all backgrounds — whether you&apos;re curious about</h6>
            <h6 className="h6">startups, financial modelling, product, or fintech engineering — join us!</h6>
            <h6 className={clsx(styles.paddingTop, 'h6')}>THE FINBIZ CLUB.</h6>
          </AppearTitle>
        )}
      </div>
    </section>
  );
}
export default Overview;
