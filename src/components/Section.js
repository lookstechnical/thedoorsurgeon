import React, { useRef, useState, useLayoutEffect } from 'react';
import { HTMLContent } from '../components/Content';
import { useViewportScroll, useTransform, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Section = ({ section, key, index }) => {
	const [ ref, inView ] = useInView({ triggerOnce: true, threshold: 0.4 });

	console.log(index);
	let v = 3000;
	if (index % 2 == 0) {
		v = -800;
	}
	return (
		<section className="section service-section" ref={ref}>
			<motion.article initial={{ x: v }} animate={{ x: inView ? 0 : v }} transition={{ duration: 1.6 }}>
				<h4 className="is-size-4 has-text-weight-bold">{section.section.heading}</h4>
				<HTMLContent content={section.section.description} />
			</motion.article>
			<motion.picture
				initial={{ opacity: 0 }}
				animate={{ opacity: inView ? 1 : 0 }}
				transition={{ duration: 1.6 }}
			>
				<PreviewCompatibleImage
					imageInfo={{
						image: section.section.image,
						alt: `${section.section.heading}`
					}}
				/>
			</motion.picture>
		</section>
	);
};

const Sections = ({ sections }) => {
	return <div>{sections && sections.map((section, key) => <Section key={key} index={key} section={section} />)}</div>;
};

export default Sections;
