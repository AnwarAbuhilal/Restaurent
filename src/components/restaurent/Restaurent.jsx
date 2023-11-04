import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';

export default function Restaurent() {

    let [pizzaRecipe, setPizzaRecipe] = useState([]);
    let [onionRecipe, setOnionRecipe] = useState([]);
    let [saladRecipe, setSaladRecipe] = useState([]);

    let getPizza= async()=> {
        let response= await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let pizaData= await response.json();
        let recipe= pizaData.recipes;
        setPizzaRecipe(recipe);
        // console.log(recipe);
    }



    let getOnion= async()=> {
        let response= await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let onionData= await response.json();
        let onionRecipe= onionData.recipes;
        setOnionRecipe(onionRecipe);
        // console.log(recipe);
    }

    let getSalad= async()=> {
        let response= await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let saladData= await response.json();
        let saladRecipe= saladData.recipes;
        setSaladRecipe(saladRecipe);
        // console.log(recipe);
    }

useEffect( ()=>{
    getPizza();
} , []);
useEffect( ()=>{
    getOnion();
} , []);
useEffect( ()=>{
    getSalad();
} , []);


  return (
    <>
    
     
    <div className='pizzaSec'>
        <h2 className='text text-success'>Pizza Section</h2>
        <div className='row'>
        {
               pizzaRecipe.map( (ele)=> {
                return <div className='col-md-4' key={ele.recipe_id}>
                        <h3>{ele.title}</h3>
                        <p>{ele.publisher}</p>
                        <img src= {ele.image_url} className='w-50 img-fluid' />
                </div>
               }) 
            }
        </div>
    </div>



    <div className='onionSec'>
        <h2 className='text text-success'>Onion Section</h2>
        <div className='row'>
        {
               onionRecipe.map( (ele)=> {
                return <div className='col-md-4' key={ele.recipe_id}>
                        <h3>{ele.title}</h3>
                        <p>{ele.publisher}</p>
                        <img src= {ele.image_url} className='w-50 img-fluid ' />
                </div>
               }) 
            }
        </div>
    </div>



    <div className='saladSec'>
        <h2 className='text text-success'>Salad Section</h2>
        <div className='row'>
        {
              saladRecipe.map( (ele)=> {
                return <div className='col-md-4' key={ele.recipe_id}>
                        <h3>{ele.title}</h3>
                        <p>{ele.publisher}</p>
                        <img src= {ele.image_url} className='w-50 img-fluid ' />
                </div>
               }) 
            }
        </div>
    </div>
</>
  )
}
