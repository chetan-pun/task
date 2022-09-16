import { createContext,useContext ,useState} from "react";

let JokeContext = createContext();

export let useJoke = ()=>{
    return useContext(JokeContext)
}


let JokeProvider = ({children})=>{

    let [seeJoke,setSeeJoke] = useState(false);
    let [index,setIndex] = useState(0);

    let setseeJoke=()=>{
        setSeeJoke(!seeJoke);
    }




    let changeIndex = (index) => setIndex(index);

    return(
         <JokeContext.Provider value = {{seeJoke,setseeJoke,index,changeIndex}} >
             {children}
         </JokeContext.Provider>
    )

}

export default JokeProvider;