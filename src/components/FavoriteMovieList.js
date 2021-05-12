import React from 'react';

import { Link, useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import { removeFavorites } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    // const { id } = useParams();

    // const favorite = props.favorites.find(movie=>movie.id);
    //console.log(favorite);
    const handleDelete = (id) => {
        props.removeFavorites(id);
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={() => handleDelete(movie.id)} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return {
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps, { removeFavorites })(FavoriteMovieList);