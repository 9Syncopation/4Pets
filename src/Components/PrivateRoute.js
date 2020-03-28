import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {UserContext} from '../Context/UserContext'

export default function PrivateRoute({children , ...rest}) {
    const {user} = React.useContext(UserContext)
    //TODO read more regarding render PROP method within private route
    //TODO Fixed only when changing component => comp at App.js
    //TODO but did not render the component
    return (
        <Route {...rest} render ={() => {
        return user.token 
        ? children
        : <Redirect to="/LoginPage"></Redirect>}}></Route>
    )
}
