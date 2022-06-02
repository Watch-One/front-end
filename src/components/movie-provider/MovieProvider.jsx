import React from 'react';


const MovieProvider = ({provider}) => {

    return (
            <a href={provider.movie_url} target="_blank" rel="noreferrer">
                <img className='provider_img' src={provider.icon_url} alt="" />
            </a>
    );

}
export default MovieProvider;