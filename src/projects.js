import React, { Component } from 'react'
import { Container, Image, Segment, Header } from 'semantic-ui-react'
import playlistDJ from './images/playlistDJ.png';
export default class Projects extends Component {
	render() {
		return (
			<Container text>
				<Segment>
					<Header> <a href='https://kaahan.pythonanywhere.com'>Playlist DJ</a> </Header>
					<br />
					My plea to Spotify to give power users (or people who just want to create great party atmospheres) more power over their playlists.
					Uses D3.js, Flask, and a whole lotta API calls to let users sort their playlists by song attributes over the length of their playlist (in a nice graphical format).
					<Image src={playlistDJ} />
				</Segment>
			</Container>
		);
	}
}