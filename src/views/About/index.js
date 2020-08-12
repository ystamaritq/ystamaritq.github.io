import React from "react";
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdbreact";
import pic from "./imgs/yady.png";
import { Container, Col, Row } from "react-bootstrap";

const About = () => {
	return (
		<Container fluid className="p-5">
			<MDBRow className="d-flex justify-content-center flex-wrap flex-row">
				<MDBCol className="col-lg-8 col-md-6 col-sm-12">
					<MDBCard className="bg-light">
						<MDBCardImage
							className="mb-0 py-2 rounded-circle z-depth-1 img-fluid col-sm-12 mx-auto d-lg-flex"
							src={pic}
							md="4"
							alt="me"
							style={{ width: "22em" }}
						/>
						<hr className="mt-0" />
						<MDBCardBody cascade className="text-center">
							<MDBCardTitle className="card-title mb-4">
								<strong>About Me</strong>
							</MDBCardTitle>

							<p className="text-uppercase text-secondary mb-3 font-weight-bold">
								Full Stack Developer
							</p>

							<MDBCardText className="text-justify">
								My name is Yadira Tamarit. I’m originally from Cuba. I’m a mom
								of two wonderful boys.I have a Bachelor Degree in Computer
								Science. I am currently enrolled in a UT Coding Bootcamp(The
								University of Texas at Austin) at Full Stack Developer course in
								order to learn all new technologies and continue growing my
								career.
							</MDBCardText>
							<MDBCardText className="text-justify">
								I love mathematics for that reason I choose computer science as
								a career. Professionally, I have always liked to challenge
								myself by never giving up on any difficult task. I also consider
								myself a team player, able to collaborate and help others. I'm
								dedicated, hard-worker, highly organized and able to work under
								pressure.
							</MDBCardText>
							<MDBCardText className="text-justify">
								I love studying and I’m open to learn when is need it. I studied
								Computer Sciences in (Universidad de las Ciencias Informaticas)
								located in Havana, Cuba from (2003 - 2008).For more information
								about my professional career, please reference the provided
								links below:
							</MDBCardText>

							<MDBCol md="12" className="d-flex justify-content-center">
								<MDBBtn
									tag="a"
									floating
									size="lg"
									className="mx-1 mb-0 btn-git"
									href=""
								>
									<MDBIcon fab icon="github" />
								</MDBBtn>
								<MDBBtn tag="a" floating size="lg" className="mx-1 mb-0 btn-li">
									<MDBIcon fab icon="linkedin-in" />
								</MDBBtn>
								<MDBBtn
									tag="a"
									floating
									size="lg"
									className="mx-1 mb-0 btn-email"
								>
									<MDBIcon icon="envelope" />
								</MDBBtn>
								<MDBBtn
									tag="a"
									floating
									size="lg"
									className="mx-1 mb-0 btn-email"
								>
									<MDBIcon icon="file" />
								</MDBBtn>
							</MDBCol>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</Container>
	);
};

export default About;
