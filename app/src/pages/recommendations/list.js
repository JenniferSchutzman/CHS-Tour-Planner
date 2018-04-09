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
import { recommendations } from '../../action-creators/individual-tour'
import { CircularProgress } from 'material-ui/Progress'
import PropTypes from 'prop-types'
import { empty, not } from 'ramda'

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 25
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
})
//try out in ramda to get it to recognize if empty[]
//then loading CircularProgress
class Recommendations extends React.Component {
  componentDidMount() {
    this.props.recommendations
  }

  // const tag2 = resultOptions[1]
  // const tag3 = resultOptions[2]
  // const tag4 = resultOptions[3]
  // const tag5 = resultOptions[4]
  // const tag6 = resultOptions[5]
  // const tag7 = resultOptions[6]
  // const tag8 = resultOptions[7]
  // const tag9 = resultOptions[8]
  render() {
    //const { props } = this.props
    //const tag1 = props.results[0]
    //console.log('props.results', props.results)
    const { classes, value } = this.props
    const apiArray = this.props.tours
    if (apiArray < 1) {
      return <CircularProgress className={classes.progress} color="secondary" />
    }

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={this.props.tours.gridList}>
          <GridListTile
            key="Subheader"
            cols={2}
            style={{ height: 'auto', width: '100%' }}
          >
            <Subheader component="div">
              Your Personalized Recommendations
            </Subheader>
          </GridListTile>
          {this.props.tours.map(tile => (
            <GridListTile key={tile.name}>
              <Link
                to={`/recommendations/${tile._id}`}
                style={{ textDecoration: 'none' }}
              >
                <center>
                  <img src={tile.img} />
                </center>
                <GridListTileBar
                  title={tile.tourName}
                  subtitle={<span> ${tile.price}</span>}
                />
              </Link>
            </GridListTile>
          ))}
        </GridList>
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
}

const mapStateToProps = state => {
  return {
    tours: state.tours,
    results: state.stateTracker
  }
  console.log('in mapStateToProps after return', state)
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(Recommendations))
