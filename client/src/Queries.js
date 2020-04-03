import { gql } from 'apollo-boost';

export const GET_CONTINENTS = gql`
	query {
		continents {
			code
			name
		}
	}
`;

export const GET_CONTINENT = gql`
	query GetContinent($code: ID!) {
		continent(code: $code) {
			countries {
				code
				name
			}
		}
	}
`;

export const GET_COUNTRY = gql`
	query GetCountry($code: ID!) {
		country(code: $code) {
			name
			native
			phone
			continent {
				name
			}
			currency
			languages {
				name
				native
				rtl
			}
			emoji
			emojiU
		}
	}
`;
