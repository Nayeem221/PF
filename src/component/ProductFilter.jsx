import React, { useState } from 'react'
import Dbdata from '../DB/db'
const ProductFilter = () => {

  //state part start 
  const [data,setData]=useState(Dbdata)
 const handlefilter=(brnadname)=>{
  const filter=Dbdata.filter((item)=>{
    return item.brand===brnadname
  })
  setData(filter)
 }
  
  return (

    <>
    <div className="container ">
    <div className='flex mt-[100px] gap-[50px] mb-[70px] justify-center'>
        <button onClick={()=>setData(Dbdata)}  className='text-lg font-semibold text-cyan-300 active:scale-[1.1]'>All</button>
        <button onClick={()=>handlefilter('Apple')}  className='text-lg font-semibold text-cyan-300 active:scale-[1.1]' >Apple</button>
        <button onClick={()=>handlefilter('Xiaomi')}  className='text-lg font-semibold text-cyan-300 active:scale-[1.1]'>Xioami</button>
        <button onClick={()=>handlefilter('Samsung')}  className='text-lg font-semibold text-cyan-300 active:scale-[1.1]'>Samsung</button>
        <button onClick={()=>handlefilter('Motorola')}  className='text-lg font-semibold text-cyan-300 active:scale-[1.1]'>Motorwala</button>
      </div>
      <div className="main   flex flex-wrap gap-[120px]">
        {
          data.map((item,i)=>(
            <div key={i}  className=" singlecard relative flex  gap-3  w-[400px] rounded-10px h-[300px] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
              {
                item.discount &&
                <div className="sale py-1 px-3 text-sm absolute right-3 top-0 bg-yellow-200">Sale</div>
              }
      
        <div className="cardimage w-[150px] h-full  bg-gray-300">
        <img src={item.img} alt="" />
        </div>
        <div className="singlecardtext">
<h2 className='text-lg font-bold mb-[5px]'>{item.brand}</h2>

<p className='text-sm font-normal text-gray-600'>{item.model_no}</p>
<p className='text-sm font-normal text-gray-600'>{item.color}</p>

<ul className='list-disc pl-5 text-sm font-normal text-gray-400'>
    <li>{item.ram}</li>
    <li>{item.rom} </li>
    <li>{item.display_size}</li>
    <li>{item.camera}</li>
</ul>

  <h2 className='text-lg font-bold mt-[20px] '>price:{item.price_tk}
  {
    item.discount &&
<span className='text-green-400 ml-2'>DP:{item.discount_price_tk}</span> 
  }
  
  </h2>

        </div>
       </div>
       
          ))
        }
           

          
       
        </div>
     
    </div>
      
    </>
  )
}

export default ProductFilter
