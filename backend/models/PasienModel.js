import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Baby from "./BabyModel.js";

const { DataTypes } = Sequelize;

const Pasien = db.define('pasien', {
    id_pasien: {
        type: DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usia: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telpon_darurat: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    usia_kehamilan: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    proses_partus: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jumlah_bayi: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }

});

Pasien.hasMany(Baby, { foreignKey: 'id_pasien' });
Baby.belongsTo(Pasien, { foreignKey: 'id_pasien' });

export default Pasien;

(async () => {
    await db.sync();
})();
