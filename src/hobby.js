import React, { Component } from 'react';
import { Segment, Image, Container, List, Header, Divider } from 'semantic-ui-react';

export default class Hobby extends Component {
	render() {
		return (
			<Container text>
				<Segment>
					<Header>Music</Header>
					Currently no released songs, but plenty written down (with help from my friends in <a href='https://www.facebook.com/SongwritingAtBerkeley/'>Songwriting @ Berkeley</a>).
					Will be updated sometime in January 2019! Stay tuned...
					<Divider />
					Catch my current jams on <a href='https://open.spotify.com/user/kaahan_radia'>Spotify</a> (I'd recommend listening to "songs to chill out to" first)
				</Segment>
				<Segment>
					<Header>Reading</Header>
					It's not so much a hobby as a neccessity, here's my reading list for 2019 (so far):
					<List as="ol">
						<List.Item as='li'><i>The Three-Body Problem</i> by Cixin Liu</List.Item>
						<List.Item as='li'><i>Hillbilly Elegy</i> by J. D. Vance</List.Item>
						<List.Item as='li'><i>A Philosophy of Software Design</i> by John Ousterhout</List.Item>
					</List>
				</Segment>
			</Container>
		);
	}
}
