import React from 'react'

const QuoteField = (props) => {
   return (<div>
       <div>{props.quote}</div>
       <div>{props.title}</div>
   </div>)
}

export default QuoteField