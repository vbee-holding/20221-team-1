import React, { useState } from "react";
import SelectReact from "react-select";
import { SELECT_OPTION } from "../../constant";
import "./Select.css";

const Select = (props) => {
    const { selected, handleSelected } = props;

    return (
        <SelectReact
            value={selected}
            onChange={handleSelected}
            options={SELECT_OPTION}
            defaultValue={selected}
            className="select"
        />
    );
};

export default Select;
