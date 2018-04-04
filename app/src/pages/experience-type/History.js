import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import { prop, find, compose } from 'ramda'
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
  const data = compose(
    prop('experienceTypes'),
    find(x => x.name === 'History')
  )(props.insideInterests)
  console.log('data inside history', JSON.stringify(data))
  const fakeData = [
    { name: 'Museum', img: '../../public/white_Museum.jpg' },
    { name: 'Carriage', img: '../../public/hisCharCarriageTour.jpg' },
    { name: 'Boat', img: '../../public/sailing.jpeg' },
    { name: 'Walking', img: '../../public/street.png' }
  ]
  return (
    <div>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">
            Which type of experience do you prefer?{' '}
          </Subheader>
        </GridListTile>
        {data.map(tile => (
          <GridListTile>
            <Link to={'/schedule'} style={{ textDecoration: 'none' }}>
              <img src={tile.img} alt={tile.name} />
            </Link>
            <GridListTileBar title={tile.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

// {data.map(tile => (
//   <GridListTile>
//     <Link to={'/schedule'} style={{ textDecoration: 'none' }}>
//       <img src={tile.img} alt={tile.name} />
//     </Link>
//     <GridListTileBar title={tile.name} />
//   </GridListTile>
// ))}

function mapStateToProps(state) {
  return {
    insideInterests: state.stateTracker.interests
  }
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(History))
