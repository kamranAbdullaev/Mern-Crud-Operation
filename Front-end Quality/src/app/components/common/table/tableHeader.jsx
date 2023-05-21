import React from "react";
import PropTypes from "prop-types";
const TableHeader = ({ columns }) => {
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={column}
                        {...{ role: columns[column].path && "button" }}
                        scope='col'
                    >
                        {columns[column].name}{" "}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    columns: PropTypes.object.isRequired,
};

export default TableHeader;
