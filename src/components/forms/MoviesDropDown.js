import { Box, Center, CheckIcon, Select } from "native-base";
import React, { useState } from "react";

const MoviesDropDown = (props) => {
    const { movieFilter, setMovieFilter } = props;

    return (
        <Center mt={5} pb={5}>
            <Box w="1/2" maxW="300">
                <Select
                    selectedValue={movieFilter}
                    _selectedItem={{
                        _text: {
                            color: "white",
                        },
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" color="#fff" />,
                    }}
                    onValueChange={(itemValue) => {
                        setMovieFilter(itemValue);
                    }}
                >
                    <Select.Item label="Now Playing" value="now_playing" />
                    <Select.Item label="Popular" value="popular" />
                    <Select.Item label="Top Rated" value="top_rated" />
                    <Select.Item label="Upcoming" value="upcoming" />
                </Select>
            </Box>
        </Center>
    );
};

export default MoviesDropDown;
