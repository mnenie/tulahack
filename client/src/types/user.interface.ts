export interface IUser{
  id? : number;
  email : string;
  firstName? : string;
  lastName? : string;
  avatar?: string;
  organization? : string;
  password : string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}