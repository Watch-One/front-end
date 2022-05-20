import React from 'react';


const MovieProvider = ({provider}) => {

    return (
        <div>
            <a href={provider.movie_url} target="_blank" rel="noreferrer">{provider.name}</a>
        </div>
    );

}
export default MovieProvider;