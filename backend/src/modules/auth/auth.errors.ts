export class InvalidCredentialsError extends Error {
  constructor() {
    super("Credenciales inválidas");
    this.name = "InvalidCredentialsError";
  }
}

export class InactiveUserError extends Error {
  constructor() {
    super("La cuenta está desactivada");
    this.name = "InactiveUserError";
  }
}