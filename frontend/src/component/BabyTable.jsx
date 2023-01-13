import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom"

export default function BabyTable() {
    const [babys, setBabys] = useState([]);

    useEffect(() => {
        getBabys();
    }, [])

    const getBabys = async () => {
        const response = await axios.get("http://localhost:5000/babys");
        setBabys(response.data);
    }

    const deleteBaby = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/babys/${id}`);
            getBabys();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="container" style={{ minWidth: "900px", padding: "60px 0" }}>
            <h1 className="mt-5 mb-5">Data baby</h1>
            <Link to="/addbaby" className="btn btn-success mb-5">
                Tambah Data
            </Link>
            <table class="table table-bordered">

                <thead className="text-center">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Id Pasien</th>
                        <th scope="col">Id Bayi</th>
                        <th scope="col">Jenis Kelamin</th>
                        <th scope="col">Panjang</th>
                        <th scope="col">Berat</th>
                        <th scope="col">Status</th>
                        <th scope="col">Tanggal Lahir</th>
                        <th scope="col">Jam Lahir</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {babys.map((baby, index) => (
                        <tr key={baby.id_baby}>
                            <td>{index + 1}</td>
                            <td>{baby.id_pasien}</td>
                            <td>{baby.id_baby}</td>
                            <td>{baby.gender}</td>
                            <td>{baby.panjang}</td>
                            <td>{baby.berat}</td>
                            <td>{baby.status}</td>
                            <td>{baby.tanggal_lahir}</td>
                            <td>{baby.jam_lahir}</td>
                            <td>

                                <Link
                                    to={`/editbaby/${baby.id_baby}`}
                                    className="btn btn-info"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteBaby(baby.id_baby)}
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