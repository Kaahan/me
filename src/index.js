import React, { Component } from 'react';
import { Menu, Segment, Grid, Header } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import Home from './home.js';
import Projects from './projects.js';
import Resume from './resume.js';
import Hobby from './hobby.js';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'home',
			activeComponent: 'home',
		};
	}
	// Handle changing segments here, maybe replace content in container with
	// proper react component
	handleMenuClick = (e, { name }) => {
		this.setState({ activeItem: name });
		this.setState({ activeComponent: name });
	};

	render() {
		const activeItem = this.state.activeItem;
		let component;
		if (activeItem === 'home') {
			component = <Home />;
		} else if (activeItem === 'projects') {
			component = <Projects />;
		} else if (activeItem === 'resume') {
			component = <Resume />;
		} else if (activeItem === 'hobby') {
			component = <Hobby />;
		}
		return (
			<div>
				<Grid padded>
					<Grid.Row centered>
						<Header> 
							Kaahan Radia 
							<Header.Subheader> last seen combining dry subjects with interesting narratives </Header.Subheader>
						</Header>
					</Grid.Row>
					<Grid.Row centered columns={1}>	
						<Menu secondary compact>
							<Menu.Item name='home' active={activeItem === 'home'} onClick = {this.handleMenuClick} />
							<Menu.Item
					            name='projects'
					            active={activeItem === 'projects'}
					            onClick={this.handleMenuClick}
					          />
							<Menu.Item
					            name='resume'
					            active={activeItem === 'resume'}
					            onClick={this.handleMenuClick}
					          />
							<Menu.Item
					            name='hobby'
					            active={activeItem === 'hobby'}
					            onClick={this.handleMenuClick}
					          />
						</Menu>
					</Grid.Row>
					<Grid.Row>
						{component}
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

// ==========================
ReactDOM.render(
	<Landing />,
	document.getElementById('root')
);