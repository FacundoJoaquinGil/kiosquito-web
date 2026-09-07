export class UserNotFoundError extends Error {
  constructor() {
    super("Usuario no encontrado");
    this.name = "UserNotFoundError";
  }
}

export class EmailAlreadyInUseError extends Error {
  constructor() {
    super("El email ya está siendo utilizado");
    this.name = "EmailAlreadyInUseError";
  }
}

export class InvalidRoleAssignmentError extends Error {
  constructor() {
    super("No tenés permisos para asignar este rol");
    this.name = "InvalidRoleAssignmentError";
  }
}

export class CannotManageUserError extends Error {
  constructor() {
    super("No tenés permisos para administrar este usuario");
    this.name = "CannotManageUserError";
  }
}