import React, { useState,useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


const Home = () => {




 const [search,setSearch]=useState('')
  const [foodCat,setFoodCat]=useState([])
    const [foodItem,setFoodItem]=useState([])
  
    const loadData=async()=>{
      let response =await fetch("http://127.0.0.1:5000/api/foodData",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        }
    })
  
    response=await response.json()
    // console.log(response[0],response[1])
  
    setFoodItem(response[0])
    setFoodCat(response[1])
    }
  useEffect(() => {
    loadData()
  
  }, [])



  return (
    <div>
      <Navbar></Navbar>
      <div>
      <div id="carouselExample" className="carousel slide" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <div className="form-inline d-flex justify-content-center align-items-center">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="Search"
                aria-label="Search" 
                style={{ maxWidth: "100%" }}
             value={search} onChange={(e)=>{
              setSearch(e.target.value)
             }} />
             
            </div>
    </div>
    <div className="carousel-item active">
      <img src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg" className="d-block w-100 h-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKqzrE2hZnTGh65h_SlXd8X8V75HXdXC3Eg&s" className="d-block w-100 h-50" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ytimg.com/vi/3CVDrAkhDmI/maxresdefault.jpg" className="d-block w-100 h-50" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>

</div>
      </div>
      <div className='container'>

        {
          foodCat !== []
          ? foodCat.map((data)=>{
            return (<div className='row mb-3'><div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
              <hr />
              {foodItem !==[]? foodItem.filter((item)=>(item.CategoryName==data.CategoryName) &&(item.name.toLowerCase().includes(search.toLowerCase())) )
              .map(filterItem=>{
                return(
                  <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                    <Card foodItem={filterItem}
                    options={filterItem.options[0]}
                   > </Card>
                  </div>
                )
              })
              :<div>no such data found</div>}
</div>

            )
          
          })
          :<div></div>
        }
      
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default Home
