import React,{useRef, useState,useEffect} from 'react'
import { useDispatchCart,useCart } from './ContextReducer'
const Card = (props) => {
let dispatch=useDispatchCart()
let data=useCart()
const priceRef=useRef()
  let options=props.options
  let priceOptions=Object.keys(options)

  const [qty, setqty] = useState(1)
  const [size, setsize] = useState("")
  const handleAddToCart=async()=>{
    
    await dispatch({type:"ADD", id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    console.log(data)
  }
    

  let finalPrice=qty*parseInt(options[size])

  useEffect(() => {
    setsize(priceRef.current.value)
  }, [])
  
  return (
    <div>
       <div>
      <div className="card mt-3"  style={{"width": "18rem","maxHeight":"360px"}}>
        <img src={props.foodItem.img} style={{'overflow-x': 'hidden'}} alt=''></img>
  <div className="card-body">
    <h5 className="card-title">{props.foodItem.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='container' style={{ position: "relative", bottom: "10px" }}>
      <select className='m-2 h-100 bg-success rounded' onChange={(e)=>setqty(e.target.value)}>
        {Array.from(Array(6),(e,i)=>{
          return(
            <option key={i+1} value={i+1}>{i+1}</option>
          )
        })}
      </select>
      <select className='m-2 h-100 bg-success rounded'ref={priceRef} onChange={(e)=>setsize(e.target.value)}>
        {priceOptions.map((data)=>{
          return <option key={data} value={data}>{data}</option>
        })} 
      </select>

      <div className='d-inline h-100 f-5'>
       {finalPrice}
      </div>
    </div>
    <hr>
    </hr>
    <div className='btn bg-red text-success mx-2' onClick={handleAddToCart}>Add To Cart</div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Card
