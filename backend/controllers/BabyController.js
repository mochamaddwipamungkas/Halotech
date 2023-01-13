import Baby from "../models/BabyModel.js";

export const getBabys = async (req, res) => {
    try {
        const response = await Baby.findAll();
        res.status(200).json(response);
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