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
import { tileData } from './tileData'
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

const Interests = props => {
  // const { classes } = tileData.props
  const { classes } = props
  console.log('inside grid interests state', props.stateTracker)
  const data = props.stateTracker
  return (
    <div>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">What interests you? </Subheader>
        </GridListTile>

        {data.interests.map(tile => (
          <GridListTile>
            <img src={tile.img} alt={tile.name} />
            <GridListTileBar title={tile.name} />
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

//MAKE A LARGE IF STATEMENT FOR THE BUTTON LINKS?
//OR SHOULD ALL BUTTONS LINK TO EXPERIENCES BUT THE IF STATEMENT IS IN THE EXPERIENCE INDEX?
//If (state.interests.name == 'History') { return map over those objects to dispplay }
//OR wil have only that that interest object appear so can jumpt straight into mapping over the objects

function mapStateToProps(state) {
  console.log('inside mapStateToProps stateTracker', state.stateTracker)
  return {
    stateTracker: state.stateTracker
  }
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(Interests))
