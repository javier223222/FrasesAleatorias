import React from "react";
class Author extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="cointainer-author">
                   <p id="author">
              {this.props.author}
            </p>
            </div>
          
        )
    }
}
export default Author