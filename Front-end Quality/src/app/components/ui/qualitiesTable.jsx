import React from "react";
import Table from "../common/table";
const QualitiesTable = ({ data, onEdit, onDelete }) => {
    console.log(data);
    const columns = {
        name: {
            path: "name",
            name: "Наименование",
        },
        color: {
            path: "color",
            name: "Цвет",
        },
        edit: {
            component: (quality) => (
                <button
                    onClick={() => onEdit(quality._id)}
                    className='btn btn-success'
                >
                    Изменить
                </button>
            ),
        },
        delete: {
            component: (quality) => (
                <button
                    onClick={() => onDelete(quality._id)}
                    className='btn btn-danger'
                >
                    Удалить
                </button>
            ),
        },
    };
    if (data?.length > 0) return <Table columns={columns} data={data} />;
    return null;
};

export default QualitiesTable;
