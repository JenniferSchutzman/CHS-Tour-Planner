import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Typography from 'material-ui/Typography'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit
  }
})

class Login extends React.Component {
  state = {
    loginMessage: 'Login Email',
    password: 'Password'
  }
  handleChange = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <center>
          <Typography style={{ padding: '16px' }} variant="display1">
            Login to Your Favorites
          </Typography>
          <p />
          <p />
        </center>
        <div className={classes.container}>
          <FormControl className={classes.formControl}>
            <Input
              id="name-simple"
              value={this.state.loginMessage}
              onChange={this.handleChange}
            />
          </FormControl>
          <div>
            <p />
            <p />
          </div>
          <FormControl className={classes.formControl}>
            <Input
              id="name-simple"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormControl>
        </div>
        <p />
        <p />
        <center>
          <Link to="/tours" style={{ textDecoration: 'none' }}>
            <Button
              variant="raised"
              size="large"
              color="grey"
              className={classes.button}
            >
              Log In
            </Button>
          </Link>
        </center>
      </div>
    )
  }
}
//<InputLabel htmlFor="name-simple">Login email</InputLabel>
export default withStyles(styles)(Login)
