import React from "react";
import {Tb360View } from "react-icons/tb";

class NewQuote extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="button-container">
               
             <button id="new-quote" onClick={this.props.handleChange}>Generar frase</button>
            </div>
        )
    }
}
export default NewQuote