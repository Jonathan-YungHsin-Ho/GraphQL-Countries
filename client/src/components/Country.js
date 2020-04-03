import React from 'react';
import { Column } from '../styled-components';

export default function Country({
	country,
	countryLoading,
	countryError,
	countryData,
}) {
	return (
		<Column>
			<h2>
				Country {country.name && 'of'} {country.name}
			</h2>
			{countryLoading && <p>Loading...</p>}
			{countryError && <p>Error! {countryError}</p>}
			{countryData && (
				<div>
					<p>
						<span className='bold'>Native Name:</span>{' '}
						{countryData.country.native}
					</p>
					<p>
						<span className='bold'>Country Calling Code:</span> +
						{countryData.country.phone}
					</p>
					<p>
						<span className='bold'>Currency:</span>{' '}
						{countryData.country.currency}
					</p>
					<p>
						<span className='bold'>Languages:</span>
					</p>
					<ul>
						{countryData.country.languages.map((lang) => (
							<li key={lang.name}>{lang.name}</li>
						))}
					</ul>
				</div>
			)}
		</Column>
	);
}
