import React from 'react'

const QuoteField = (props) => {

    let quote = props.quote.replace(/<p[^>]*>|<\/p>/g,"");
    quote = quote.replace(/&#8217;/g,"'"); 
   return (<div className="quotefield">
       <div className="quotefield-quote">{quote}</div>
       <div className="quotefield-title">{props.title}</div>
   </div>)
}
export default QuoteField