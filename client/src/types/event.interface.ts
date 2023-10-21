export interface IEvent{
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date?: string;
  location: string;
  tags: string[];
  mainPic: string;
  price: number;
  isRegular: boolean;
}