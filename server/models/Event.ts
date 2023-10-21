import seq from '../db/postgres';
import { DataTypes, Model, Optional } from 'sequelize';

interface EventAttributes{
    id : number;
    name : string;
    description : string;
    startDate : Date;
    endDate: Date;
    location : string;
    tags? : string[];
    mainPic : string;
    isRegular? : boolean;
    price? : number;
    pics? : string[];

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface EventInput extends Optional<EventAttributes, 'id'> {}
export interface EventOutput extends Required<EventAttributes> {}

class Event extends Model<EventAttributes, EventInput> implements EventAttributes{
    public id! : number;
    public name! : string;
    public description! : string;
    public startDate! : Date;
    public endDate!: Date;
    public location! : string;
    public tags! : string[];
    public mainPic! : string;
    public isRegular! : boolean;
    public price! : number;
    public pics! : string[];

    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date;
}

Event.init({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : true,
        unique : true,
    },
    description : {
        allowNull: false,
        type: DataTypes.TEXT,
    },
    startDate : {
        allowNull: false,
        type: DataTypes.DATE,
    },
    endDate : {
        allowNull : false,
        type: DataTypes.DATE,
    },
    location : {
        allowNull : false,
        type : DataTypes.STRING,
    },
    tags : {
        type : DataTypes.ARRAY(DataTypes.STRING),
    },
    mainPic : {
        allowNull : false,
        type : DataTypes.STRING,
        unique : true,
    },
    pics : {
        type : DataTypes.ARRAY(DataTypes.STRING),
    },
    price : {
        type : DataTypes.INTEGER
    },
    isRegular : {
        type : DataTypes.BOOLEAN
    }
},{
    timestamps: true,
    sequelize:seq,
    paranoid: true,

})

export default Event;