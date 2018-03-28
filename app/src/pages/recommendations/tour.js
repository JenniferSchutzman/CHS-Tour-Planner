import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTour } from '../../action-creators/individual-tour'

class IndividualTour extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.idea
    this.props.getTour(id)
  }
  render() {
    const props = this.propTypes
    return (
      <div>
        <div>
          <h1>Welcome to the individual tour page to be edited soon</h1>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    tour: state.tour
  }
}

const mapActionsToProps = dispatch => {
  return {
    getTour: id => dispatch(getTour(id))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(IndividualTour)
