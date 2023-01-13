import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddBaby() {
    const [id_pasien, setIdPasien] = useState();
    const [id_baby, setIdBaby] = useState();
    const [gender, setGender] = useState("Laki-laki");
    const [panjang, setPanjang] = useState();
    const [berat, setBerat] = useState();
    const [status, setStatus] = useState("Sehat");
    const [tanggal_lahir, setTanggalLahir] = useState("");
    const [jam_lahir, setJamLahir] = useState("");
    const navigate = useNavigate();

    const saveBaby = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/babys", {
                id_baby, id_pasien, gender, panjang, berat, status, tanggal_lahir, jam_lahir,
            });
            navigate("/baby");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="container " style={{ width: "600px", padding: "60px 0" }}>
            <h1 className="mt-5 mb-5">Form Baby</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Id Pasien</label>
                    <input
                        type="text"
                        className="form-control"
                        value={id_pasien}
                        onChange={(e) => setIdPasien(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Id Bayi</label>
                    <input
                        type="text"
                        className="form-control"
                        value={id_baby}
                        onChange={(e) => setIdBaby(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Jenis Kelamin</label>
                    <div className="input-group mb-3">
                        <select class="form-select"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Panjang (Cm)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={panjang}
                        onChange={(e) => setPanjang(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Berat (Kg)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={berat}
                        onChange={(e) => setBerat(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <div className="input-group mb-3">
                        <select class="form-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}>
                            <option value="Sehat">Sehat</option>
                            <option value="Cacat">Cacat</option>
                            <option value="Meninggal">Meninggal</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col mb-3">
                        <label className="form-label">Tanggal Lahir </label>
                        <span style={{ fontSize: "12px", color: "red" }}> *dd-mm-yyyy</span>
                        <input
                            type="text"
                            className="form-control"
                            value={tanggal_lahir}
                            onChange={(e) => setTanggalLahir(e.target.value)}
                        />
                    </div>
                    <div className="col mb-3">
                        <label className="form-label">Jam <span style={{ fontSize: "12px", color: "red" }}>* hh.mm</span></label>
                        <input
                            type="text"
                            className="form-control"
                            value={jam_lahir}
                            onChange={(e) => setJamLahir(e.target.value)}
                        />
                    </div>
                </div>

                <button type="button" className="btn btn-primary mt-5" onClick={saveBaby}>Kirim</button>
            </form>
        </div>

    )
}