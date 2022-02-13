import { Box } from "native-base";
import React, { useEffect, useState } from "react";
import TvDropDown from "../forms/TvDropDown";
import Loading from "../layout/Loading";
import MovieList from "../lists/MovieList";
import { getShows } from "../services/api";

const TvContainer = ({ navigation }) => {
    const [shows, setShows] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showsFilter, setShowsFilter] = useState("popular");

    useEffect(() => {
        setIsLoading(true);
        getShows(showsFilter).then(
            (shows) => {
                setShows(shows);
                setIsLoading(false);
            },
            (error) => {
                alert(error);
            }
        );
    }, [showsFilter]);

    return (
        <Box>
            <TvDropDown
                setShowsFilter={setShowsFilter}
                showsFilter={showsFilter}
            />
            {isLoading ? (
                <Loading />
            ) : (
                <MovieList navigation={navigation} movies={shows} />
            )}
        </Box>
    );
};

export default TvContainer;
