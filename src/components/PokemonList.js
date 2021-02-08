import React, {useCallback, useState, useEffect} from "react"
import {useHttp} from '../hook/request.hook'
import List from "./List";
import {Loader} from "../UI/Loader";

//'https://pokeapi.co/api/v2/pokemon/'

const PokemonList = props => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200/', 'GET')
            setLinks(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {!loading && <List links={links}/>}
        </>
    )
}

export default PokemonList