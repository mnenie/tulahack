import type { IUser } from "./user.interface";

export interface IRegistrResponse{
  user: IUser
  token: string
}