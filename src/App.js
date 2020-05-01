import React from 'react';
import QuoteButton from './components/quotebutton'
import QuoteField from './components/quotefield'

class App extends React.Component{
  constructor(props){
    super();
    this.getQuote = this.getQuote.bind(this)
    this.state = {
      currentQuote: "empty",
      title: "empty",
      randomnumber: 0
    }
  }

  componentDidMount(){
    this.getQuote();
  }

  getQuote(){
    const url = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';
    fetch(url)
    .then((response)=>{
      return response.json();
    })
    .then((response)=>{
      let previousnumber = this.state.randomnumber
      let randomnumber = 0
      while (previousnumber === randomnumber){
      randomnumber = Math.floor(Math.random() * 10)}
      let content = response[randomnumber].content.rendered;
      let title = response[randomnumber].title.rendered;
      this.setState({
        currentQuote: content,
        currentTitle: title
      })
    })
  }
  
  render(){
  return (
    <div className="App">
      <QuoteField quote={this.state.currentQuote}
                  title={this.state.currentTitle}/>
      <QuoteButton getQuote={this.getQuote}/>
    </div>
  );}
}

export default App;
