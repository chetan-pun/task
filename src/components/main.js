import axios from "axios"
import { useState ,useEffect} from "react";
import '../css/main.css';
import search_icon from '../images/search-copy.png'
import Jokes from "./jokes";
import { useSearch } from "../context/searchProvider";
import Joke from "./joke";

const Main = () =>{

  let [search,setSearch] = useState('');
  let {handleSearch,jokes,jokeType,setJoketype,types,seeJoke} = useSearch();



    let handleClick = (type)=>{
        setJoketype(type)
     }
  let options = types.map((joke)=>{
    return(
        <p key = {joke.id} id = {joke.id} onClick = {()=>handleClick(joke.id)}>{joke.content}</p>
    )
  })
  //it executed when the page first loads
  useEffect(()=>{
     handleSearch(jokeType)
  },[])

 //executes if jokeType changes
  useEffect(()=>{
    handleSearch(jokeType)
    window.scrollTo({top: 600, left: 0, behavior: 'smooth'});
  },[jokeType])
  
  let handleInput = (e)=>{
    if(e.target.value === '') return;
    setSearch(e.target.value)
  }


    return(
        <main>
            <div className="main">
              <h1>The Joke Bible</h1>
              <p>Daily Laughs for you and yours</p>
              <input name="search" type = 'text' placeholder="How can we make you laugh today?"  onChange={handleInput} />
              <label>
              <img className="search_icon" src ={search_icon} onClick ={()=>handleSearch(search)} alt = "search icon"/>
              </label>
            </div>
            {
              seeJoke ? 
              <Joke/>
              :
              
              <div className="jokes_div" >
               <div className="joke_options">
                {options}
                
               </div>
                <p className="joke_ref" >{`${jokeType.toUpperCase()} JOKES`}</p>

              <Jokes jokes = {jokes} />
              </div>
            }



        </main>
    )
}

export default Main;