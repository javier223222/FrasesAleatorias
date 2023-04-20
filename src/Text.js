import React from "react";
class Text extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="text-container">
                    <h1 id="text">
         {this.props.text}
         
        </h1>
            </div>
       
        );
    }
}
export default Text
