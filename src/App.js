import logo from './logo.svg';
import React, { useState } from 'react';
import styles from './App.css';
import ReactDOM  from 'react';




export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      quoteDem:[],
      quoteSingle:"",
      quoteIdx: Math.floor(Math.random()*1635)
    };
    this.getQuotes = this.getQuotes.bind(this)
  }
  componentDidMount(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(data=> {

      this.setState({
        quoteDem:data
      })
    });
  }
  getQuotes(){
    this.setState({
      quoteIdx: Math.floor(Math.random()*1635)
    })
    }
  
  render(){
   if(this.state.quoteDem!=""){ 
    let quote = this.state.quoteDem[this.state.quoteIdx]

    return(
      <div className='container1'>
        <div className='subContainer'>
          <h1 className='quoteText'>{quote.text}</h1>
          <h4 className='quoteAuthor'>~{quote.author!= null? quote.author:"unkown"}</h4> 
          
        </div>
        <button onClick={this.getQuotes}>Get A Quote</button>
    </div>
      )
  }else{
    <div className='container1'></div>
  }
}
}


