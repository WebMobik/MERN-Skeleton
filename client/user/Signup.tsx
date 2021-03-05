import React, { useState } from 'react'
import { create } from './api-user'
import { Link } from 'react-router-dom'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Icon,
  TextField,
  Typography,
} from '@material-ui/core'
import useStyles from '../styles/stylesForm'

const SignUp: React.FC = () => {
  const styles = useStyles()
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    open: false,
  })

  const handlerChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value })
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    const user = {
      email: values.email || undefined,
      name: values.name || undefined,
      password: values.password || undefined,
    }
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error })
      } else {
        setValues({ ...values, error: '', open: true })
      }
    })
  }

  return (
    <>
      <Card className={styles.card}>
        <CardContent>
          <form onSubmit={handlerSubmit} className={styles.form}>
            <Typography className={styles.titleText}>Sign Up</Typography>
            <TextField
              id="name"
              label="Name"
              value={values.name}
              onChange={handlerChange('name')}
              margin="normal"
            />
            <TextField
              id="email"
              type="email"
              label="Email"
              value={values.email}
              onChange={handlerChange('email')}
              margin="normal"
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              value={values.password}
              onChange={handlerChange('password')}
              margin="normal"
            />
            <Divider />
            {values.error && (
              <Typography component="p" color="error">
                <Icon color="error">error</Icon>
                {values.error}
              </Typography>
            )}
            <CardActions>
              <Button
                variant="contained"
                type="submit"
                className={styles.btnSuccess}
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
      <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account succesfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="signin">
            <Button color="primary" variant="contained">
              Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SignUp
