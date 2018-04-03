import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import { connect } from 'react-redux'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import { getExperienceTypes } from '../../action-creators/response-tracker'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})
const Experiences = props => {
  // const { classes } = props
  const data = props.stateTrackerExp
  console.log('data', data)
  return <h1>inside experiences page</h1>
}

function mapStateToProps(state) {
  console.log('inside mapStateToProps EXPERIENCES', state)
  return {
    stateTrackerExp: state.history
  }
}

// function mapActionsToProps(state) {
//   console.log('inside mapActionsToProps', state)
//   return(
//     getExperienceTypes: state => dispatch(getExperienceTypes(state.interest))
//   )
// }

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(Experiences))

// <Link to="/schedule" style={{ textDecoration: 'none' }}>
//   <Button
//     variant="raised"
//     size="large"
//     color="grey"
//     className={classes.button}
//   >
//     <p />
//     Next
//   </Button>
// </Link>
