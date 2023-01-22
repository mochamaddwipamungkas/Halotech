import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"
import moment from "moment";
import swal from "sweetalert";

export default function DataPasien() {
    const [pasiens, setPasiens] = useState([]);
    const [status, setStatus] = useState("");
    const [tanggal_awal, setTanggalAwal] = useState("");
    const [tanggal_akhir, setTanggalAkhir] = useState("");
    const [gender, setGender] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [partus, setPartus] = useState("");
    const [keyTanggalAwal, setKeyTanggalAwal] = useState("");
    const [keyTanggalAkhir, setKeyTanggalAkhir] = useState("");
    const [keyStatus, setKeyStatus] = useState("");
    const [keyGender, setKeyGender] = useState("");
    const [keySortBy, setKeySortBy] = useState("");
    const [keyPartus, setKeyPartus] = useState("");


    useEffect(() => {
        getAllData();
    }, [keyTanggalAwal, keyTanggalAkhir, keyStatus, keyGender, keySortBy, keyPartus])

    const getAllData = async () => {
        const response = await axios.get(`http://localhost:5000/alldata?tanggal_awal=${keyTanggalAwal}&tanggal_akhir=${keyTanggalAkhir}&status=${keyStatus}&gender=${keyGender}&sortby=${keySortBy}&partus=${keyPartus}`);
        setPasiens(response.data);
    }
    const deletePasien = async (idPasien, idBaby, namaPasien) => {

        swal({
            title: "Apkah anda yakin?",
            text: `menghapus data id: ${idPasien} dengan nama ${namaPasien}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (willDelete) => {
                if (willDelete) {
                    try {
                        await axios.delete(`http://localhost:5000/pasiens/${idPasien}`);
                        await axios.delete(`http://localhost:5000/babys/${idBaby}`);
                        getAllData();
                    } catch (error) {
                        console.log(error);
                    }
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Anda batal menghapus data");
                }
            });
    }

    const handleFilterSubmit = () => {
        setKeyTanggalAwal(tanggal_awal);
        setKeyTanggalAkhir(tanggal_akhir);
        setKeyGender(gender);
        setKeyStatus(status);
        setKeySortBy(sortBy);
        setKeyPartus(partus);
    }

    const handleResetFilter = () => {
        setTanggalAwal("");
        setTanggalAkhir("");
        setStatus("");
        setGender("");
        setSortBy("");
        setPartus("");
    }

    return (
        <div className="container" style={{ minWidth: "900px", padding: "60px 0" }}>
            <h1 className="mt-5 mb-5">Data Pasien</h1>
            <Link to={`addpasien`} className="btn btn-success mb-5">
                Tambah Data
            </Link>
            <div className="d-flex justify-content-end mb-3">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Filter
                </button>


                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-primary text-white">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Filter Data</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" style={{ fontSize: "15px" }}>
                                <form>
                                    <label>Dari Tanggal :</label>
                                    <input type="date"
                                        className=" m-3"
                                        value={tanggal_awal}
                                        onChange={(e) => setTanggalAwal(e.target.value)}
                                    />
                                    <label>Sampai :</label>
                                    <input type="date"
                                        className=" m-3"
                                        value={tanggal_akhir}
                                        onChange={(e) => setTanggalAkhir(e.target.value)}
                                    />
                                    <div>
                                        <label>Status : </label>
                                        <select className="m-3"
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}>
                                            <option value="">Pilih Menu</option>
                                            <option value="Sehat">Sehat</option>
                                            <option value="Cacat">Cacat</option>
                                            <option value="Meninggal">Meninggal</option>
                                        </select>
                                        <label>Jenis Kelamin : </label>
                                        <select className="m-3"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}>
                                            <option value="">Pilih Menu</option>
                                            <option value="Laki-laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>

                                        </select>
                                    </div>

                                    <label>Proses Partus :</label>
                                    <select className="m-3"
                                        value={partus}
                                        onChange={(e) => setPartus(e.target.value)}>
                                        <option value="">Pilih Menu</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Dibantu alat">Dibantu alat</option>
                                        <option value="Caesar">Caesar</option>
                                        <option value="Waterbirth">Waterbirth</option>
                                    </select>
                                    <label>Sort By :</label>
                                    <select className="m-3"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}>
                                        <option value="">Pilih Menu</option>
                                        <option value="id_pasien">Id Pasien</option>
                                        <option value="id_baby">Id Bayi</option>
                                        <option value="nama">Nama</option>
                                        <option value="usia">Usia Pasien</option>
                                        <option value="alamat">Alamat</option>
                                        <option value="telpon_darurat">Telpon Darurat</option>
                                        <option value="usia_kehamilan">Usia Kehamilan</option>
                                        <option value="proses_partus">Proses Partus</option>
                                        <option value="jumlah_bayi">Jumlah Bayi</option>
                                        <option value="gender">Jenis Kelamin</option>
                                        <option value="panjang">Panjang</option>
                                        <option value="berat">Berat</option>
                                        <option value="status">Status</option>
                                        <option value="tanggal_lahir">Tanggal Lahir</option>
                                    </select>
                                </form>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleResetFilter}>Reset</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleFilterSubmit}>Submit</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <table className="table table-bordered" style={{ fontSize: "12px" }}>

                <thead className="text-center">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Id Pasien</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Usia</th>
                        <th scope="col">Alamat</th>
                        <th scope="col">Telpon Darurat</th>
                        <th scope="col">Usia Kehamilan</th>
                        <th scope="col">Proses Partus</th>
                        <th scope="col">Jumlah Bayi</th>
                        <th scope="col">Id Bayi</th>
                        <th scope="col">Jenis Kelamin</th>
                        <th scope="col">Panjang</th>
                        <th scope="col">Berat</th>
                        <th scope="col">Status</th>
                        <th scope="col">Anak Ke</th>
                        <th scope="col">Tanggal Lahir</th>
                        <th scope="col">Aksi</th>

                    </tr>
                </thead>
                <tbody className="text-center">
                    {pasiens.map((baby, index) => (

                        <tr key={baby.id_baby}>
                            <td>{index + 1}</td>
                            <td>{baby.pasien.id_pasien}</td>
                            <td className="text-start">{baby.pasien.nama}</td>
                            <td>{baby.pasien.usia} Tahun</td>
                            <td>{baby.pasien.alamat}</td>
                            <td>{baby.pasien.telpon_darurat}</td>
                            <td>{baby.pasien.usia_kehamilan} Hari</td>
                            <td>{baby.pasien.proses_partus}</td>
                            <td>{baby.pasien.jumlah_bayi}</td>
                            <td>{baby.id_baby}</td>
                            <td>{baby.gender}</td>
                            <td>{baby.panjang} cm</td>
                            <td>{baby.berat} kg</td>
                            <td>{baby.status}</td>
                            <td>{baby.anak_ke}</td>
                            <td>{moment(baby.tanggal_lahir).format('DD-MM-YYYY')} {baby.jam_lahir}</td>
                            <td >

                                <Link
                                    to={`editpasien/${baby.id_baby}`}
                                    className="btn btn-info" style={{ fontSize: "12px", padding: "2px 5px" }}
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deletePasien(baby.id_pasien, baby.id_baby, baby.pasien.nama,)}
                                    className="btn btn-danger ms-1 mt-1" style={{ fontSize: "12px", padding: "2px 5px" }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}