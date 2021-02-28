import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Menu from './core/Menu'
import SignIn from './auth/Signin'
import SignUp from './user/Signup'
import Profile from './user/Profile'
import Users from './user/Users'
import { makeStyles } from '@material-ui/core'
import PrivateRoute from './auth/PrivateRoute'
import EditProfile from './user/EditProfile'

const useStyles = makeStyles(theme => ({
    main: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box'
    }
}))

const MainRouter: React.FC = () => {
    const mainStyles = useStyles()
    return (
        <div className={mainStyles.main}>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route path='/users' component={Users} />
                <PrivateRoute path='/user/edit/:userId' component={EditProfile} />
                <Route path='/user/:userId' component={Profile} />
            </Switch>
        </div>
    )
}

export default MainRouter
