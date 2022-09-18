import '../css/main.css';
import { useSearch } from '../context/searchProvider';
import backArrow from '../images/arrow-left-copy-2.png';
import { useState } from 'react';
export default function Joke(){


    let {jokeType,jokes,setseeJoke,index,changeIndex} = useSearch();
    let joke = jokes.result[index];
    let [disable,setDisable] = useState(false);


    
    let handleBack = () =>{
        setseeJoke();
    }
    let handleNext = ()=>{
        if(index+1 === jokes.total){
            setDisable(true)
            return;
            
        } 
        changeIndex(++index)
    }
    let handlePrev = ()=>{
        if(index === 0) return;
        changeIndex(--index)
    }

    

    return(
        <div className="joke_card">
            <img style={{cursor:"pointer"}} className = "back_arrow" src ={backArrow} alt ="backarrow" onClick={handleBack} />
            <div className='joke_content'>
            <p style={{color:"white"}} className="joke_ref" >{`${jokeType.toUpperCase()} JOKES`}</p>

            <h1>{joke.categories.length === 0 ? "UNCATEGORIZED" : `${joke.categories[0].toUpperCase()} JOKE`}</h1>
             <p className='' >
               {joke.value}
             </p>

            </div>
            <div style={{width:"762px",marginTop:"20px"}}>
                    <button type='button' className={disable ? "btn" : "btn disabled" } onClick = {handleNext} >NEXT JOKE</button>
                  
            <button className='btn' onClick={handlePrev} >PREV.JOKE</button>
            </div>
            <br/>
            <br/>
          
            

       </div>
    )

    }