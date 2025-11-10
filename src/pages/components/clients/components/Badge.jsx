import clsx from 'clsx';
import styles from '@src/pages/components/clients/styles/badge.module.scss';

const PARTNER_BADGES = {
  company1: {
    name: 'Google',
    tagline: 'Innovation Partner',
  },
  company2: {
    name: 'Microsoft',
    tagline: 'Technology Partner',
  },
  company3: {
    name: 'Trexquant',
    tagline: 'Quant Research Partner',
  },
};

function Badge({ name }) {
  const partner = PARTNER_BADGES[name] || { name: 'Partner', tagline: 'Collaboration' };

  return (
    <div className={clsx(styles.badge, styles[`badge${name}`])}>
      <span className={styles.tagline}>{partner.tagline}</span>
      <h3 className="h3">{partner.name}</h3>
    </div>
  );
}

export default Badge;
