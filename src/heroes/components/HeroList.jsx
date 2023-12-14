import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({publisher}) => {

    const heroes = useMemo( () => getHeroesByPublisher(publisher), [publisher]); //Si cambia el publisher, vuelve a disparar el getHeroesByPublisher, sino no lo ejecuta
   

    return (
        
        <div className="row rows-cols-1 row-cols-md-3 g-3">

            {
              heroes.map( heroe => (

                <HeroCard key={ heroe.id} { ...heroe}/>

              ))
            }

            
          
        </div>

    )
    
}
