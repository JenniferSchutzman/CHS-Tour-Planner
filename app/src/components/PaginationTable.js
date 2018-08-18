// import React from 'react';
// import { connect } from 'react-redux';
// import { withStyles } from 'material-ui/styles';
// //import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
// import Subheader from 'material-ui/List/ListSubheader';
// import IconButton from 'material-ui/IconButton';
// import InfoIcon from 'material-ui-icons/Info';
// import { Link } from 'react-router-dom';
// import { browserHistory } from 'react-router';
// import classNames from 'classnames';
// import Button from 'material-ui/Button';
// import { recommendations } from '../action-creators/individual-tour';
// import { LinearProgress } from 'material-ui/Progress';
// import Typography from 'material-ui/Typography';
// import PropTypes from 'prop-types';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import LastPageIcon from '@material-ui/icons/LastPage';
//
// import {
// 	compose,
// 	find,
// 	filter,
// 	contains,
// 	toLower,
// 	empty,
// 	not,
// 	map,
// 	tap
// } from 'ramda';
// const actionsStyles = theme => ({
// 	root: {
// 		flexShrink: 0,
// 		color: theme.palette.text.secondary,
// 		marginLeft: theme.spacing.unit * 2.5
// 	}
// });
//
// //try out in ramda to get it to recognize if empty[]
// //then loading CircularProgress
// class PaginateTours extends React.Component {
// 	componentDidMount() {
// 		this.props.recommendations;
// 	}
//
// 	};
// 	render() {
// 		const { classes, value, count, page, rowsPerPage, theme } = this.props;
// 		const apiArray = this.props.tours;
// 		if (apiArray < 1) {
// 			return <LinearProgress className={classes.progress} color="secondary" />;
// 		}
//
// 		return (
// 			<div className={classes.root}>
// 			<IconButton
// 				onClick={this.handleFirstPageButtonClick}
// 				disabled={page === 0}
// 				>
// 				{theme.direction === 'rtl' ? <LastPageIcon />: <FirstPageIcon />}
// 				</IconButton>
// 				<IconButton
// 					onClick={this.handleBackButtonClick}
// 					disabled={page === 0}
// 				>
// 				{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
// 				</IconButton>
// 				<IconButton
// 					onClick={this.handleNextButtonClick}
// 					disabled={page >= Math.ceil(count / rowsPerPage) - 1}
// 					>
// 					{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
// 					</IconButton>
// 					<IconButton
// 					onClick={this.handleLastPageButtonClick}
// 					disabled={page >=Math.ceil(count / rowsPerPage) -1}
// 					>
// 					{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
// 					</IconButton>
// 					</div>
// 				<GridList cellHeight={180} className={this.props.tours.gridList}>
// 					<GridListTile
// 						key="Subheader"
// 						cols={2}
// 						style={{ height: 'auto', width: '100%' }}>
// 						<center>
// 							<p />
// 							<Typography variant="display1" gutterBottom>
// 								See All Tours Here
// 							</Typography>
// 						</center>
// 					</GridListTile>
// 					{this.props.tours.map(tile => (
// 						<GridListTile key={tile.name}>
// 							<center>
// 								<div className={classes.gridList}>
// 									<img src={tile.img} />
// 								</div>
// 							</center>
// 							<GridListTileBar
// 								title={tile.tourName}
// 								subtitle={<span> ${tile.price}</span>}
// 							/>
// 						</GridListTile>
// 					))}
// 				</GridList>
// 				<p />
// 			</div>
// 		);
// 	}
// }
//
// const mapStateToProps = state => {
// 	return {
// 		tours: state.tours
// 	};
// };
//
// const connector = connect(mapStateToProps);
//
// export default connector(withStyles(actionStyles)(PaginationTable));
