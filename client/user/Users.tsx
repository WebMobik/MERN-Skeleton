import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { list } from './api-user'
import { Avatar, CircularProgress, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, makeStyles, Paper, Typography } from '@material-ui/core'
import { Person, ArrowForward } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    content: {
        paddingTop: `${theme.spacing(3)}px`
    },
    titleText: {
        marginLeft: `${theme.spacing(2)}px`
    }
}))

const Users: React.FC = () => {
    const styles = useStyles()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        setLoading(true)
        
        list(signal).then(data => {
            if (data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })

        setLoading(false)
        
        return function cleanup() {
            abortController.abort()
        }
    }, [])
    
    return !loading ? (
        <Paper elevation={4} className={styles.content}>
            <Typography variant='h6' className={styles.titleText}>
                Users List
            </Typography>
            <List dense>
                {
                    users.map((user, i) => (
                        <Link to={'/user/' + user._id} key={i}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Person />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={user.name} />
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <ArrowForward />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </Paper>
    ) : (
        <CircularProgress color="inherit" />
    )
}

export default Users
