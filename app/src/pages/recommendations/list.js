import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import { Link } from 'react-router-dom'
import { browserHistory } from 'react-router'
import classNames from 'classnames'
import Button from 'material-ui/Button'

const Recommendations = props => {
  const { classes } = props
  return (
    <div>
      <div>
        <GridList cellHeight={180} className={props.tours.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <Subheader component="div">
              Your Personalized Recommendations
            </Subheader>
          </GridListTile>
          {props.tours.map(tile => (
            <GridListTile key={tile.name}>
              <Link
                to={`/recommendations/${props.tours._id}`}
                style={{ textDecoration: 'none' }}
              />
              <img src={tile.img} />
              />
              <GridListTileBar
                title={tile.tourName}
                subtitle={<span> ${tile.price}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <p />

      <div>
        <center>
          <dim>
            <Link to="/interests" style={{ textDecoration: 'none' }}>
              <Button variant="raised" size="large" color="grey">
                <p />
                Start Over
              </Button>
            </Link>
          </dim>
        </center>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tours: state.tours
  }
  console.log('in mapStateToProps after return', state)
}

const connector = connect(mapStateToProps)

export default connector(Recommendations)
