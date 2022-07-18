import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf_cv from "../../Assets/resume.pdf";
import pdf_master from "../../Assets/master.pdf";
import pdf_english from "../../Assets/b2.pdf";
import pdf_certificates from "../../Assets/certificates.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia, Tooltip } from "@mui/material";
import Footer from "@/components/Footer";
function Index() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, [width]);

	return (
		<div>
			<Container fluid className="resume-section">
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<h1 className="project-heading">
						<strong className="purple">Resume</strong>
					</h1>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/1RpAqZ38uLXRpznytLuUDe2ZU3x6604Ns/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Tooltip title="CLICK ME"><Button
						variant="primary"
						style={{ maxWidth: "250px" }}
						href={
							pdf_cv
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button></Tooltip>
				</Row>
				{/*                                 MASTER                                                 */}
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<h1 className="project-heading">
						<strong className="purple">The constancy of completion <br />of the master's degree.</strong>
					</h1>
				</Row>
				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/1juCBzvZMNnle39dyitxPO170Zxl2uyRr/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Tooltip title="CLICK ME"><Button
						variant="primary"
						style={{ maxWidth: "250px" }}
						href={
							pdf_master
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Constancy
					</Button></Tooltip>
				</Row>
				{/*                                 English                                                 */}
				<br />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<h1 className="project-heading">
						<strong className="purple">Certificate B2 Upper Intermediate </strong>
					</h1>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/13ZjJE3Q6cCs65sKUoXotzOlOSlbbUSzM/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Tooltip title="CLICK ME"><Button
						variant="primary"
						style={{ maxWidth: "250px" }}
						href={
							pdf_english
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Certificate
					</Button></Tooltip>
				</Row>
				{/*                                 certificates                                                 */}
				<br />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<h1 className="project-heading">
						<strong className="purple"> My Certificates </strong>
					</h1>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 824 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							height="1056px"
							src="https://drive.google.com/file/d/1A0Xb2EhSVRTg6Oe67veDHPjNDZCpk_5u/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Tooltip title="CLICK ME"><Button
						variant="primary"
						style={{ maxWidth: "250px" }}
						href={
							pdf_certificates
						}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Certificates
					</Button></Tooltip>
				</Row>
			</Container>
			<Footer /> 
		</div>
	);
}

export default Index;
