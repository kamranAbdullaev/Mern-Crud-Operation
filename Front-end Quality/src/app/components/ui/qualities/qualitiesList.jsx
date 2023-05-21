import React from "react";
import PropTypes from "prop-types";
import Quality from "./quality";

import Loading from "app/components/common/comments/loading";
import { useQualitiesContext } from "app/context/qualitiesContext";

const QualitiesList = ({ qualities }) => {
    const { isLoading } = useQualitiesContext();
    console.log(isLoading);
    if (isLoading) return <Loading />;
    return (
        <>
            {qualities.map((qual) => (
                // <p key={qual}>{qual}</p>
                <Quality key={qual} id={qual} />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array
};

export default QualitiesList;
