import React from 'react';
import QuoteButton from './components/quotebutton'
import QuoteField from './components/quotefield'

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      currentQuote: "empty",
      title: "empty"
    }
  }

  componentDidMount(){
    const url = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';
    fetch(url)
    .then((response)=>{
      return response.json();
    })
    .then((response)=>{
      const randomNumber = Math.floor(Math.random() * 10)
      let content = response[randomNumber].content.rendered;
      let title = response[randomNumber].title.rendered;
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
      <QuoteButton/>
    </div>
  );}
}

export default App;
