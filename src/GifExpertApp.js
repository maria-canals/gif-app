import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
	// const categories = ['Family Guy', 'Simpsons', 'Futurama'];
	const [categories, setCategories] = useState(['Family Guy']);

	return (
		<>
			<h2>GifApp</h2>
			<AddCategory setCategories={setCategories} />

			<hr />

			<ol>
				{categories.map(cat => (
					<GifGrid key={cat} category={cat} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
