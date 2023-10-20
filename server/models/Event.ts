import seq from '../db/postgres';
import { DataTypes, Model, Optional } from 'sequelize';

interface EventAttributes{
    id : number;
    name : string;
    description : string;
    startDate : Date;
    endDate: Date;
    location : string;
    tags : string[];
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class Event extends Model<EventAttributes, Optional<EventAttributes,'id'>> implements EventAttributes{
    public id! : number;
    public name! : string;
    public description! : string;
    public startDate! : Date;
    public endDate!: Date;
    public location! : string;
    public tags! : string[];

    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date;
}

Event.init({
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name : {
        type : DataTypes.STRING,
        unique : true,
    },
    description : {
        type: DataTypes.TEXT,
    },
    startDate : {
        type: DataTypes.DATE,
    },
    endDate : {
        type: DataTypes.DATE,
    },
    location : {
        type : DataTypes.STRING,
    },
    tags : {
        type : DataTypes.ARRAY
    }
},{
    timestamps: true,
    sequelize:seq,
    paranoid: true,

})

export default Event;