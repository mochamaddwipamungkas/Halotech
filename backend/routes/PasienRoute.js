import express from "express";
import {
    getPasiens,
    getPasienById,
    createPasien,
    updatePasien,
    deletePasien
} from "../controllers/PasienController.js";

const router = express.Router();

router.get('/pasiens', getPasiens);
router.get('/pasiens/:id', getPasienById);
router.post('/pasiens', createPasien);
router.patch('/pasiens/:id', updatePasien);
router.delete('/pasiens/:id', deletePasien);

export default router;