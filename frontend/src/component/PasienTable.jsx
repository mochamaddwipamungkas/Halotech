import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"

export default function PasienTable() {
    const [pasiens, setPasiens] = useState([]);

    useEffect(() => {
        getPasiens();
    }, [])

    const getPasiens = async () => {
        const response = await axios.get("http://localhost:5000/pasiens");
        setPasiens(response.data);
    }

    const deletePasien = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/pasiens/${id}`);
            getPasiens();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container" style={{ minWidth: "900px", padding: "60px 0" }}>
            <h1 className="mt-5 mb-5">Data Pasien</h1>
            <Link to={`addpasien`} className="btn btn-success mb-5">
                Tambah Data
            </Link>
            <table class="table table-bordered">

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
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {pasiens.map((pasien, index) => (
                        <tr key={pasien.id_pasien}>
                            <td>{index + 1}</td>
                            <td>{pasien.id_pasien}</td>
                            <td className="text-start">{pasien.nama}</td>
                            <td>{pasien.usia}</td>
                            <td>{pasien.alamat}</td>
                            <td>{pasien.telpon_darurat}</td>
                            <td>{pasien.usia_kehamilan}</td>
                            <td>{pasien.proses_partus}</td>
                            <td>{pasien.jumlah_bayi}</td>
                            <td>

                                <Link
                                    to={`editpasien/${pasien.id_pasien}`}
                                    className="btn btn-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deletePasien(pasien.id_pasien)}
                                    className="btn btn-danger ms-1"
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