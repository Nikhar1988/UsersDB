import React, { useState } from 'react';

const TableSearch = ({ onSearch }) => {


    const [value, setValue] = useState('');

    const valueChangeHandler = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => onSearch(value)}
                >Search</button>
            </div>
            <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={valueChangeHandler}
                value={value} />
        </div>
    );
}

export default TableSearch;