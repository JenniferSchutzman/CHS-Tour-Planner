import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import { prop, find, compose, tap } from 'ramda'
import ButtonBase from 'material-ui/ButtonBase'
import Typography from 'material-ui/Typography'
import { SELECTED_CULINARY } from '../../constants'

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
      height: 250
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

const Culinary = props => {
  const { classes, onClick, history } = props
  const width = '30%'

  //console.log('****CULINARY*****', JSON.stringify(props.insideInterests))
  const wiretap = x => console.log(x)
  const data = compose(
    tap(wiretap),
    prop('experienceTypes'),
    tap(wiretap),
    find(x => x.name === 'Culinary'),
    tap(wiretap)
  )(props.insideInterests)

  //  console.log('data after compose', JSON.stringify(data))

  return (
    <div>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <center>
            <p />
            <Typography variant="display1" gutterBottom>
              Which type of culinary focus?
            </Typography>
          </center>
        </GridListTile>
      </GridList>
      {data.map(image => (
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

function mapStateToProps(state) {
  return {
    insideInterests: state.stateTracker.interests
  }
  //console.log('state inside mapStateToProps', JSON.stringify(state))
}
function mapActionsToProps(dispatch) {
  return {
    onClick: (history, value) => () => {
      //console.log('onClick in mapActiontoProps culinary', value)
      dispatch({ type: SELECTED_CULINARY, payload: value })
      history.push(`/schedule`)
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Culinary))
