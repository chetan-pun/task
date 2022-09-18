
import { useSearch } from '../context/searchProvider';
import '../css/main.css';
import current from '../images/green-light.png';

export default function Card({category,url,joke,index}){
   let {setseeJoke,changeIndex} = useSearch();

   let handleClick = ()=>{
       setseeJoke();
       changeIndex(index);

      
   }
    return(
        <div className="card">
        <h3><img src={current} alt = "current" /> &nbsp;{category.length === 0 ? "UNCATEGORIZED" : `${category[0].toUpperCase()} JOKE`}</h3>
        <p>
            {joke}
        </p>
        <a style={{cursor:"pointer"}} onClick={handleClick}>SEE STATS</a>
       </div>
    )
}