import React from 'react'

const Question = [{
    list: {
      data: [
        {
          title: "What is the capital of India?",
          options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
        }
      ]
    }
}];

const Capital = () => {
    return (
    <div className='container max-sm:px-3'>
      <p className='text-black text-lg font-semibold'>{Question[0].list.data[0].title} {Question[0].list.data[0].options[0]}</p>
    </div>
  )
}

export default Capital