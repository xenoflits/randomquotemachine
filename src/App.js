import React from 'react';
import QuoteButton from './components/quotebutton'
import QuoteField from './components/quotefield'

class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      currentQuote: ""
    }
  }
  
  render(){
  return (
    <div className="App">
      <QuoteField/>
      <QuoteButton/>
    </div>
  );}
}

export default App;
