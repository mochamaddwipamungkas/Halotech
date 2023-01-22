import { Op } from "sequelize";
import Baby from "../models/BabyModel.js";

export const getBabys = async (req, res) => {
    const { tanggal_awal, tanggal_akhir, status, gender } = req.query;

    try {
        if (tanggal_awal && tanggal_akhir || status || gender) {
            if (tanggal_awal && tanggal_akhir) {
                if (status) {
                    if (gender) {
                        const response = await Baby.findAll({
                            where: {
                                [Op.and]: [
                                    {
                                        tanggal_lahir: {
                                            [Op.between]: [tanggal_awal, tanggal_akhir]
                                        }
                                    },
                                    { status: status },
                                    { gender: gender }
                                ]
                            },
                            order: [
                                ['id_baby', 'ASC']
                            ]
                        });
                        res.status(200).json(response);
                    }
                    const response = await Baby.findAll({
                        where: {
                            [Op.and]: [
                                {
                                    tanggal_lahir: {
                                        [Op.between]: [tanggal_awal, tanggal_akhir]
                                    }
                                },
                                { status: status }
                            ]


                        },

                        order: [
                            ['id_baby', 'ASC']
                        ]

                    });
                    res.status(200).json(response);
                }
                if (gender) {
                    if (status) {
                        if (gender) {
                            const response = await Baby.findAll({
                                where: {
                                    [Op.and]: [
                                        {
                                            tanggal_lahir: {
                                                [Op.between]: [tanggal_awal, tanggal_akhir]
                                            }
                                        },
                                        { gender: gender },
                                        { status: status },
                                    ]
                                },
                                order: [
                                    ['id_baby', 'ASC']
                                ]
                            });
                            res.status(200).json(response);
                        }
                    }
                    const response = await Baby.findAll({
                        where: {
                            [Op.and]: [
                                {
                                    tanggal_lahir: {
                                        [Op.between]: [tanggal_awal, tanggal_akhir]
                                    }
                                },

                                { gender: gender }
                            ]
                        },
                        order: [
                            ['id_baby', 'ASC']
                        ]
                    });
                    res.status(200).json(response);
                }
                const response = await Baby.findAll({
                    where: {
                        tanggal_lahir: {
                            [Op.between]: [tanggal_awal, tanggal_akhir]
                        }

                    },

                    order: [
                        ['id_baby', 'ASC']
                    ]

                });
                res.status(200).json(response);


            }
            if (status) {
                if (gender) {
                    const response = await Baby.findAll({
                        where: {
                            [Op.and]: [
                                { gender: gender },
                                { status: status },
                            ]
                        },
                        order: [
                            ['id_baby', 'ASC']
                        ]
                    });
                    res.status(200).json(response);
                }
                const response = await Baby.findAll({
                    where: { status: status },

                    order: [
                        ['id_baby', 'ASC']
                    ]

                });
                res.status(200).json(response);
            }
            if (gender) {
                const response = await Baby.findAll({
                    where: { gender: gender },

                    order: [
                        ['id_baby', 'ASC']
                    ]

                });
                res.status(200).json(response);
            }

        } else {
            const response = await Baby.findAll({ order: [['id_baby', 'ASC']] });
            res.status(200).json(response);
        }


    } catch (error) {
        console.log(error.message);
    }
}

export const getBabyById = async (req, res) => {
    try {
        const response = await Baby.findOne({
            where: {
                id_baby: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBaby = async (req, res) => {

    try {
        await Baby.create(req.body);
        res.status(201).json({ msg: "Baby Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBaby = async (req, res) => {
    try {
        await Baby.update(req.body, {
            where: {
                id_baby: req.params.id
            }
        });
        res.status(200).json({ msg: "Baby Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBaby = async (req, res) => {
    try {
        await Baby.destroy({
            where: {
                id_baby: req.params.id
            }
        });
        res.status(200).json({ msg: "Baby Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}