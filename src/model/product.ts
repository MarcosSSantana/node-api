import { Model } from "sequelize";
import sequelize from "sequelize";
import db from "../database/models";

class Product extends Model {
    declare id: number;
    declare name: string;
    declare price: number;
    declare quantity: number;
}

Product.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize.FLOAT,
        allowNull: false
    },
    quantity: {
        type: sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName : 'products',
    timestamps: false
})

export default Product;