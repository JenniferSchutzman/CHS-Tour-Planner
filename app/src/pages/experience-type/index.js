import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import tileData from './tileData'

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

const tileData = [
  {
    img: '../Photos/food.jpeg',
    title: 'Culinary: food & drinks',
    author: 'Culinary: food & drinks'
    link: "/"
  },
  {
    img: '../Photos/black_white.jpeg',
    title: 'History',
    author: 'History'
  },
  {
    img: '../Photos/surfing_color',
    title: 'Adventure',
    author: 'Adventure'
  },
  {
    img: '../Photos/graveyard.jpeg',
    title: 'Haunted',
    author: 'Haunted'
  }
]

function areaOfInterest(props) {
  const { classes } = PropTypes
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">What interests you? </Subheader>
        </GridListTile>
        {tileData.map(tile => (
          <Link to={tile.link}
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

// function mapStateToProps(state) {
//   return {
//     experienceState: state.homeState
//   }
// }
//
// const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(areaOfInterest))
