import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import classNames from 'classnames'

import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import { schedule } from '../../action-creators/response-tracker'
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader
} from 'material-ui/List'
import Switch from 'material-ui/Switch'
import TodayIcon from 'material-ui-icons/Today'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
})

// const HandleToggle = value => () => {
//   return (
//
//   )
// }

const Schedule = props => {
  const { classes } = props
  return (
    <div style={{ padding: '60px' }}>
      <center>
        <div>
          <List
            subheader={
              <ListSubheader>Which days would you prefer? </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Anyday is fine" />
              <Switch />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Monday" />
              <Switch />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Tuesday" />
              <Switch />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Wednesday" />
              <Switch />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Thursday" />
              <Switch />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Friday" />
              <Switch />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Saturday" />
              <Switch />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <TodayIcon />
              </ListItemIcon>
              <ListItemText primary="Sunday" />
              <Switch />
            </ListItem>
          </List>
        </div>
        <dim>
          <Link to="/recommendations" style={{ textDecoration: 'none' }}>
            <Button
              variant="raised"
              size="large"
              color="grey"
              className={classes.button}
            >
              <p />
              Ready for Results
            </Button>
          </Link>
        </dim>
      </center>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    days: state.days
  }
}
const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(Schedule))
