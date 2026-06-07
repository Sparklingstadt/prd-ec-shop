import { User } from "../entities/User";

export interface IUserRepository {
  findMany(): Promise<User[]>,
  findByUserId(userId:number): Promise<User | null>,
}