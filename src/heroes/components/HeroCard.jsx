import { Link } from "react-router-dom";

const CharactersByHero = ({alter_ego, characters}) => {
    
    
    //if (alter_ego === characters) return (<></>);

    //return <p>{characters}</p>

    return (alter_ego === characters) ? <></> : <p>{characters}</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/heroes/${id}.jpg`;   // No se pone /public/heroes..... porque si esta en public, se representa como si estviera en la raiz

    //const characterByHero = (<p>{characters}</p>);



    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4 animate__animated animate__fadeIn">
                        <img className="card-img" src={heroImageUrl} alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {/*
                                {
                                    ( alter_ego !== characters) && characterByHero
                                    ( alter_ego !== characters) && (<p>{characters}</p>)
                                }
                            */}

                            <CharactersByHero characters={characters} alter_ego={alter_ego}/>

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}