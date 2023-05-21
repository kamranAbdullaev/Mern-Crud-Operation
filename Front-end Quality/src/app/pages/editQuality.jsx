import React from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import QualityForm from "../components/ui/qualityForm";
import { useQualities } from "../hooks/useQualities";

const EditQualityPage = () => {
    const history = useHistory();
    const id = useParams().id;
    const { getQuality, updateQuality } = useQualities();
    const quality = getQuality(id);
    
    const handleSubmit = (data) => {
        updateQuality(data).then((data) => {
            if (data) history.push("/");
        });
    };

    return (
        <>
            <h1>Edit Quality Page</h1>{" "}
            <QualityForm data={quality} onSubmit={handleSubmit} />
        </>
    );
};

export default EditQualityPage;
