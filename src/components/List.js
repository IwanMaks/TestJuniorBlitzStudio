import React from "react"
import ListItem from "./ListItem"
import PokemonItem from "./PokemonItem";

const List = ({links}) => {
    if (links.length === 0) {
        return <p className="center">Server Error</p>
    }

    return (
        <div className='container'>
            <div className="row">
                {Object.keys(links.results).map(id => (
                    <div key={id}>
                        <PokemonItem item={links.results[id]}/>
                    </div>
                ))}
                <ListItem />
            </div>
        </div>
    )
}

export default List