import { LoginRequest, RegisterRequest } from '../conduit-api.model';

type LoginPayload = LoginRequest;
type RegisterPayload = RegisterRequest;

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: LoginPayload) {}
}
export class Register {
  static readonly type = '[Auth] Register';
  constructor(public payload: RegisterPayload) {}
}
