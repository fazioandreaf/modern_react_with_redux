import React from "react"

class SearchBar extends React.Component  {
    state = {term: ''};

    onInputChange(e) {
        console.log(e.target.value)
    }

    onInputClick() {
        console.log('Input was clicked')
    }

    onFormSubmit = (e) => {
        e.preventDefault()

        this.props.onSubmit(this.state.term)
    }

    render () {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label> Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value.toUpperCase()})}
                            onClick={this.onInputClick}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar