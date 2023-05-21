import React from "react";
import PropTypes from "prop-types";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, data, children }) => {
    return (
        <table className='table'>
            {children || (
                <>
                    <TableHeader {...{ columns }} />
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </table>
    );
};
Table.propTypes = {
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array,
};

export default Table;
