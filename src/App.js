import logo from './logo.svg';
import './App.css';
import QuoteBox from './QuoteBox';
import React from 'react';
class App extends React.Component{
 constructor(props){
  super(props)
 }
 render(){
  return(
    <QuoteBox/>
  )
 }

}
export default App