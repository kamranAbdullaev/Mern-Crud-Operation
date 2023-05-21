import React from "react";
import PropTypes from "prop-types";
import { useQualitiesContext } from "app/context/qualitiesContext";
const Quality = ({ id }) => {
    const { name, color } = useQualitiesContext().getQualityById(id);
    return <span className={"badge m-1 bg-" + color}>{name}</span>;
};
Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
