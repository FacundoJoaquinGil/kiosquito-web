type AdminMetricCardProps = {
  title: string;
  value: string;
  detail: string;
  icon: string;
  iconAlt: string;
  positive?: boolean;
};

const AdminMetricCard = ({
  title,
  value,
  detail,
  icon,
  iconAlt,
  positive = true,
}: AdminMetricCardProps) => {
  return (
    <article className="admin-metric-card">
      <div className="admin-metric-card__header">
        <span>{title}</span>

        <div className="admin-metric-card__icon">
          <img src={icon} alt={iconAlt} />
        </div>
      </div>

      <strong className="admin-metric-card__value">{value}</strong>

      <p
        className={
          positive
            ? "admin-metric-card__detail admin-metric-card__detail--positive"
            : "admin-metric-card__detail"
        }
      >
        {detail}
      </p>
    </article>
  );
};

export default AdminMetricCard;