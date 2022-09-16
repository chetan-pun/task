import { useState,useContext,createContext } from "react";
import axios from 'axios';

let SearchContext = createContext();



export function useSearch (){
    return  useContext(SearchContext);
}


let SearchProvider = ({children})=>{
    let types = [
        {id : "adult", content : "ADULT JOKES"},
        {id : "dad", content : "DAD JOKES"},
        {id : "christmas", content : "CHRISTMAS JOKES"},
        {id : "job", content : "JOB JOKES"},
        {id : "birthday", content : "BIRTHDAY JOKES"},
        {id : "social", content : "SOCIAL JOKES"},
        {id : "puns", content : "PUNS"},
        {id : "all", content : "VIEW ALL"}
        ];
    
    let [jokes,setJokes] = useState([]);
    let [jokeType,setJokeType] = useState('adult');
    
    let setJoketype = (type) => setJokeType(type);

    let handleSearch = async(search) =>{
        await axios.get(`https://api.chucknorris.io/jokes/search?query=${search}`)
        .then((re)=>{
            setJokeType(search);
            setJokes(re.data);
        })
        .catch(()=>{
            setJokeType(search);
            setJokes([]);
        })
     }


    return(
         <SearchContext.Provider value = {{jokes,handleSearch,jokeType,setJoketype,types}} >
             {children}
         </SearchContext.Provider>
    )

}

export default SearchProvider;