import express from "express";
import {
    getBabys,
    getBabyById,
    createBaby,
    updateBaby,
    deleteBaby
} from "../controllers/BabyController.js";

const router = express.Router();

router.get('/babys', getBabys);
router.get('/babys/:id', getBabyById);
router.post('/babys', createBaby);
router.patch('/babys/:id', updateBaby);
router.delete('/babys/:id', deleteBaby);

export default router;