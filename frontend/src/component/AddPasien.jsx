import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddData() {
    const [id_pasien, setIdPasien] = useState();
    const [nama, setNama] = useState("");
    const [usia, setUsia] = useState();
    const [usia_kehamilan, setUsiaKehamilan] = useState();
    const [alamat, setAlamat] = useState("");
    const [telpon_darurat, setTelponDarurat] = useState();
    const [proses_partus, setPartus] = useState("Normal");
    const [jumlah_bayi, setJmlBayi] = useState();
    const [id_baby, setIdBaby] = useState();
    const [gender, setGender] = useState("Laki-laki");
    const [panjang, setPanjang] = useState();
    const [berat, setBerat] = useState();
    const [status, setStatus] = useState("Sehat");
    const [anak_ke, setAnakKe] = useState();
    const [tanggal_lahir, setTanggalLahir] = useState("");
    const [jam_lahir, setJamLahir] = useState("");
    const navigate = useNavigate();

    const savePasien = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/pasiens", {
                id_pasien, nama, usia, usia_kehamilan, alamat, telpon_darurat, proses_partus, jumlah_bayi,
            });
            await axios.post("http://localhost:5000/babys", {
                id_baby, id_pasien, gender, anak_ke, panjang, berat, status, tanggal_lahir, jam_lahir,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <div className="container-sm border border-1 " style={{ width: "600px", padding: "60px", marginTop: "70px" }}>
                <h1 className=" mb-5">Form Pasien</h1>
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
                            <select className="form-select"
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

                </form>
            </div>

            <div className="container border border-1 mt-4 mb-5" style={{ width: "600px", padding: "60px" }}>
                <h1 className="mb-5">Form Bayi</h1>
                <form>

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
                            <select className="form-select"
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
                            <select className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}>
                                <option value="Sehat">Sehat</option>
                                <option value="Cacat">Cacat</option>
                                <option value="Meninggal">Meninggal</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Anak Ke</label>
                        <input
                            type="text"
                            className="form-control"
                            value={anak_ke}
                            onChange={(e) => setAnakKe(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <div className="col mb-3">
                            <label className="form-label">Tanggal Lahir </label>
                            <input
                                type="date"
                                className="form-control"
                                value={tanggal_lahir}
                                onChange={(e) => setTanggalLahir(e.target.value)}
                                p
                            />
                        </div>
                        <div className="col mb-3">
                            <label className="form-label">Jam </label>
                            <input
                                type="time"
                                className="form-control"
                                value={jam_lahir}
                                onChange={(e) => setJamLahir(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary mt-5" onClick={savePasien}>Kirim</button>
                </form>
            </div>
        </div>




    )
}