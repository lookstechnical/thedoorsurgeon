import React, { useState, useEffect, useRef } from 'react';

const StickyHeader = () => {
	const [ isSticky, setSticky ] = useState(false);
	const ref = useRef(null);
	const handleScroll = () => {
		console.log('hscroll', ref, ref.current.getBoundingClientRect());
		if (ref.current && ref.current.getBoundingClientRect().top <= 0) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', () => handleScroll);
		};
	}, []);

	return (
		<div className={`brand-green contact-header ${isSticky ? ' sticky' : ''}`} ref={ref}>
			<div className="container has-text-white">
				<div>
					Emergency: <span className="has-text-weight-bold has-text-white">07912 294 111</span>
				</div>
			</div>
		</div>
	);
};

export default StickyHeader;
