import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditBaby() {
    const [id_pasien, setIdPasien] = useState();
    const [id_baby, setIdBaby] = useState();
    const [gender, setGender] = useState("Laki-laki");
    const [panjang, setPanjang] = useState();
    const [berat, setBerat] = useState();
    const [status, setStatus] = useState("Sehat");
    const [tanggal_lahir, setTanggalLahir] = useState("");
    const [jam_lahir, setJamLahir] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getBabyById();
    }, []);




    const updateBaby = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/babys/${id}`, {
                id_baby, id_pasien, gender, panjang, berat, status, tanggal_lahir, jam_lahir,
            });
            navigate("/baby");
        } catch (error) {
            console.log(error);
        }
    };

    const getBabyById = async () => {
        const response = await axios.get(`http://localhost:5000/babys/${id}`);
        setIdPasien(response.data.id_pasien);
        setIdBaby(response.data.id_baby);
        setGender(response.data.gender);
        setPanjang(response.data.panjang);
        setBerat(response.data.berat);
        setStatus(response.data.status);
        setTanggalLahir(response.data.tanggal_lahir);
        setJamLahir(response.data.jam_lahir);


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
                    <label className="form-label">Panjang</label>
                    <input
                        type="text"
                        className="form-control"
                        value={panjang}
                        onChange={(e) => setPanjang(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Berat</label>
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
                <div className="mb-3">
                    <label className="form-label">Tanggal Lahir</label>
                    <input
                        type="text"
                        className="form-control"
                        value={tanggal_lahir}
                        onChange={(e) => setTanggalLahir(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Jam </label>
                    <input
                        type="text"
                        className="form-control"
                        value={jam_lahir}
                        onChange={(e) => setJamLahir(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary mt-5" onClick={updateBaby}>Save</button>
            </form>
        </div>

    )
}