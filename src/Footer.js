import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1

    style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" 

                  
                }}>
                    Department of Posts 
	</h1>
	<Container>
		<Row>
		<Column>
			<Heading > Quick Links  </Heading> 
			<FooterLink href="#">Home</FooterLink>
			<FooterLink href="#">Feedback</FooterLink>
			<FooterLink href="#">Right To Information</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Speedpost</FooterLink>
			<FooterLink href="#">International Parcels</FooterLink>
			<FooterLink href="#">Aadhar card Registration</FooterLink>
			<FooterLink href="#">Dak Ghar Niryat Kendra</FooterLink>
		</Column>
		<Column>
			<Heading>DOP Links</Heading>
			<FooterLink href="#">Related Sites</FooterLink>
			<FooterLink href="#">Employee corner</FooterLink>
			<FooterLink href="#">contact us</FooterLink>
			<FooterLink href="#">website policies</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
