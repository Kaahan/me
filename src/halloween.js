import React, { Component } from 'react';
import { Image, Menu, Segment, Grid, Header, Container } from 'semantic-ui-react';
import meme from './images/meme.jpg';

export default class Halloween extends Component {
	render() {
		return (
			<div>
				<Container>
					<Segment>
						<Image src={meme} size='large' centered/>
					</Segment>
				</Container>
			</div>
		)
	}
}