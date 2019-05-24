import React, {Component} from 'react';
import { connect } from 'react-redux';

class AllUsers extends Component {
	componentDidMount() {
		this.props.dispatch({type: 'GET_ALL'})
	}

	render() {
		return (
			<div>
				<h2>All Users</h2>
				<p>Currently logged in as <b>{this.props.user.username}</b></p>
				<ul>
				{this.props.allUsers.map(user => (
					<li>
						Username: {user.username} | Content: {user.password}
					</li>
				))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	allUsers: state.allUsers
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(AllUsers);