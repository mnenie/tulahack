import seq from '../db/postgres';
import { DataTypes, Model, Optional } from 'sequelize';

interface TagAttributes{
    id : number;
    name : string;

    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date
}

export interface TagInput extends Optional<TagAttributes, 'id'> {}
export interface TagOutput extends Required<TagAttributes> {}

class Tag extends Model<TagAttributes, TagInput> implements TagAttributes{
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
        allowNull: false,
    },
},{
    timestamps: true,
    sequelize:seq,
    paranoid: true,

})

export default Tag;