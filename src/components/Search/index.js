import React from 'react';

const Search = (props) => {
	let inputText = '';
	return (
		<div className='navbar navbar-light bg-light'>
			<form onSubmit={(e) => e.preventDefault()} className='form-inline mx-auto'>
				<input
					className='form-control mr-sm-2'
					onChange={(e) => {
						inputText = e.target.value;
					}}
				/>
				<button
					className='btn btn-outline-success my-2 my-sm-0'
					onClick={() => props.onSearchClick(inputText)}
					type='submit'
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Search;
