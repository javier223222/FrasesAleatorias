import React from "react"
import Text from "./Text"
import Author from "./Author"
import NewQuote from "./NewQuote"
import TweetQuote from "./TweetQuote"
import randomColor from "./coloresAleatorios"
import randomItem from "./randomItem"

class QuoteBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
           done:false,
            items:[],
            verse:'',
            authorName:''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(result=>result.json())
        .then(items=>this.setState({
            done: true,
            items,
            verse:items['quotes'][0]['quote'],
            authorName:items['quotes'][0]['author']
        })).catch(() => {
            this.setState({
                done: true,
                success: false
            })
        })
      
       
      
    }
   
    handleChange(){
        randomColor()
        
       let array=[...this.state.items["quotes"]]
       let item=randomItem(array)
       this.setState({
        verse:array[item]['quote'],
        authorName:array[item]["author"]
       })
    }
    render(){
        return(
            <div id="quote-box" className="text-center   container-fluid principalContainer">
             <Text text={this.state.verse}/>
             <Author author={this.state.authorName}/>
             <NewQuote handleChange={ this.handleChange}/>
             <TweetQuote/>
            </div>
        )
    }
}

export default QuoteBox