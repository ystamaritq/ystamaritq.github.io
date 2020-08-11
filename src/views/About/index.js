import React from "react";

function About() {
	return (
		<div className="container main-content mt-5 pb-4">
			<div className="row mt-5">
				<div className="card shadow-lg mt-5 pb-4 col-xs-6 col-sm-12">
					<div className="card-header color-custom-text font-weight-bolder py-4 mx-4 mt-4">
						<h3 className="text-shadow text-center">About me</h3>
					</div>

					<div className="card-body p-4">
						<div>
							<img
								className="profile-picture mb-3 mr-5 mt-4 float-left rounded shadow img-thumbnail"
								src="../../src/assets/imgs/yady.png"
								alt="yadira image"
							/>
						</div>

						<div className="card-text text-justify mt-4">
							<p className="mb-2">
								My name is Yadira Tamarit. I’m originally from Cuba. I’m a mom
								of two wonderful boys.I have a Bachelor Degree in Computer
								Science. I am currently enrolled in a UT Coding Bootcamp(The
								University of Texas at Austin) at Full Stack Developer course in
								order to learn all new technologies and continue growing my
								career.
							</p>
							<p className="mb-2">
								I love mathematics for that reason I choose computer science as
								a career. Professionally, I have always liked to challenge
								myself by never giving up on any difficult task. I also consider
								myself a team player, able to collaborate and help others. I'm
								dedicated, hard-worker, highly organized and able to work under
								pressure. I love studying and I’m open to learn when is need it.
							</p>

							<p className="mb-2">
								I studied Computer Sciences in (Universidad de las Ciencias
								Informaticas) located in Havana, Cuba from (2003 - 2008).For
								more information about my professional career, please reference
								the provided
								<span className="font-italic">links</span>
								below:{" "}
								<span className="color-custom-text">
									|<i className="fab fa-linkedin"></i>LinkedIn|
									<i className=" fab fa-github"></i>GitHub|
									<i className="fas fa-envelope"></i>Email|
									<i className="fas fa-file"></i>Resume|
								</span>
							</p>
						</div>

						<dl className="mt-4 d-flex justify-content-center">
							<dt className="mb-2 mr-2">
								<a
									href="https://www.linkedin.com/in/yadiratamarit/"
									target="_blank"
									className="icons-color"
								>
									<span>
										<i className="fab fa-linkedin fa-2x"></i>
									</span>
								</a>
							</dt>
							<td></td>
							<dt className="mb-2 mr-2">
								<a
									href="https://github.com/ystamaritq"
									target="_blank"
									className="icons-color"
								>
									<span>
										<i className=" fab fa-github fa-2x"></i>
									</span>
								</a>
							</dt>

							<dt className="mb-2 mr-2">
								<a
									href="mailto:ystamaritq@gmail.com"
									target="_blank"
									className="icons-color"
								>
									<span>
										<i className="fas fa-envelope fa-2x"></i>
									</span>
								</a>
							</dt>

							<dt>
								<a
									href="https://drive.google.com/file/d/1WcYvlFhNcF9DI-MEwoAOi8kSBUl4Abqt/view?usp=sharing"
									target="_blank"
									className="icons-color"
								>
									<span>
										<i className="fas fa-file fa-2x"></i>
									</span>
								</a>
							</dt>
						</dl>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
