import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import auth from './auth-helper'
import { signin } from './api-auth'
import { Button, Card, CardActions, CardContent, makeStyles, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5)
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleText: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    btnSuccess: {
        color: '#ffffff',
        backgroundColor: '#45b531'
    },
    textField: {
        marginBottom: theme.spacing(2)
    }
}))

const SignIn: React.FC = () => {
    const styles = useStyles()
    const [values, setValues] = useState({
        email: '',
        password: '',
        error: null,
        redirectToRefresh: false
    })

    const handlerSubmit = (e) => {
        e.preventDefault()
        const user = {
            email: values.email || undefined,
            password: values.password || undefined,
        }
        signin(user)
            .then((data) => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    auth.authenticate(data, () => {
                        setValues({ ...values, error: '', redirectToRefresh: true })
                    })
                }
            })
    }

    const handlerChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    return !values.redirectToRefresh ? (
        <Card className={styles.card}>
            <CardContent>
                <Typography className={styles.titleText}>
                    Sign In
                </Typography>
                <form onSubmit={handlerSubmit} className={styles.form}>
                    <TextField id='email' type='email' label='Email' value={values.email} onChange={handlerChange('email')} />
                    <TextField id='password' type='password' label='Password' value={values.password} onChange={handlerChange('password')} />
                    <CardActions>
                        <Button color='primary' type='submit' className={styles.btnSuccess}>
                            Submit
                        </Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    ) : (
        <Redirect to='/' />
    )
}

export default SignIn
