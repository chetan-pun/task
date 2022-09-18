
import { useState } from 'react';
import '../css/navigation.css';


const Navbar = () =>{

    let [open,setOpen] = useState(false)

    return(
        <nav>
            <a className='SO-FUNKTIONIERTS'>SO FUNKTIONIERTS</a>
            <a>SONDERANGEBOTE</a>
            <a className='MEIN-BEREICH'>MEIN BEREICH</a>
            <div className='hamburger'>
                <button onClick={()=>setOpen(!open)}>Menue</button>
                {
                    open &&
                    <div className='nav'>
                     <p>SO FUNKTIONIERTS</p>
                     <p>SONDERANGEBOTE</p>
                     <p>MEIN BEREICH</p>
                </div>

                }
                
            </div>
        </nav>
    )
}

export default Navbar;