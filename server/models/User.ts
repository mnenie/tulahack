import seq from '../db/postgres';
import { DataTypes, Model, Optional } from 'sequelize';

interface UserAttributes{
    id : number;
    email : string;
    firstName : string;
    lastName : string;
    avatar?: string;
    organization? : string;
    password : string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

class User extends Model<UserAttributes, Optional<UserAttributes,'id'>> implements UserAttributes{
    public id! : number;
    public email! : string;
    public firstName! : string;
    public lastName! : string;
    public avatar! : string;
    public organization! : string;
    public password! : string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOutput extends Required<UserAttributes> {}

User.init({
    id : {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email : {
        type : DataTypes.STRING,
        unique : true,
    },
    firstName : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    avatar : {
        type: DataTypes.STRING,
        defaultValue: "stdavatar.jpg"
    },
    organization : {
        type : DataTypes.STRING,
    },
    password : {
        type : DataTypes.STRING
    }
},{
    timestamps: true,
    sequelize:seq,
    paranoid: true,

})

export default User;