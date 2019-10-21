import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Container, Image, Segment, Header } from 'semantic-ui-react'
import playlistDJ from './images/playlistDJ.png'
import libraryDemo from './images/library_demo.mp4'
export default class Projects extends Component {
	render() {
		return (
			<Container>
			<Container text>
				<Segment>
					<Header> <a href='https://bibliotheca.surge.sh'> Bilbiotheca </a> </Header>
					<br />
					A first draft attempt at teaching functional programming through an interactive storytelling experience. Releasing chapters once or twice a month.
					<br />
					<br />
					The current interactive elements give basic command line familiarity, as well an introduciton to functional composition.
					<br />
					<br />
					Built off of React, I created a custom Markdown parser to deal with inserting interactive components into a Markdown document, as well as a terminal component and isometric rendering.
					<br />
					<br />
					<ReactPlayer url={libraryDemo} playing loop/>
				</Segment>
			</Container>
			<br />
			<Container text>
				<Segment>
					<Header> <a href='https://kaahan.pythonanywhere.com'>Playlist DJ</a> </Header>
					<br />
					My plea to Spotify to give power users (or people who just want to create great party atmospheres) more power over their playlists.
					<br />
					Uses D3.js, Flask, and a whole lotta API calls to let users sort their playlists by song attributes over the length of their playlist (in a nice graphical format).
					<br />
					<em>note</em>: currently not supported on mobile or Firefox (working on that)
					<Image src={playlistDJ} rounded/>
				</Segment>
			</Container>
			</Container>
		);
	}
}