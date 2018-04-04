import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import { map } from 'ramda'
import Button from 'material-ui/Button'
import classNames from 'classnames'

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

const History = props => {
  const { classes } = props
  console.log('inside History state', props)
  const data = props.stateTracker
  return (
    <GridList cellHeight={180}>
      <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        <Subheader component="div">
          Which type of experience do you prefer?{' '}
        </Subheader>
      </GridListTile>
    </GridList>
  )
}

function mapStateToProps(state) {
  return {
    insideInterests: state.stateTracker.interests
  }
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(History))
