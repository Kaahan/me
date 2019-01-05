import React, { Component } from 'react';
import { Segment, Image, Container, List } from 'semantic-ui-react';
import face from './images/faceshot_compressed.jpg';
export default class Home extends Component {
	render() {
		return (
			<Container text>
				<Image src={face} size='small' circular bordered centered>

				</Image>
				<p>
				<br />	
				That caveman looking dude up there? Yea, that's me (though I promise I've cut my hair since then).
				<br />	
				<br />	
				Hi, I'm <strong>Kaahan</strong> affectionately known as, well, Kaahan. Pleasure to meet you. If you've come to my site, you're probably here for one of three reasons:
				<br />
				</p>
				<List as='ol'>
					<List.Item as='li'> You're a recruiter, in which case check out my <strong>resume</strong> and <strong>projects</strong> tabs </List.Item>
					<List.Item as='li'> You're here for my music/writing/other assorted things, in which case check out my <strong>hobby</strong> tab</List.Item>
					<List.Item as='li'> You have no idea how or why you're here, in which case keep reading, I'll tell you a little bit about myself (recruiters feel free to keep reading too)</List.Item>
				</List>
				<p>
				<br />
				I'm a student at the <strong>University of California, Berkeley</strong> pursuing a degree in <strong>Computer Science</strong>. I spend my time alternating between 
				being buried under academics and working at the <strong>RISELab</strong> (where I work on <strong>computer vision</strong> and <strong>systems</strong>). 
				<br />
				<br />
				I hope to work for myself one day, but until then, I <em>love</em> providing unique user experiences through <strong>data science</strong> and <strong>machine learning</strong>. 
				I'm a "do it all for the product" kinda guy though, so I'll do whatever it takes to make my users happy users (as long as it's legal).
				<br />
				<br />
				In my free time I like to think up <em>crazy</em> ideas (sometimes they're even useful) and try my hand at implementing them. The ones that make it out alive are located 
				in the <strong>projects</strong> tab.
				<br />
				<br />
				I also have a passion for songwriting (with my voice and guitar) and occasionaly release music. So if your team needs some musical relaxation in between debugging sessions, 
				I'm a perfect fit.
				</p>
			</Container>
		);
	}
}