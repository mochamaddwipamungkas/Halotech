import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pasien = db.define('pasien', {
    id_pasien: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usia: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telpon_darurat: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usia_kehamilan: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    proses_partus: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    jumlah_bayi: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

});
export default Pasien;

(async () => {
    await db.sync();
})();