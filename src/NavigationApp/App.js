import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";

import Route from "./components/Route";

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
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
            <Header />
            {/* <Search /> */}
            {/* {
                showDropdown &&
                <>
                    <button onClick={() => setShowDropdown(!showDropdown)}>Toggle dropdown</button>
                    <Dropdown label='Select Colors' options={options} selected={selected} onSelectedChange={setSelected} />
                </>
            } */}
            {/* <Translate /> */}
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
        </div>
    )
}


export default App