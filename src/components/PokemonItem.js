import React, {useCallback, useState, useEffect} from "react"
import {useHttp} from '../hook/request.hook'
import {Loader} from "../UI/Loader"
import ListItem from "./ListItem"

const PokemonItem = ({item}) => {
    const [pokemon, setPokemon] = useState({})
    const {loading, request} = useHttp()
    const url = item.url

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request(url, 'GET')
            setPokemon(fetched)
        } catch (e) {}
    }, [request, url])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <ListItem item={pokemon}/>}
        </>
    )
}

export default PokemonItem