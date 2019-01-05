import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { Document, Page, pdfjs } from 'react-pdf'
export default class Resume extends Component {
	render() {
		pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
		return (
			<Container centered>
				<Document file={require('./images/resume_final_classes.pdf')}>
					<Page pageNumber={1} width={window.innerWidth * 0.8} />
				</Document>
			</Container>
		);
	}
}