import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getTour } from '../../action-creators/individual-tour'
import { singleTour } from './show.js'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton'

const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
})

class IndividualTour extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    console.log('id inside mount', id)
    this.props.getTour(id)

    console.log('inside componentDidMount', this.props.getTour(id))
  }
  render() {
    const { classes } = this.props
    console.log('sinde render', this.props)
    console.log('classes', classes)
    return (
      <div>
        <Card>
          <CardMedia
            className={classes.media}
            image="https://c1.staticflickr.com/9/8202/8211345552_fe75149247_b.jpg"
            title="Savor the Flavors of Charleston"
          />

          <CardContent>
            <Typography gutterBottom variant="headline" component="h2" />
            {this.props.tour.tourName}
            <p />
            <Typography component="p">{this.props.tour.desc}</Typography>
            <Grid item xs={12} md={6} />
            <p />
            <Typography component="p"> ${this.props.tour.price}</Typography>
            <Typography component="p">
              {' '}
              Duration: {this.props.tour.duration}
            </Typography>
            <Typography component="p">
              {' '}
              {this.props.tour.companyName}{' '}
            </Typography>
            <Typography component="p"> {this.props.tour.address}</Typography>
            <Typography component="p"> </Typography>
            <Typography component="p">
              <a href={this.props.tour.linkToBookOnline}>Book Online</a>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              GO BACK
            </Button>
            <Button size="small" color="primary">
              START OVER
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('in mapStateToProps ONE tour', state)
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

export default connector(withStyles(styles)(IndividualTour))
