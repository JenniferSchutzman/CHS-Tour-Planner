import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const Welcome = () => (
  <center>
    <img
      alt="Charleston Tour Planner"
      style={{ paddingTop: '16px' }}
      src="./fountatain.jpeg"
    />
    <Typography style={{ padding: '16px' }} variant="display1">
      Welcome to the Charleston Tour Planner App
    </Typography>
    //{' '}
    <div>
      //{' '}
      <Link to="/resources" style={{ textDecoration: 'none' }}>
        //{' '}
        <Button variant="raised" color="primary">
          // Browse Resources //{' '}
        </Button>
        //{' '}
      </Link>
      //{' '}
    </div>
    //{' '}
    <div>
      //{' '}
      <Link to="/categories" style={{ textDecoration: 'none' }}>
        //{' '}
        <Button variant="raised" color="primary" style={{ marginTop: '8px' }}>
          // Browse Categories //{' '}
        </Button>
        //{' '}
      </Link>
      //{' '}
    </div>
  </center>
)

const Home = props => {
  return (
    <div style={{ padding: '60px' }}>
      <Welcome />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    home: state.appData
  }
}

const connector = connect(mapStateToProps)

export default connector(Home)
