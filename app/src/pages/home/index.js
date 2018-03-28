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

// import Paper from 'material-ui/Paper'
// import Typography from 'material-ui/Typography'

// import fountain from './pics/fountain.png'
const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 300,
    height: 300
  }
}

// const fountainImage = props => {
//   const { classes } = props
//   return <div className={classes.row}>/></div>
// }

const Welcome = () => (
  <center>
    <Typography style={{ padding: '16px' }} variant="display2">
      Welcome to the Charleston Tour Planner
    </Typography>
  </center>
)

const Home = props => {
  const { classes } = props
  return (
    <div style={{ padding: '60px' }}>
      <Welcome />
      <center>
        // <fountainImage />
        <Avatar
          alt="fountain"
          src="https://c1.staticflickr.com/7/6240/6349710040_d6b09c28b6_b.jpg"
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
        <Typography style={{ padding: '16px' }} variant="display1">
          In just 3 easy steps we will find you the perfect tour.
        </Typography>
        <dim>
          <Button
            variant="raised"
            size="large"
            color="grey"
            className={classes.button}
          >
            <p />
            Get Started
          </Button>
        </dim>
      </center>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default connector(withStyles(styles)(Home))
