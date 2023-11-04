import React, { useEffect, useState } from 'react'

export default function Products() {

  let [products, setProducts] = useState([]);

  const getProducts = async() =>{
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    console.log(data);
    setProducts(data);
  }

   useEffect( ()=>{
  getProducts();
 }, [])

 return (
  <div className='row'>
    { products.map((ele) => {
      return <div className='col-md-4' key={ele.id}>
        <h2>{ele.title}</h2>
        <img src={ele.image} className='w-100' />
      </div>
    } )}
  </div>
 )
  
  // // const age=20;

  // let [age, setAge]=useState(20);
  // const changeAge= (age)=>{
  //   setAge(5);
  //   alert(age);
  // }

  // const getData= (name)=>{
  //   alert(name);
  // } 

  // // const changeAge= (age)=>{
  // //   age=10;
  // //   alert(age);
  // // }
  // console.log(age);
  // return (
  //   <>
  //      <div>Products</div>
  //      <button onClick={()=> getData("hello")}>Click me</button>
  //      <button onClick={()=> changeAge(age)}>Click me</button>
       
  //   </>
   
  // )
}
