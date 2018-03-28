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
const tileData = require('./tileData')

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
  const { classes } = props
  return (
    <div>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">What interests you? </Subheader>
        </GridListTile>
        {map(tile =>
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
            />
          </GridListTile>(tileData)
        )}
      </GridList>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(Interests))
