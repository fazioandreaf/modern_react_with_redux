import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title:'What is React?',
        content: 'React is a front'
    },
    {
        title:'Why use React?',
        content: 'React is a front'
    },
    {
        title:'How do you use React?',
        content: 'React is a front'
    }
]

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Gree',
        value: 'green'
    },
    {
        label: 'The color Blue',
        value: 'blue'
    }
]

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />
    }
}

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />
    }
}

const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate items={items} />
    }
}

const App = () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
            {/* <Search /> */}
            {/* {
                showDropdown &&
                <>
                    <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
                    <Dropdown label='Select Colors' options={options} selected={selected} onSelectedChange={setSelected} />
                </>
            } */}
            {/* <Translate /> */}
            {showAccordion()}
            {showList()}
            {showTranslate()}
        </div>
    )
}


export default App