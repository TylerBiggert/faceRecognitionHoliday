import React from 'react';

const ImageLinkForm = () => {
	return (
		<div>
			<div>
				<p className='f3 mt6'>
				{'This program will detect faces in your picture and add holiday elements to them automatically.'}
				</p>
			</div>
			<div>
				<input type='text' className='f4 pa2 center w-60'></input>
				<button className='f4 link ph3 pv2 db white bg-light-purple center'>Detect Faces</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;