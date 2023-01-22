import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditPasien() {
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
    const { id } = useParams();

    useEffect(() => {
        getPasienById();
    }, []);

    const updatePasien = async (pasienId, babyId) => {
        try {
            await axios.patch(`http://localhost:5000/pasiens/${pasienId}`, {
                id_pasien, nama, usia, usia_kehamilan, alamat, telpon_darurat, proses_partus, jumlah_bayi,
            });
            await axios.patch(`http://localhost:5000/babys/${babyId}`, {
                id_baby, id_pasien, gender, panjang, berat, status, anak_ke, tanggal_lahir, jam_lahir,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const getPasienById = async () => {
        const response = await axios.get(`http://localhost:5000/alldata/${id}`);
        setIdPasien(response.data.id_pasien);
        setIdBaby(response.data.id_baby);
        setGender(response.data.gender);
        setPanjang(response.data.panjang);
        setBerat(response.data.berat);
        setStatus(response.data.status);
        setAnakKe(response.data.anak_ke);
        setTanggalLahir(response.data.tanggal_lahir);
        setJamLahir(response.data.jam_lahir);
        setNama(response.data.pasien.nama);
        setUsia(response.data.pasien.usia);
        setUsiaKehamilan(response.data.pasien.usia_kehamilan);
        setAlamat(response.data.pasien.alamat);
        setTelponDarurat(response.data.pasien.telpon_darurat);
        setPartus(response.data.pasien.proses_partus);
        setJmlBayi(response.data.pasien.jumlah_bayi);

    };

    return (
        <div>
            <div className="container border border-1 " style={{ width: "600px", padding: "60px", marginTop: "70px" }}>
                <h1 className="mb-5">Form Pasien</h1>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Id Pasien</label>
                        <input
                            type="text"
                            className="form-control"
                            disabled
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
                                <option value="Waterbirth">Waterbirth</option>
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
                            disabled
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

                    <button type="button" className="btn btn-primary mt-5" onClick={() => updatePasien(id_pasien, id_baby)}> Kirim</button>
                </form>
            </div>
        </div >
    )
}