import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/Gridlist'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import food from './Photos/food.p'

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

const areaOfInterest = props => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">What interests you? </Subheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.author}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
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

// TitlebarGridList.propTypes = {
//   classes: PropTypes.object.isRequired
// }
function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(areaOfInterest))
