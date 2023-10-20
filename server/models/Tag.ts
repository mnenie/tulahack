import seq from '../db/postgres';
import { DataTypes, Model, Optional } from 'sequelize';

interface TagAttributes{
    id : number;
    name : string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date
}

class Tag extends Model<TagAttributes, Optional<TagAttributes,'id'>> implements TagAttributes{
    public id! : number;
    public name! : string;
    
    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date;
}

Tag.init({
    id : {
        type : DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name : {
        type : DataTypes.STRING,
        unique : true,
    },
},{
    timestamps: true,
    sequelize:seq,
    paranoid: true,

})

export default Event;