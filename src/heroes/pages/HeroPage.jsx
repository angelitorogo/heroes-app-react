import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers"
import { useMemo } from "react";

export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () =>  getHeroById( id ), [id]); //Si cambia el id, vuelve a disparar el getHeroById, sino no lo ejecuta

  const onNavigateBack = () => {
    navigate(-1)
  }
  
  if ( !hero ) return <Navigate to="/marvel" />

  return (
    <div className="row mt-5"> 
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img src={`/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail" /> {/* // No se pone /public/heroes..... porque si esta en public, se representa como si estviera en la raiz */}
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters:</h5>
        <p>{ hero.characters }</p>

        <button className="btn btn-outline-primary" onClick={ onNavigateBack }>Regresar</button>

      </div>
    </div>
    
  )
}
