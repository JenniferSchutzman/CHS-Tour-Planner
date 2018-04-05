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
import ButtonBase from 'material-ui/ButtonBase'
import { selectInterest } from '../../action-creators/response-tracker'
import { SELECTED_INTEREST } from '../../constants'
import classNames from 'classnames'

import Typography from 'material-ui/Typography'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%'
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100
    },
    '&:hover': {
      zIndex: 1
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15
    },
    '&:hover $imageMarked': {
      opacity: 0
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor'
    }
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%'
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity')
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity')
  }
})
const Interests = props => {
  const { classes, onClick, history } = props
  const width = '30%'
  console.log('inside grid interests state', JSON.stringify(props.stateTracker))
  const data = props.stateTracker
  return (
    <div>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <Subheader component="div">What interests you? </Subheader>
        </GridListTile>
      </GridList>
      {data.interests.map(image => (
        <ButtonBase
          focusRipple
          key={image.name}
          onClick={onClick(history, image.name)}
          className={classes.image}
          style={{
            width: width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.img})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subheading"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.name}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
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

function mapActionsToProps(dispatch) {
  return {
    onClick: (history, value) => () => {
      console.log('onClick clicked', value)
      dispatch({ type: SELECTED_INTEREST, payload: value })
      history.push(`/interests/${value}`)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Interests))
