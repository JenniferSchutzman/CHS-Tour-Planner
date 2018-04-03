import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import classNames from 'classnames'
import { map, pluck, contains } from 'ramda'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import { CHECK_DAY } from '../../constants'
import { schedule, checkDay } from '../../action-creators/schedule'
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

// const Schedule = props => {
//   const { classes } = props
//   console.log('inside schedule state days payload', props.days)
//   const data = props.days
//   const plucked = pluck('name', data)
//   console.log('data name plucked', plucked)
//   return (
//     <div style={{ padding: '60px' }}>
//       <center>
//         <div>
//           <List
//             subheader={
//               <ListSubheader>Which day(s) would you prefer? </ListSubheader>
//             }
//           >
//             <ListItem>
//               <ListItemIcon>
//                 <TodayIcon />
//               </ListItemIcon>
//               <ListItemText primary="Anyday is fine" />
//               <Switch checked={state.checked} onChange={props.checkDay} />
//             </ListItem>
//           </List>
//         </div>
//         <dim>
//           <Link to="/recommendations" style={{ textDecoration: 'none' }}>
//             <Button
//               variant="raised"
//               size="large"
//               color="grey"
//               className={classes.button}
//             >
//               <p />
//               Ready for Results
//             </Button>
//           </Link>
//         </dim>
//       </center>
//     </div>
//   )
// }

const Schedule = props => {
  const { classes } = props
  // console.log('inside schedule state days payload', props.days)
  const data = props.days
  // const plucked = pluck('name', data)

  // console.log('schedule render', JSON.stringify(props.days[0].name))
  return (
    <div style={{ padding: '60px' }}>
      <center>
        <div>
          <List
            subheader={
              <ListSubheader>Which day(s) would you prefer? </ListSubheader>
            }
          >
            {map(day => (
              <ListItem>
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary={day.name} />
                <Switch
                  checked={day.selected}
                  onChange={props.checkDay(day.name)}
                  value={day.name}
                />
              </ListItem>
            ))(data)}
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
  console.log('inside mapStateToProps schedule', state)
  return {
    days: state.stateTracker.dow
  }
}

function mapActionsToProps(dispatch, getState) {
  return {
    checkDay: day => event =>
      dispatch({
        type: CHECK_DAY,
        payload: { day, checked: event.target.checked }
      })
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Schedule))
