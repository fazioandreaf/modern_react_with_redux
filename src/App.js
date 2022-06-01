import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const App = () => {
    const [selected, setSelected] = useState(options[0])

    return (
        <div>
            {/* <Search /> */}
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
            <Accordion items={items} />
        </div>
    )
}

export default App