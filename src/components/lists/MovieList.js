import { FlatList } from "native-base";
import React from "react";
import MovieCard from "../listItems/MovieCard";

const MovieList = (props) => {
    const { navigation, movies, type } = props;

    return (
        <FlatList
            data={movies}
            renderItem={({ item }) => (
                <MovieCard
                    image={item.poster_path}
                    title={item.title ? item.title : item.original_name}
                    popularity={item.popularity}
                    releaseDate={item.release_date}
                    navigation={navigation}
                    id={item.id}
                    type={type}
                />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default MovieList;
