import { Box, Center, CheckIcon, Select } from "native-base";
import React, { useState } from "react";

const TvDropDown = (props) => {
    const { showsFilter, setShowsFilter } = props;

    return (
        <Center my={5}>
            <Box w="1/2" maxW="300">
                <Select
                    selectedValue={showsFilter}
                    _selectedItem={{
                        _text: {
                            color: "white",
                        },
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" color="#fff" />,
                    }}
                    onValueChange={(itemValue) => {
                        setShowsFilter(itemValue);
                    }}
                >
                    <Select.Item label="Airing Today" value="airing_today" />
                    <Select.Item label="On the Air" value="on_the_air" />
                    <Select.Item label="Popular" value="popular" />
                    <Select.Item label="Top Rated" value="top_rated" />
                </Select>
            </Box>
        </Center>
    );
};

export default TvDropDown;
