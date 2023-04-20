import React from "react";


class TweetQuote extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="tweet-container">
           <a id="tweet-quote"  target="__top" href="twitter.com/intent/tweet"><ion-icon name="logo-twitter" ></ion-icon></a>
        </div>
        )
       
    }
}
export default TweetQuote