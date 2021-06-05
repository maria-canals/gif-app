import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';

export const GifGrid = ({ category }) => {
	// const [images, setImages] = useState([]);
	// useEffect(() => {
	// 	getGifs(category).then(setImages);
	// }, [category]);

	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			{loading && <h4>Loading...</h4>}

			<div className='card-grid'>
				{images.map(img => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
