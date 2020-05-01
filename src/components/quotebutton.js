import React from 'react'

const QuoteButton = (props) => {
    return(<button className="quotebutton" onClick={()=>{props.getQuote()}}>New Quote</button>)
}

export default QuoteButton