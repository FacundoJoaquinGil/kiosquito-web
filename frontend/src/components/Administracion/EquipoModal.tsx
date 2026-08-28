import { FormEvent, useEffect, useState } from "react";

import type {
  TeamMember,
  TeamMemberRole,
} from "./MiEquipo";

import agregarUsuario from "../../assets/images/agregar-usuario.svg";
import editarUsuario from "../../assets/images/editar-usuario.svg";
import eliminarUsuario from "../../assets/images/eliminar-usuario.svg";
import cerrar from "../../assets/images/cerrar.svg";

type EquipoModalProps = {
  members: TeamMember[];
  isOpen: boolean;
  onClose: () => void;
  onAdd: (member: Omit<TeamMember, "id">) => void;
  onUpdate: (member: TeamMember) => void;
  onDelete: (id: number) => void;
};

type FormState = {
  name: string;
  email: string;
  role: TeamMemberRole;
};

const initialForm: FormState = {
  name: "",
  email: "",
  role: "EMPLOYEE",
};

const EquipoModal = ({
  members,
  isOpen,
  onClose,
  onAdd,
  onUpdate,
  onDelete,
}: EquipoModalProps) => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim()) return;

    if (editingId !== null) {
      const currentMember = members.find(
        (member) => member.id === editingId,
      );

      if (!currentMember) return;

      onUpdate({
        ...currentMember,
        name: form.name,
        email: form.email,
        role: form.role,
      });
    } else {
      onAdd({
        name: form.name,
        email: form.email,
        role: form.role,
        isOnline: false,
      });
    }

    resetForm();
  };

  const handleEdit = (member: TeamMember) => {
    setEditingId(member.id);

    setForm({
      name: member.name,
      email: member.email,
      role: member.role,
    });
  };

  const handleOverlayClick = () => {
    resetForm();
    onClose();
  };

  return (
    <div
      className="admin-modal-overlay"
      onMouseDown={handleOverlayClick}
    >
      <div
        className="admin-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="equipo-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="admin-modal__header">
          <div>
            <h2 id="equipo-modal-title">Gestionar equipo</h2>

            <p>
              Administrá las personas que pueden acceder al kiosco.
            </p>
          </div>

          <button
            type="button"
            className="admin-modal__close"
            onClick={() => {
              resetForm();
              onClose();
            }}
          >
            <img src={cerrar} alt="Cerrar" />
          </button>
        </div>

        <form
          className="admin-modal__form"
          onSubmit={handleSubmit}
        >
          <div className="admin-modal__form-title">
            <img src={agregarUsuario} alt="" />

            <span>
              {editingId !== null
                ? "Editar usuario"
                : "Agregar usuario"}
            </span>
          </div>

          <div className="admin-modal__fields">
            <label>
              Nombre
              <input
                type="text"
                placeholder="Nombre completo"
                value={form.name}
                onChange={(event) =>
                  setForm({
                    ...form,
                    name: event.target.value,
                  })
                }
              />
            </label>

            <label>
              Email
              <input
                type="email"
                placeholder="usuario@email.com"
                value={form.email}
                onChange={(event) =>
                  setForm({
                    ...form,
                    email: event.target.value,
                  })
                }
              />
            </label>

            <label>
              Rol
              <select
                value={form.role}
                onChange={(event) =>
                  setForm({
                    ...form,
                    role: event.target.value as TeamMemberRole,
                  })
                }
              >
                <option value="EMPLOYEE">Empleado</option>
                <option value="OWNER">Administrador</option>
              </select>
            </label>
          </div>

          <div className="admin-modal__form-actions">
            {editingId !== null && (
              <button
                type="button"
                className="admin-button admin-button--secondary"
                onClick={resetForm}
              >
                Cancelar
              </button>
            )}

            <button
              type="submit"
              className="admin-button admin-button--primary"
            >
              {editingId !== null
                ? "Guardar cambios"
                : "Agregar usuario"}
            </button>
          </div>
        </form>

        <div className="admin-modal__users">
          <div className="admin-modal__users-header">
            <h3>Usuarios</h3>

            <span>{members.length} miembros</span>
          </div>

          {members.map((member) => (
            <div
              className="admin-modal__user"
              key={member.id}
            >
              <div className="admin-modal__avatar">
                {member.name
                  .split(" ")
                  .map((word) => word.charAt(0))
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>

              <div className="admin-modal__user-info">
                <strong>{member.name}</strong>
                <span>{member.email}</span>
              </div>

              <span className="admin-modal__role">
                {member.role === "OWNER"
                  ? "Administrador"
                  : "Empleado"}
              </span>

              <span
                className={`admin-modal__state ${
                  member.isOnline
                    ? "admin-modal__state--online"
                    : ""
                }`}
              >
                <span />

                {member.isOnline ? "Activo" : "Inactivo"}
              </span>

              <div className="admin-modal__user-actions">
                <button
                  type="button"
                  title="Editar usuario"
                  onClick={() => handleEdit(member)}
                >
                  <img src={editarUsuario} alt="Editar" />
                </button>

                <button
                  type="button"
                  className="admin-modal__delete"
                  title="Eliminar usuario"
                  onClick={() => onDelete(member.id)}
                >
                  <img
                    src={eliminarUsuario}
                    alt="Eliminar"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipoModal;