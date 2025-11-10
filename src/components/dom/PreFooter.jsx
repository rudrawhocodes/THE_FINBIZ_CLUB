import clsx from 'clsx';
import styles from '@src/components/dom/styles/preFooter.module.scss';

function PreFooter() {
  return (
    <section className={clsx(styles.root, 'layout-block-inner')}>
      <div className={styles.textsContainer}>
        <div>
          <h2 className="h1">We drive campus finance innovation.</h2>
          <h2 className="h1">We back bold ideas.</h2>
          <h2 className="h1">The door is open.</h2>
        </div>
        <div>
          <h6 className="h6">Take that step today.</h6>
        </div>
      </div>

      <div className={styles.canvas} aria-hidden="true">
        <div className={styles.canvasBackdrop} />
      </div>
    </section>
  );
}

export default PreFooter;
