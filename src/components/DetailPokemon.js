import React from "react"
import '../Detail.css'
import AbilityFetch from "./AbilityFetch";

const DetailPokemon = ({pokemon}) => {
    console.log('pok:', pokemon)
    return (
        <div className="container mar-top z-depth-3">
            <div style={{display: 'flex'}}>
                <img src={pokemon.sprites.front_default} alt="pokemon" className="img-size"/>
                <div className="card-info">
                    <div className="card-title">
                        {pokemon.name.toUpperCase()}
                    </div>
                    <div className="card-title-list">Basic abilities:</div>
                    <ul className="list">
                        <li>Height: {pokemon.height}</li>
                        <li>Weight: {pokemon.weight}</li>
                        <li>Type: {pokemon.types[0].type.name}</li>
                    </ul>

                    <div className="card-title-list">Special abilities:</div>
                    <ul className="list">
                        {pokemon.abilities.map((item, index) => {
                            return <AbilityFetch item={item} index={index} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailPokemon