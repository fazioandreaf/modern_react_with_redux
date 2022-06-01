import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

class App extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Accordion items={items} />
            </div>
        )
    }
}

export default App