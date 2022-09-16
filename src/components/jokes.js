
import { useEffect, useRef, useState } from "react";
import Card  from './card.js';





const Jokes = ({jokes}) => {
    

   if(jokes.length === 0) return null;
   
    let alljokes = jokes.result.map((joke,index)=>{
        
        return(
        <Card key = {index} index = {index} category = {joke.categories} url = {joke.url} joke = {joke.value} />
        )
    })

   
    return (
        <div className="jokes">
            {
                jokes.total > 0 ? 
                alljokes :
                <p style={{padding:'30px',textAlign:'center'}} >No Results</p>

            }
              
        </div>
    );
}

export default Jokes;