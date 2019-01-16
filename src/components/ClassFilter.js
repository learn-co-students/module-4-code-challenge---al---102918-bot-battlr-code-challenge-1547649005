import React from 'react';

class ClassFilter extends React.Component{

    constructor(){
        super()

        this.state = {
            input: ''
        }

    }

    handleOnChange = (e)=> {
        this.setState({input:e.target.value})
    }

    render(){
        return (

            <div>
                <form onSubmit={(e) => this.props.handleSubmit}>
                <input onChange={this.handleOnChange} type="text" value={this.state.input} placeholder="Filter by bot_class"/>
                <input type="submit"/>
                </form>
            </div>
        )
    }

    
}

export default ClassFilter;