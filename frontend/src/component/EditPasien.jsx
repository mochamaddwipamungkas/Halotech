import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditPasien() {
    const [id_pasien, setIdPasien] = useState()
    const [nama, setNama] = useState("")
    const [usia, setUsia] = useState()
    const [usia_kehamilan, setUsiaKehamilan] = useState()
    const [alamat, setAlamat] = useState("")
    const [telpon_darurat, setTelponDarurat] = useState()
    const [proses_partus, setPartus] = useState("Normal")
    const [jumlah_bayi, setJmlBayi] = useState()
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getPasienById();
    }, []);

    const updatePasien = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/pasiens/${id}`, {
                id_pasien, nama, usia, usia_kehamilan, alamat, telpon_darurat, proses_partus, jumlah_bayi,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getPasienById = async () => {
        const response = await axios.get(`http://localhost:5000/pasiens/${id}`);
        setNama(response.data.nama);
        setIdPasien(response.data.id_pasien);
        setUsia(response.data.usia);
        setUsiaKehamilan(response.data.usia_kehamilan);
        setAlamat(response.data.alamat);
        setTelponDarurat(response.data.telpon_darurat);
        setPartus(response.data.proses_partus);
        setJmlBayi(response.data.jumlah_bayi);

    };

    return (
        <div className="container" style={{ width: "600px", padding: "60px 0" }}>
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
                    <label className="form-label">Nama Pasien</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Usia</label>
                    <input
                        type="text"
                        className="form-control"
                        value={usia}
                        onChange={(e) => setUsia(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Alamat</label>
                    <input
                        type="text"
                        className="form-control"
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">No.Telpon Darurat</label>
                    <input
                        type="text"
                        className="form-control"
                        value={telpon_darurat}
                        onChange={(e) => setTelponDarurat(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Usia Kehamilan (Hari)</label>
                    <input
                        type="text"
                        className="form-control"
                        value={usia_kehamilan}
                        onChange={(e) => setUsiaKehamilan(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Proses Partus</label>
                    <div className="input-group mb-3">
                        <select class="form-select"
                            value={proses_partus}
                            onChange={(e) => setPartus(e.target.value)}>
                            <option value="Normal">Normal</option>
                            <option value="Dibantu alat">Dibantu alat</option>
                            <option value="Caesar">Caesar</option>
                            <option value="Waterbirth">Waterbirthr</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Jumlah Bayi</label>
                    <input
                        type="text"
                        className="form-control"
                        value={jumlah_bayi}
                        onChange={(e) => setJmlBayi(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary mt-5" onClick={updatePasien}>Save</button>
            </form>
        </div>
    )
}