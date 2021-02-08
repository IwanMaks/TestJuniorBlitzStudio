import React, {useState, useCallback, useEffect} from "react";
import {useParams} from 'react-router-dom'
import {useHttp} from "../hook/request.hook"
import {Loader} from "../UI/Loader";
import DetailPokemon from "./DetailPokemon";

const Detail = () => {
    const {request, loading} = useHttp()
    const [pokemon, setPokemon] = useState(null)
    const pokemonId = useParams().id

    const getLink = useCallback(async () => {
        try {
            const fetched = await request(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, 'GET')
            setPokemon(fetched)
        } catch (e) {

        }
    }, [pokemonId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {!loading && pokemon && <DetailPokemon pokemon={pokemon}/>}
        </>
    )
}

export default Detail