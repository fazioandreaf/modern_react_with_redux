import React, { useEffect, useState, useRef } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const optionsTranslate = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
]

const Translate = () => {
    const [language, setLanguage] = useState(optionsTranslate[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label> Enter Text</label>
                    <input value={text} onChange={(e) => {setText(e.target.value)}} />
                </div>
            </div>
            <Dropdown
                options={optionsTranslate}
                label='Selected Language'
                selected={language}
                onSelectedChange={setLanguage} />
                <hr />
                <h3 className="ui header">Output</h3>
                <Convert language={language} text={text} />
        </div>
    )
}

export default Translate