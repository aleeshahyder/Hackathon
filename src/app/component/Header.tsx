import { FaCartShopping } from "react-icons/fa6";


import { FaSearchengin } from "react-icons/fa6";
import Link from "next/link";

  export default function Header() {
    return (
       <header className=" w-full h-{58px} bg-red-300 justify-between items-center">
           {/* left */}
           <div className="flex flex-row justify-between">
            <h1 >SHOP.</h1>
           
           {/* navbar*/}
           <ul>
            <li>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>New Arrivals</Link>
                
            </li>
           </ul>
           {/* search input */}
            
                <div className="flex justify">
                    <FaSearchengin/>
                    <input placeholder="search items..."></input>
                </div>
            </div>
            {/* cart */}
            <div className="flex items-center">
            <FaCartShopping/>
            <FaCartShopping/>
            </div>
            
       </header>
    );
  }