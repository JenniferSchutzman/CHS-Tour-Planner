import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import { connect } from 'react-redux'

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
const Experiences = props => {
  const { classes } = props
  return (
    <center>
      <dim>
        <Link to="/schedule" style={{ textDecoration: 'none' }}>
          <Button
            variant="raised"
            size="large"
            color="grey"
            className={classes.button}
          >
            <p />
            Next
          </Button>
        </Link>
      </dim>
    </center>
  )
}

function mapStateToProps(state) {
  return {
    types: state.types
  }
}

const connector = connect(mapStateToProps)

export default connect(withStyles(styles)(Experiences))
