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
            image="https://c1.staticflickr.com/9/8202/8211345552_fe75149247_b.jpg"
            title="Savor the Flavors of Charleston"
          />

          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              Savor the Flavors of Charleston
            </Typography>
            <Typography component="p">
              Come join us as we walk, talk and taste our way through
              Charleston. This 2½ hour Charleston Food Tour will immerse you in
              the history and culture of the Lowcountry. You will discover how
              our unique cuisine has evolved over the past 300+ years while
              sampling delicious specialties from local eateries, markets,
              bakeries, restaurants, and culinary landmarks.
            </Typography>
            <Grid item xs={12} md={6} />
            <p />
            <Typography component="p"> Company Name </Typography>
            <Typography component="p"> Price</Typography>
            <Typography component="p"> Schedule</Typography>
            <Typography component="p"> Link to Company Website</Typography>
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
  console.log('in mapStateToProps', state)
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
