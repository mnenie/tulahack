interface IEvent{
  id : number;
  name : string;
  description : string;
  startDate : Date;
  endDate: Date;
  location : string;
  organizerId : number;
  tags? : string[];
  participants : number[];
  mainPic : string;
  isRegular? : boolean;
  price? : number;
  pics? : string[];

  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}