import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { START_OVER } from '../../constants'

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 200,
    height: 200
  }
}

const Welcome = () => (
  <center>
    <Typography style={{ padding: '16px' }} variant="display2">
      Charleston Tour Planner
    </Typography>
  </center>
)

const Home = props => {
  const { classes } = props
  //console.log('clean start over home', JSON.toStringify(home))
  return (
    <center>
      <div style={{ padding: '60px' }}>
        <Welcome />
        <dim>
          <Avatar
            alt="fountain"
            src="../../../fountain.png"
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <Typography style={{ padding: '25px' }} variant="display5">
            In just 3 easy steps, we will find you the perfect tour.
          </Typography>
          <Button
            variant="raised"
            size="large"
            color="grey"
            onClick={props.onClick(props.history)}
            className={classes.button}
          >
            <p />
            <p />
            Get Started
          </Button>
        </dim>
      </div>
    </center>
  )
}

function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function mapActionToProps(dispatch) {
  return {
    onClick: history => e => {
      dispatch({ type: START_OVER })
      history.push('/interests')
    }
    //console.log('onClick set InitiatialState agian')
  }
}

const connector = connect(mapStateToProps, mapActionToProps)

export default connector(withStyles(styles)(Home))
