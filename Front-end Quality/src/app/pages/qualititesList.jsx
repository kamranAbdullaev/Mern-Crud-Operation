import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import { useQualities } from "../hooks/useQualities";
import axios from "axios";

const QualitiesListPage = () => {
    const history = useHistory();
//     const [qualitiesState, setQualitiesState] = useState([]);

//     useEffect(async () => {
//     const { data } = await axios.get(
//         "http://localhost:4000/api/v1/quality"
//     );
//         console.log(data);
//     setQualitiesState(data.content)
// }, []);

    const { qualities, deleteQuality } = useQualities();
    const handleEdit = (param) => {
        history.push(`/edit/${param}`);
    };

    const handleDelete = (id) => {
        deleteQuality(id);
    };
    return (
        <>
            <h1>Qualitites List Page</h1>
            <QualitiesTable
                onDelete={handleDelete}
                onEdit={handleEdit}
                data={qualities}
            />
        </>
    );
};

export default QualitiesListPage;
