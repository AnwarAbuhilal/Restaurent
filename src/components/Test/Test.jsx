import React, { useEffect } from 'react'
import  {useState} from 'react'

export default function Test() {

    // const [name, setName]= useState("Anjad");
    // let newName="";
      const [products, setProducts]= useState([]);
      const getProducts= async()=>{
       let response= await fetch("https://fakestoreapi.com/products");
       let data= await response.json();
      //  console.log(data);
       setProducts(data);
     }

     useEffect( ()=>{
      getProducts();
     } , []);

  return(
    
      <div className='row'>
        
         { products.map((product)=>{

          
            return <div className='col-md-4' key={product.id}>
               <h2>{product.title}</h2>
              <img src={product.img} className='w-100' />
              </div>
            
         })}
          </div>
  
     
    
    
  )
}
