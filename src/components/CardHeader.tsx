import styles from './CardHeader.module.css';

interface CardHeaderProps {
  title: string;
  subtitle?: string;
  yearDisplay?: string;
  role?: string;
  hasExpand?: boolean;
  isExpanded?: boolean;
}

export function CardHeader({
  title,
  subtitle,
  yearDisplay,
  role,
  hasExpand,
  isExpanded,
}: CardHeaderProps) {
  return (
    <>
      <TopSection title={title} hasExpand={hasExpand} isExpanded={isExpanded} />
      <RoleSection role={role} yearDisplay={yearDisplay} />
      {subtitle && <SubtitleSection subtitle={subtitle} />}
    </>
  );
}

// Components
function TopSection({
  title,
  hasExpand,
  isExpanded,
}: {
  title: string;
  hasExpand?: boolean;
  isExpanded?: boolean;
}) {
  return (
    <div className={styles.top}>
      <h4 className={styles.title}>{title}</h4>
      {hasExpand && (
        <span className={styles.expandIcon}>{isExpanded ? '−' : '+'}</span>
      )}
    </div>
  );
}

function RoleSection({
  role,
  yearDisplay,
}: {
  role?: string;
  yearDisplay?: string;
}) {
  if (!role) return null;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div className={styles.role}>
        {role} - {yearDisplay}
      </div>
    </div>
  );
}

function SubtitleSection({ subtitle }: { subtitle: string }) {
  return <div className={styles.subtitle}>{subtitle}</div>;
}
