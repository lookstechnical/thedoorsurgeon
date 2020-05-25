import React from 'react';
import { HTMLContent } from '../components/Content';

const Section = ({ section }) => {
	console.log(section);
	return (
		<section className="section service-section">
			<div>
				<h4 className="is-size-4 has-text-weight-bold">{section.section.heading}</h4>
				<HTMLContent content={section.section.description} />
			</div>
			<div />
		</section>
	);
};

const Sections = ({ sections }) => {
	console.log(sections, 'adasdasd');
	return <div>{sections && sections.map((section) => <Section key={section.heading} section={section} />)}</div>;
};

export default Sections;
