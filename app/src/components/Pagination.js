import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
//import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import { recommendations } from '../action-creators/individual-tour';
import { LinearProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
//import Paper from '@material-ui/core/Paper';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import {
	compose,
	find,
	filter,
	contains,
	toLower,
	empty,
	not,
	map,
	tap
} from 'ramda';
const actionsStyles = theme => ({
	root: {
		flexShrink: 0,
		color: theme.palette.text.secondary,
		marginLeft: theme.spacing.unit * 2.5
	}
});

//try out in ramda to get it to recognize if empty[]
//then loading CircularProgress
class PaginateTours extends React.Component {
	componentDidMount() {
		this.props.recommendations;
	}
	handleFirstPageButtonClick = event => {
		this.props.onChangePage(event, 0);
	};
	handleBackButtonClick = event => {
		this.props.onChangePage(event, this.props.page - 1);
	};
	handleNextButtonClick = event => {
		this.props.onChangePage(event, this.props.page + 1);
	};
	handleLastPageButtonClick = event => {
		this.props.onChangePage(
			event,
			Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
		);
	};
	render() {
		const { classes, value, count, page, rowsPerPage, theme } = this.props;
		const apiArray = this.props.tours;
		if (apiArray < 1) {
			return <LinearProgress className={classes.progress} color="secondary" />;
		}

		return (
			<div>
				<IconButton
					onClick={this.handleFirstPageButtonClick}
					disabled={page === 0}>
					{<FirstPageIcon />}
				</IconButton>
				<IconButton onClick={this.handleBackButtonClick} disabled={page === 0}>
					{<KeyboardArrowLeft />}
				</IconButton>
				<IconButton
					onClick={this.handleNextButtonClick}
					disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
					{<KeyboardArrowRight />}
				</IconButton>
				<IconButton
					onClick={this.handleLastPageButtonClick}
					disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
					{<LastPageIcon />}
				</IconButton>
			</div>
		);
	}
}

PaginateTours.propTypes = {
	classes: PropTypes.object.isRequired,
	count: PropTypes.number.isRequired,
	onChangePage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	theme: PropTypes.object.isRequired
};

const PaginateToursWrapped = withStyles(actionsStyles, { withTheme: true })(
	PaginateTours
);

let counter = 0;
// function createData(companyName, tourName, price) {
// 	counter += 1;
// 	return { id: counter, name, tourName, price };
// }

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3
	},
	table: {
		minWidth: 500
	},
	tableWrapper: {
		overflowX: 'auto'
	}
});

class PaginationTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//data: this.state.tours,
			page: 0,
			rowsPerPage: 10
		};
	}
	handleChangePage = (event, page) => {
		this.setState({ page });
	};
	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	};
	render() {
		const { classes, tours } = this.props;
		const { rowsPerPage, page } = this.state;
		console.log('tours', JSON.stringify(tours));
		const emptyRows =
			rowsPerPage - Math.min(rowsPerPage, tours.length - page * rowsPerPage);
		return (
			<div className={classes.tableWrapper}>
				<Table className={classes.table}>
					<TableBody>
						{tours
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map(n => {
								return (
									<TableRow>
										<TableCell component="th" scope="row">
											{n.name}
										</TableCell>
										<TableCell component="th" scope="row">
											{n.tourName}
										</TableCell>
										<TableCell numeric>{n.price}</TableCell>
									</TableRow>
								);
							})}
						{emptyRows > 0 && (
							<TableRow style={{ height: 48 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								colSpan={3}
								count={tours.length}
								rowsPerPage={rowsPerPage}
								page={page}
								onChangePage={this.handleChangePage}
								onChangeRowsPerPage={this.handleChangeRowsPerPage}
								ActionsComponent={PaginateTours}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		);
	}
}

//
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

const mapStateToProps = state => {
	return {
		tours: state.tours
	};
};

const connector = connect(mapStateToProps);

export default connector(withStyles(styles)(PaginationTable));
