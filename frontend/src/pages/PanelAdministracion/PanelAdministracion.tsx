import { useState } from "react";

import "./PanelAdministracion.css";

import AdminMetricCard from "../../components/Administracion/AdminMetricCard";
import VentasBarChart from "../../components/Administracion/VentasBarChart";
import MiEquipo, { type TeamMember } from "../../components/Administracion/MiEquipo";

import EquipoModal from "../../components/Administracion/EquipoModal";



import ingresosIcon from "../../assets/images/ingresos.svg";
import gananciaIcon from "../../assets/images/ganancia.svg";
import ventasIcon from "../../assets/images/ventas.svg";
import RegistroQuickList from "../PanelControl/RegistroQuickList/RegistroQuickList";

const initialMembers: TeamMember[] = [
  {
    id: 1,
    name: "María López",
    email: "maria@lapato.com",
    role: "OWNER",
    isOnline: true,
  },
  {
    id: 2,
    name: "Lucas Gómez",
    email: "lucas@lapato.com",
    role: "EMPLOYEE",
    isOnline: true,
  },
  {
    id: 3,
    name: "Sofía Díaz",
    email: "sofia@lapato.com",
    role: "EMPLOYEE",
    isOnline: false,
  },
];

const PanelAdministracion = () => {
  const [isEquipoModalOpen, setIsEquipoModalOpen] = useState(false);

  const [members, setMembers] = useState<TeamMember[]>(initialMembers);

  const handleAddMember = (member: Omit<TeamMember, "id">) => {
    setMembers((currentMembers) => [
      ...currentMembers,
      {
        ...member,
        id: Date.now(),
      },
    ]);
  };

  const handleUpdateMember = (updatedMember: TeamMember) => {
    setMembers((currentMembers) =>
      currentMembers.map((member) =>
        member.id === updatedMember.id ? updatedMember : member,
      ),
    );
  };

  const handleDeleteMember = (id: number) => {
    setMembers((currentMembers) =>
      currentMembers.filter((member) => member.id !== id),
    );
  };

  return (
    <>
      <main className="panel-administracion">
        <div className="panel-administracion__container">
          <header className="panel-administracion__header">
            <div>
              <h1>Administración</h1>

              <p>Resumen general y gestión de tu negocio.</p>
            </div>

            <span className="panel-administracion__updated">
              Actualizado hace un momento
            </span>
          </header>

          <section className="admin-summary">
            <div className="admin-summary__title">
              <div>
                <h2>Resumen del día</h2>
                <p>Estado general de tu kiosco durante hoy</p>
              </div>

              <span>Jueves, 27 de agosto</span>
            </div>

            <div className="admin-summary__metrics">
              <AdminMetricCard
                title="Ingresos del día"
                value="$ 67.650"
                detail="+12% vs. ayer"
                icon={ingresosIcon}
                iconAlt="Ingresos"
              />

              <AdminMetricCard
                title="Ganancia estimada"
                value="$ 24.480"
                detail="+8% vs. ayer"
                icon={gananciaIcon}
                iconAlt="Ganancia estimada"
              />

              <AdminMetricCard
                title="Ventas realizadas"
                value="18"
                detail="+3 ventas vs. ayer"
                icon={ventasIcon}
                iconAlt="Ventas realizadas"
              />
            </div>
          </section>

          <section className="admin-dashboard-grid">
            <VentasBarChart />

            <MiEquipo
              members={members}
              onOpenModal={() => setIsEquipoModalOpen(true)}
            />
          </section>

          <section className="admin-last-sales">
            <div className="admin-section-heading">
              <div>
                <h2>Últimos registros de ventas</h2>
                <p>Actividad reciente registrada en el kiosco</p>
              </div>
            </div>

            <RegistroQuickList />
          </section>
        </div>
      </main>

      <EquipoModal
        members={members}
        isOpen={isEquipoModalOpen}
        onClose={() => setIsEquipoModalOpen(false)}
        onAdd={handleAddMember}
        onUpdate={handleUpdateMember}
        onDelete={handleDeleteMember}
      />
    </>
  );
};

export default PanelAdministracion;
