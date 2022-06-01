import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                }
            });
            setResults(data.query.search);
        }

        var timeoutID = setTimeout(() => {
            if (term) {
                search();
            }
        }, 500);

        return () => {clearTimeout(timeoutID);}

        // Classic method
        // var timeoutID = setTimeout(() => {
        //     clearTimeout(timeoutID);
        //     if (term) {
        //         search();
        //     }
        // }, 500);

    }, [term])

    const renderedResults = results.map(({title, snippet, pageid}) => {
        return (
            <React.Fragment key={pageid}>
                <div className="item">
                    <div className="right floated content">
                        <a href={`https>//en.wikipedia.org?curid=${pageid}`} className="ui button"> Go</a>
                    </div>
                    <div className="content">
                        <div className="header">
                            {title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: snippet}}></span>
                    </div>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="text">Enter search term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search