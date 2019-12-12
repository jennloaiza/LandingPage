import React from "react";
import { Jumbotron, Button, CardDeck, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const Home = props => {
	return (
		<div>
			<Jumbotron>
				<h1 className="display-3">A Warm Welcome!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt
					possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
					numquam repellat.
				</p>
				<Button color="primary">Call to action!</Button>
			</Jumbotron>

			<CardDeck>
				<Card>
					<CardImg
						top
						width="100%"
						src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80/318x180.svg"
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore
							debitis beatae culpa natus architecto.
						</CardText>
						<Button color="primary">Find Out More!</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						top
						width="100%"
						src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80vg"
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore
							debitis beatae culpa natus architecto.
						</CardText>
						<Button color="primary">Find Out More!</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						top
						width="100%"
						src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80318x180.svg"
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore
							debitis beatae culpa natus architecto.
						</CardText>
						<Button color="primary">Find Out More!</Button>
					</CardBody>
				</Card>
				<Card>
					<CardImg
						top
						width="100%"
						src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
						alt="Card image cap"
					/>
					<CardBody>
						<CardTitle>Card title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore
							debitis beatae culpa natus architecto.{" "}
						</CardText>
						<Button color="primary">Find Out More!</Button>
					</CardBody>
				</Card>
			</CardDeck>
		</div>
	);
};
