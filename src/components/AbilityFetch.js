import React, {useCallback, useState, useEffect} from "react"
import {useHttp} from '../hook/request.hook'
import {Loader} from "../UI/Loader";
import AbilityList from "./AbilityList";

const AbilityFetch = ({item, index}) => {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()
    const url = item.ability.url

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request(url, 'GET')
            setLinks(fetched)
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
            {!loading && <AbilityList item={links} index={index}/>}
        </>
    )
}

export default AbilityFetch