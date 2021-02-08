import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Detail from "./components/Detail"
import PokemonList from "./components/PokemonList"

const useRoutes = () => {
        return (
            <Switch>
                <Route path="/" exact>
                    <PokemonList />
                </Route>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
            </Switch>
        )
}

export default useRoutes