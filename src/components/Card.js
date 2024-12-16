import React from 'react'

const Card = () => {
  return (
    <div>
       <div>
      <div className="card mt-3"  style={{"width": "18rem","maxHeight":"360px"}}>
        <img src='https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg' alt=''></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='container' style={{ position: "relative", bottom: "10px" }}>
      <select className='m-2 h-100 bg-success rounded'>
        {Array.from(Array(6),(e,i)=>{
          return(
            <option key={i+1} value={i+1}>{i+1}</option>
          )
        })}
      </select>
      <select className='m-2 h-100 bg-success rounded'>
        <option value='half'>Half</option>
        <option value='full'>Full</option>
      </select>

      <div className='d-inline h-100 f-5'>
        Total Price
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Card
