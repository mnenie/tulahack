import type {IEvent} from './event.interface'
import type { IUser } from './user.interface'
export interface IInfo {
  event: IEvent,
  organizer: IUser
}