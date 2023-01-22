import { Op } from "sequelize";
import Baby from "../models/BabyModel.js";
import Pasien from "../models/PasienModel.js";

export const getAllData = async (req, res) => {
    const { tanggal_awal, tanggal_akhir, status, gender, partus, sortby } = req.query;

    try {

        if (tanggal_awal && tanggal_akhir || status || gender || partus || sortby) {
            if (tanggal_awal && tanggal_akhir) {
                if (status) {
                    if (gender) {
                        if (partus) {
                            if (sortby) {
                                const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                                if (sortInPasien.includes(sortby)) {
                                    const response = await Baby.findAll({
                                        where: {
                                            [Op.and]: [
                                                {
                                                    tanggal_lahir: {
                                                        [Op.between]: [tanggal_awal, tanggal_akhir]
                                                    }
                                                },
                                                { status: status },
                                                { gender: gender },
                                            ]
                                        },
                                        include: {
                                            model: Pasien,
                                            where: { proses_partus: partus },

                                        },
                                        order: [
                                            [{ model: Pasien }, `${sortby}`, 'ASC']
                                        ]

                                    });
                                    res.status(200).json(response);
                                } else {
                                    const response = await Baby.findAll({
                                        where: {
                                            [Op.and]: [
                                                {
                                                    tanggal_lahir: {
                                                        [Op.between]: [tanggal_awal, tanggal_akhir]
                                                    }
                                                },
                                                { status: status },
                                                { gender: gender },
                                            ]
                                        },
                                        include: {
                                            model: Pasien,
                                            where: { proses_partus: partus }
                                        },
                                        order: [
                                            [`${sortby}`, 'ASC']
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
                                        { status: status },
                                        { gender: gender },
                                    ]
                                },
                                include: {
                                    model: Pasien,
                                    where: { proses_partus: partus }
                                },

                            });
                            res.status(200).json(response);
                        }
                        if (sortby) {
                            const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                            if (sortInPasien.includes(sortby)) {
                                const response = await Baby.findAll({
                                    where: {
                                        [Op.and]: [
                                            {
                                                tanggal_lahir: {
                                                    [Op.between]: [tanggal_awal, tanggal_akhir]
                                                }
                                            },
                                            { status: status },
                                            { gender: gender },
                                        ]
                                    },
                                    include: {
                                        model: Pasien

                                    },
                                    order: [
                                        [{ model: Pasien }, `${sortby}`, 'ASC']
                                    ]

                                });
                                res.status(200).json(response);
                            } else {
                                const response = await Baby.findAll({
                                    where: {
                                        [Op.and]: [
                                            {
                                                tanggal_lahir: {
                                                    [Op.between]: [tanggal_awal, tanggal_akhir]
                                                }
                                            },
                                            { status: status },
                                            { gender: gender },
                                        ]
                                    },
                                    include: {
                                        model: Pasien
                                    },
                                    order: [
                                        [`${sortby}`, 'ASC']
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
                                    { status: status },
                                    { gender: gender }
                                ]
                            },
                            include: Pasien,

                        });
                        res.status(200).json(response);
                    }
                    if (partus) {
                        if (sortby) {
                            const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                            if (sortInPasien.includes(sortby)) {
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
                                    include: {
                                        model: Pasien,
                                        where: { proses_partus: partus },

                                    },
                                    order: [
                                        [{ model: Pasien }, `${sortby}`, 'ASC']
                                    ]

                                });
                                res.status(200).json(response);
                            } else {
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
                                    include: {
                                        model: Pasien,
                                        where: { proses_partus: partus }
                                    },
                                    order: [
                                        [`${sortby}`, 'ASC']
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
                                    { status: status }
                                ]
                            },
                            include: {
                                model: Pasien,
                                where: { proses_partus: partus }
                            },

                        });
                        res.status(200).json(response);
                    }
                    if (sortby) {
                        const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                        if (sortInPasien.includes(sortby)) {
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
                                include: {
                                    model: Pasien

                                },
                                order: [
                                    [{ model: Pasien }, `${sortby}`, 'ASC']
                                ]

                            });
                            res.status(200).json(response);
                        } else {
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
                                include: {
                                    model: Pasien
                                },
                                order: [
                                    [`${sortby}`, 'ASC']
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
                                { status: status }
                            ]
                        },
                        include: Pasien,


                    });
                    res.status(200).json(response);
                }
                if (gender) {
                    if (partus) {
                        if (sortby) {
                            const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                            if (sortInPasien.includes(sortby)) {
                                const response = await Baby.findAll({
                                    where: {
                                        [Op.and]: [
                                            {
                                                tanggal_lahir: {
                                                    [Op.between]: [tanggal_awal, tanggal_akhir]
                                                }
                                            },
                                            { gender: gender },
                                        ]
                                    },
                                    include: {
                                        model: Pasien,
                                        where: { proses_partus: partus },

                                    },
                                    order: [
                                        [{ model: Pasien }, `${sortby}`, 'ASC']
                                    ]

                                });
                                res.status(200).json(response);
                            } else {
                                const response = await Baby.findAll({
                                    where: {
                                        [Op.and]: [
                                            {
                                                tanggal_lahir: {
                                                    [Op.between]: [tanggal_awal, tanggal_akhir]
                                                }
                                            },
                                            { gender: gender },
                                        ]
                                    },
                                    include: {
                                        model: Pasien,
                                        where: { proses_partus: partus }
                                    },
                                    order: [
                                        [`${sortby}`, 'ASC']
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
                                    { gender: gender },
                                ]
                            },
                            include: {
                                model: Pasien,
                                where: { proses_partus: partus }
                            },

                        });
                        res.status(200).json(response);
                    }
                    if (sortby) {
                        const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                        if (sortInPasien.includes(sortby)) {
                            const response = await Baby.findAll({
                                where: {
                                    [Op.and]: [
                                        {
                                            tanggal_lahir: {
                                                [Op.between]: [tanggal_awal, tanggal_akhir]
                                            }
                                        },
                                        { gender: gender },
                                    ]
                                },
                                include: {
                                    model: Pasien

                                },
                                order: [
                                    [{ model: Pasien }, `${sortby}`, 'ASC']
                                ]

                            });
                            res.status(200).json(response);
                        } else {
                            const response = await Baby.findAll({
                                where: {
                                    [Op.and]: [
                                        {
                                            tanggal_lahir: {
                                                [Op.between]: [tanggal_awal, tanggal_akhir]
                                            }
                                        },
                                        { gender: gender },
                                    ]
                                },
                                include: {
                                    model: Pasien
                                },
                                order: [
                                    [`${sortby}`, 'ASC']
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
                        include: Pasien,

                    });
                    res.status(200).json(response);
                }
                if (partus) {
                    if (sortby) {
                        const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                        if (sortInPasien.includes(sortby)) {
                            const response = await Baby.findAll({
                                where: {
                                    tanggal_lahir: {
                                        [Op.between]: [tanggal_awal, tanggal_akhir]
                                    }
                                },
                                include: {
                                    model: Pasien,
                                    where: { proses_partus: partus },

                                },
                                order: [
                                    [{ model: Pasien }, `${sortby}`, 'ASC']
                                ]

                            });
                            res.status(200).json(response);
                        } else {
                            const response = await Baby.findAll({
                                where: {
                                    tanggal_lahir: {
                                        [Op.between]: [tanggal_awal, tanggal_akhir]
                                    }
                                },
                                include: {
                                    model: Pasien,
                                    where: { proses_partus: partus }
                                },
                                order: [
                                    [`${sortby}`, 'ASC']
                                ]
                            });
                            res.status(200).json(response);
                        }
                    }
                    const response = await Baby.findAll({
                        where: {
                            tanggal_lahir: {
                                [Op.between]: [tanggal_awal, tanggal_akhir]
                            }

                        },
                        include: {
                            model: Pasien,
                            where: { proses_partus: partus }
                        },


                    });
                    res.status(200).json(response);
                }
                if (sortby) {
                    const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                    if (sortInPasien.includes(sortby)) {
                        const response = await Baby.findAll({
                            where: {
                                tanggal_lahir: {
                                    [Op.between]: [tanggal_awal, tanggal_akhir]
                                }
                            },
                            include: {
                                model: Pasien

                            },
                            order: [
                                [{ model: Pasien }, `${sortby}`, 'ASC']
                            ]

                        });
                        res.status(200).json(response);
                    } else {
                        const response = await Baby.findAll({
                            where: {
                                tanggal_lahir: {
                                    [Op.between]: [tanggal_awal, tanggal_akhir]
                                }
                            },
                            include: {
                                model: Pasien
                            },
                            order: [
                                [`${sortby}`, 'ASC']
                            ]
                        });
                        res.status(200).json(response);
                    }
                }
                const response = await Baby.findAll({
                    where: {
                        tanggal_lahir: {
                            [Op.between]: [tanggal_awal, tanggal_akhir]
                        }

                    },
                    include: Pasien,


                });
                res.status(200).json(response);

            }
            if (status) {
                if (gender) {
                    if (partus) {
                        if (sortby) {
                            const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                            if (sortInPasien.includes(sortby)) {
                                const response = await Baby.findAll({
                                    where: {
                                        [Op.and]: [

                                            { status: status },
                                            { gender: gender },
                                        ]
                                    },
                                    include: {
                                        model: Pasien,
                                        where: { proses_partus: partus },

                                    },
                                    order: [
                                        [{ model: Pasien }, `${sortby}`, 'ASC']
                                    ]

                                });
                                res.status(200).json(response);
                            } else {
                                const response = await Baby.findAll({
                                    where: {
                                        [Op.and]: [

                                            { status: status },
                                            { gender: gender },
                                        ]
                                    },
                                    include: {
                                        model: Pasien,
                                        where: { proses_partus: partus }
                                    },
                                    order: [
                                        [`${sortby}`, 'ASC']
                                    ]
                                });
                                res.status(200).json(response);
                            }

                        }
                        const response = await Baby.findAll({
                            where: {
                                [Op.and]: [
                                    { gender: gender },
                                    { status: status },
                                ]
                            },
                            include: {
                                model: Pasien,
                                where: {
                                    proses_partus: partus
                                }
                            },

                        });
                        res.status(200).json(response);
                    }
                    if (sortby) {
                        const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                        if (sortInPasien.includes(sortby)) {
                            const response = await Baby.findAll({
                                where: {
                                    [Op.and]: [

                                        { status: status },
                                        { gender: gender },
                                    ]
                                },
                                include: {
                                    model: Pasien

                                },
                                order: [
                                    [{ model: Pasien }, `${sortby}`, 'ASC']
                                ]

                            });
                            res.status(200).json(response);
                        } else {
                            const response = await Baby.findAll({
                                where: {
                                    [Op.and]: [

                                        { status: status },
                                        { gender: gender },
                                    ]
                                },
                                include: {
                                    model: Pasien
                                },
                                order: [
                                    [`${sortby}`, 'ASC']
                                ]
                            });
                            res.status(200).json(response);
                        }

                    }
                    const response = await Baby.findAll({
                        where: {
                            [Op.and]: [
                                { gender: gender },
                                { status: status },
                            ]
                        },
                        include: Pasien,

                    });
                    res.status(200).json(response);
                }
                if (partus) {
                    if (sortby) {
                        const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                        if (sortInPasien.includes(sortby)) {
                            const response = await Baby.findAll({
                                where: {
                                    [Op.and]: [

                                        { status: status }
                                    ]
                                },
                                include: {
                                    model: Pasien,
                                    where: { proses_partus: partus },

                                },
                                order: [
                                    [{ model: Pasien }, `${sortby}`, 'ASC']
                                ]

                            });
                            res.status(200).json(response);
                        } else {
                            const response = await Baby.findAll({
                                where: {
                                    [Op.and]: [

                                        { status: status }
                                    ]
                                },
                                include: {
                                    model: Pasien,
                                    where: { proses_partus: partus }
                                },
                                order: [
                                    [`${sortby}`, 'ASC']
                                ]
                            });
                            res.status(200).json(response);
                        }

                    }
                    const response = await Baby.findAll({
                        where: {
                            [Op.and]: [
                                { status: status },
                            ]
                        },
                        include: {
                            model: Pasien,
                            where: {
                                proses_partus: partus
                            }
                        },

                    });
                    res.status(200).json(response);
                }
                if (sortby) {
                    const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                    if (sortInPasien.includes(sortby)) {
                        const response = await Baby.findAll({
                            where: {
                                [Op.and]: [

                                    { status: status }
                                ]
                            },
                            include: {
                                model: Pasien

                            },
                            order: [
                                [{ model: Pasien }, `${sortby}`, 'ASC']
                            ]

                        });
                        res.status(200).json(response);
                    } else {
                        const response = await Baby.findAll({
                            where: {
                                [Op.and]: [

                                    { status: status }
                                ]
                            },
                            include: {
                                model: Pasien
                            },
                            order: [
                                [`${sortby}`, 'ASC']
                            ]
                        });
                        res.status(200).json(response);
                    }

                }
                const response = await Baby.findAll({
                    where: { status: status },
                    include: Pasien,


                });
                res.status(200).json(response);
            }
            if (gender) {
                if (partus) {
                    if (sortby) {
                        const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                        if (sortInPasien.includes(sortby)) {
                            const response = await Baby.findAll({
                                where: { gender: gender },
                                include: {
                                    model: Pasien,
                                    where: { proses_partus: partus },

                                },
                                order: [
                                    [{ model: Pasien }, `${sortby}`, 'ASC']
                                ]

                            });
                            res.status(200).json(response);
                        } else {
                            const response = await Baby.findAll({
                                where: { gender: gender },
                                include: {
                                    model: Pasien,
                                    where: { proses_partus: partus }
                                },
                                order: [
                                    [`${sortby}`, 'ASC']
                                ]
                            });
                            res.status(200).json(response);
                        }

                    }
                    const response = await Baby.findAll({
                        where: { gender: gender },
                        include: {
                            model: Pasien,
                            where: {
                                proses_partus: partus
                            }
                        },

                    });
                    res.status(200).json(response);
                }
                if (sortby) {
                    const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                    if (sortInPasien.includes(sortby)) {
                        const response = await Baby.findAll({
                            where: { gender: gender },
                            include: {
                                model: Pasien

                            },
                            order: [
                                [{ model: Pasien }, `${sortby}`, 'ASC']
                            ]

                        });
                        res.status(200).json(response);
                    } else {
                        const response = await Baby.findAll({
                            where: { gender: gender },
                            include: {
                                model: Pasien
                            },
                            order: [
                                [`${sortby}`, 'ASC']
                            ]
                        });
                        res.status(200).json(response);
                    }

                }
                const response = await Baby.findAll({
                    where: { gender: gender },
                    include: Pasien,


                });
                res.status(200).json(response);
            }
            if (partus) {
                if (sortby) {
                    const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                    if (sortInPasien.includes(sortby)) {
                        const response = await Baby.findAll({
                            include: {
                                model: Pasien,
                                where: { proses_partus: partus },

                            },
                            order: [
                                [{ model: Pasien }, `${sortby}`, 'ASC']
                            ]

                        });
                        res.status(200).json(response);
                    } else {
                        const response = await Baby.findAll({
                            include: {
                                model: Pasien,
                                where: { proses_partus: partus }
                            },
                            order: [
                                [`${sortby}`, 'ASC']
                            ]
                        });
                        res.status(200).json(response);
                    }

                }
                const response = await Baby.findAll({

                    include: {
                        model: Pasien,
                        where: {
                            proses_partus: partus
                        }
                    },

                });
                res.status(200).json(response);
            }
            if (sortby) {
                const sortInPasien = ["nama", "usia", "usia_kehamilan", "proses_partus", "alamat", "telpon_darurat", "jumlah_bayi"];
                if (sortInPasien.includes(sortby)) {
                    const response = await Baby.findAll({
                        include: Pasien,
                        order: [
                            [{ model: Pasien }, `${sortby}`, 'ASC']
                        ]

                    });
                    res.status(200).json(response);
                } else {
                    const response = await Baby.findAll({
                        include: Pasien,
                        order: [
                            [`${sortby}`, 'ASC']
                        ]
                    });
                    res.status(200).json(response);
                }

            }

        } else {
            const response = await Baby.findAll({
                include: Pasien
            });
            res.status(200).json(response);
        }

    } catch (error) {
        console.log(error.message);
    }
}

export const getAllDataById = async (req, res) => {
    try {
        const response = await Baby.findOne({
            where: {
                id_baby: req.params.id
            },
            include: Pasien
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPasiens = async (req, res) => {
    const { sortby, partus } = req.query;
    try {
        if (partus || sortby) {
            if (partus) {
                if (sortby) {
                    const response = await Pasien.findAll({
                        where: { proses_partus: partus },
                        order: [[`${sortby}`, 'ASC']]
                    });
                    res.status(200).json(response);
                }
                const response = await Pasien.findAll({
                    where: { proses_partus: partus }
                });
                res.status(200).json(response);
            }
            if (sortby) {
                const response = await Pasien.findAll({
                    order: [[`${sortby}`, 'ASC']]
                });
                res.status(200).json(response);
            }
        } else {
            const response = await Pasien.findAll();
            res.status(200).json(response);
        }

    } catch (error) {
        console.log(error.message);
    }
}

export const getPasienById = async (req, res) => {
    try {
        const response = await Pasien.findOne({
            where: {
                id_pasien: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPasien = async (req, res) => {

    try {
        await Pasien.create(req.body);
        res.status(201).json({ msg: "Pasien Created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePasien = async (req, res) => {
    try {
        await Pasien.update(req.body, {
            where: {
                id_pasien: req.params.id
            }
        });
        res.status(200).json({ msg: "Pasien Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePasien = async (req, res) => {
    try {
        await Pasien.destroy({
            where: {
                id_pasien: req.params.id
            }
        });
        res.status(200).json({ msg: "Pasien Deleted" });
    } catch (error) {
        console.log(error.message);
    }
}