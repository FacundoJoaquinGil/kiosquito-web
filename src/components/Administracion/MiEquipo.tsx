import equipoIcon from "../../assets/images/equipo.svg";

export type TeamMemberRole = "OWNER" | "EMPLOYEE";

export type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: TeamMemberRole;
  isOnline: boolean;
};

type MiEquipoProps = {
  members: TeamMember[];
  onOpenModal: () => void;
};

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

const MiEquipo = ({ members, onOpenModal }: MiEquipoProps) => {
  const onlineMembers = members.filter((member) => member.isOnline);

  return (
    <section className="admin-card admin-team">
      <div className="admin-card__header">
        <div>
          <h2>Mi Equipo</h2>
          <p>Personas con acceso al kiosco</p>
        </div>

        <div className="admin-team__icon">
          <img src={equipoIcon} alt="Equipo" />
        </div>
      </div>

      <div className="admin-team__status">
        <span className="admin-team__online-dot" />

        <span>
          {onlineMembers.length === 1
            ? "1 usuario activo"
            : `${onlineMembers.length} usuarios activos`}
        </span>
      </div>

      <div className="admin-team__members">
        {members.slice(0, 4).map((member) => (
          <div className="admin-team__member" key={member.id}>
            <div className="admin-team__avatar">
              {getInitials(member.name)}
            </div>

            <div className="admin-team__info">
              <strong>{member.name}</strong>

              <span>
                {member.role === "OWNER" ? "Administrador" : "Empleado"}
              </span>
            </div>

            <div
              className={`admin-team__connection ${
                member.isOnline
                  ? "admin-team__connection--online"
                  : "admin-team__connection--offline"
              }`}
            >
              <span />

              {member.isOnline ? "Activo" : "Inactivo"}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="admin-team__manage-button"
        onClick={onOpenModal}
      >
        Gestionar equipo
      </button>
    </section>
  );
};

export default MiEquipo;