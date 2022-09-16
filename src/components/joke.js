import '../css/main.css';
import { useJoke } from '../context/jokeProvider';
import { useSearch } from '../context/searchProvider';
import backArrow from '../images/arrow-left-copy-2.png';
export default function Joke(){

    let {setseeJoke,index,changeIndex} = useJoke();
    let {jokeType,jokes} = useSearch();
    let joke = jokes.result[index]

    
    let handleBack = () =>{
        setseeJoke();
    }
    let handleNext = ()=>{
        if(index+1 === jokes.total) return;
        changeIndex(++index)
    }
    let handlePrev = ()=>{
        if(index === 0) return;
        changeIndex(--index)
    }
    
    

    return(
        <div className="joke_card">
            <img style={{cursor:"pointer"}} src ={backArrow} alt ="backarrow" onClick={handleBack} />
            <div className='joke_content'>
            <p className="joke_ref" >{`${jokeType.toUpperCase()} JOKES`}</p>

            <h1>{joke.categories.length === 0 ? "UNCATEGORIZED" : `${joke.categories[0].toUpperCase()} JOKE`}</h1>
             <p>
               {joke.value}
             </p>
             <button onClick={handlePrev} >pre</button>
             <button onClick={handleNext} >next</button>

            </div>

       </div>
    )

    }