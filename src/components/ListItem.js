import React from "react"
import {Link} from 'react-router-dom'

const ListItem = ({item}) => {
    if (!item) {
        return (
            <></>
        )
    }

    return (
        <div className="col s12 m7 l4">
            <div className="card">
                <div className="card-image">
                    <img src={item.sprites && item.sprites.front_default} alt='pokemon'/>
                    <span className="card-title black-text">{item.name && item.name.toUpperCase()}</span>
                </div>
                <div className="card-action">
                    <Link to={`/detail/${item.id}`}>Detail Information</Link>
                </div>
            </div>
        </div>
    )
}

export default ListItem