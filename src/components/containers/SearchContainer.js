import { Box, Text } from "native-base";
import React, { useEffect, useState } from "react";
import SearchForm from "../forms/SearchForm";
import NewSearch from "../layout/NewSearch";
import MovieCard from "../listItems/MovieCard";
import MovieList from "../lists/MovieList";
import { getSearch } from "../services/api";

const SearchContainer = ({ navigation }) => {
    const [newSearch, setNewSearch] = useState(true);
    const [showsFilterType, setShowsFilterType] = useState("multi");
    const [showsFilterQuery, setShowsFilterQuery] = useState("");
    const [content, setContent] = useState(true);

    const fetchContent = () => {
        setNewSearch(false);
        getSearch(showsFilterQuery, showsFilterType).then(
            (content) => {
                setContent(content);
                setNewSearch(false);
            },
            (error) => {
                alert("Error", `Something went wrong! ${error}`);
            }
        );
    };

    const handleInputChange = (query) => {
        setShowsFilterQuery(query);
    };

    return (
        <Box>
            <SearchForm
                onInputChange={handleInputChange}
                fetchContent={fetchContent}
                setShowsFilterType={setShowsFilterType}
                showsFilterType={showsFilterType}
            />
            {newSearch ? (
                <NewSearch />
            ) : (
                <MovieList navigation={navigation} movies={content} />
            )}
        </Box>
    );
};

export default SearchContainer;
