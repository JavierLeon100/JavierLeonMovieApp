import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import MoviesDropDown from "../forms/MoviesDropDown";
import Loading from "../layout/Loading";
import MovieCard from "../listItems/MovieCard";
import MovieList from "../lists/MovieList";
import { getMovies, tryMovie } from "../services/api";

const MoviesContainer = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [movieFilter, setMovieFilter] = useState("popular");

    useEffect(() => {
        setIsLoading(true);
        getMovies(movieFilter).then(
            (movies) => {
                setMovies(movies);
                setIsLoading(false);
            },
            (error) => {
                alert(error);
            }
        );
    }, [movieFilter]);

    return (
        <View>
            <MoviesDropDown
                setMovieFilter={setMovieFilter}
                movieFilter={movieFilter}
            />

            {isLoading ? (
                <Loading />
            ) : (
                <MovieList
                    navigation={navigation}
                    movies={movies}
                    type="movie"
                />
            )}
        </View>
    );
};

export default MoviesContainer;
