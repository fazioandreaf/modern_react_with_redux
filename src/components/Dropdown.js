import React, { useEffect, useState } from "react";



const Dropdown = ({options, selected, onSelectedChange}) => {
    const renderedOptions = options.map((elem) => {
        if (elem.value !== selected.value) {
            return (
                <div key={elem.value} className="item" onClick={() => onSelectedChange(elem) }>
                    {elem.label}
                </div>
            )
        }

        return null
    })

    return (
        <div className="ui form">
            <div className="field">
                <label  className="label">Select a color</label>
                <div className="ui selection dropdown visible active">
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className="menu visible transition">
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown