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
import { map, filter, compose, pluck } from 'ramda'
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
  const filtered = filter(item => item.name === 'History')(data)
  console.log('filtered', filtered)
  const exp = filtered.experienceTypes

  console.log('data', data)
  console.log('exp', exp)

  return (
    // <div>
    // <GridList cellHeight={180}>
    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
      <Subheader component="div">
        Which type of experiece do you prefer?{' '}
      </Subheader>
    </GridListTile>

    //     {exp.map(tile => (
    //       <GridListTile>
    //         <img src={tile.img} alt={tile.name} />
    //         <GridListTileBar title={tile.name} />
    //         />
    //       </GridListTile>
    //     ))}
    //   </GridList>
    // </div>
  )
}

function mapStateToProps(state) {
  console.log('inside mapStateToProps EXPERIENCES', state)
  return {
    stateTrackerExp: state.stateTracker.interests
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
