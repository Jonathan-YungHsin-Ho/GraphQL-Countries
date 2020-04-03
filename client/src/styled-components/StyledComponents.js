import styled from 'styled-components';

export const Header = styled.h1`
	padding: 0.5rem 1rem;
	border-bottom: 1px solid silver;
	color: silver;
`;

export const Button = styled.div`
	cursor: pointer;
	font-size: 1.4rem;
	margin: 0.5rem 0;

	&:hover {
		text-decoration: underline;
	}
`;

export const Wrapper = styled.div`
	width: 98%;
	margin: 1rem auto 0;
	display: flex;
	flex-wrap: wrap;

	@media screen and (max-width: 410px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	flex-grow: 1;
	max-height: 90vh;
	overflow-y: auto;
	margin: 1rem 1%;
	padding: 0.5rem 1rem;
	border-radius: 0.4rem;
	background-color: rgba(255, 255, 255, 0.6);

	@media screen and (max-width: 680px) {
		max-height: 48vh;
	}

	@media screen and (max-width: 410px) {
		max-height: 26vh;
	}

	ul {
		list-style-type: square;
		list-style-position: inside;
	}

	p,
	li {
		margin: 0.5rem 0;
	}

	.bold {
		font-weight: bold;
	}
`;
