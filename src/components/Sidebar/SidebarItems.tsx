interface SidebarItemProps {
  title: string;
  subtitle?: string;
  active?: boolean;
}

const SidebarItem = ({
  title,
  subtitle,
  active = false,
}: SidebarItemProps) => {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <div className="icon"></div>

      <div>
        <h4>{title}</h4>

        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default SidebarItem;