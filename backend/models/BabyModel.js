import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Baby = db.define('baby', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    pasien_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    panjang: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    berat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tanggal_lahir: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jam_lahir: {
        type: DataTypes.STRING,
        allowNull: false
    }


});
export default Baby;
(async () => {
    await db.sync();
})();
