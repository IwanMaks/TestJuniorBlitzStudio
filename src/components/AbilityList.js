import React from "react"

const AbilityList = ({item, index}) => {
    if (!item.effect_entries) {
        return <></>
    }
    return (
        <li key={index} style={{marginTop: '5px', display: 'flex'}}>
            <div style={{width: '15%', fontWeight: '500'}}>{item.name}:</div>
            <div style={{width: '85%'}}>{item.effect_entries[1].effect}</div>
        </li>
    )
}

export default AbilityList