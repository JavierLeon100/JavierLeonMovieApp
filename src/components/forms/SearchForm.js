import React, { useState } from "react";
import {
    Button,
    Center,
    FormControl,
    HStack,
    Icon,
    Input,
    Select,
    VStack,
    CheckIcon,
    WarningOutlineIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const SearchForm = (props) => {
    const { onInputChange, fetchContent, setShowsFilterType, showsFilterType } =
        props;

    const onSubmit = () => {
        fetchContent();
    };

    return (
        <Center>
            <VStack space={2} py={2} px={10}>
                <FormControl isRequired>
                    <FormControl.Label fontSize="sm">
                        Search Movie/TV Show Name
                    </FormControl.Label>
                    <Input
                        placeholder="i.e. James Bond, CSI"
                        variant="filled"
                        bg="gray.200"
                        px={3}
                        width="100%"
                        InputLeftElement={
                            <Icon
                                size={5}
                                ml={2}
                                color="gray.400"
                                as={<Ionicons name="ios-search" />}
                            />
                        }
                        onChangeText={(value) => {
                            onInputChange(value);
                        }}
                    />
                    <HStack space={4}>
                        <VStack flex={1}>
                            <FormControl.Label fontSize="sm">
                                Choose Search Type
                            </FormControl.Label>
                            <Select
                                selectedValue={showsFilterType}
                                _selectedItem={{
                                    _text: {
                                        color: "white",
                                    },
                                    bg: "teal.600",
                                    endIcon: (
                                        <CheckIcon size="5" color="#fff" />
                                    ),
                                }}
                                onValueChange={(itemValue) =>
                                    setShowsFilterType(itemValue)
                                }
                            >
                                <Select.Item label="Movie" value="movie" />
                                <Select.Item label="Multi" value="multi" />
                                <Select.Item label="Tv" value="tv" />
                            </Select>
                            <FormControl.HelperText>
                                Please select a search type
                            </FormControl.HelperText>
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}
                            >
                                Movie/TV show name is required
                            </FormControl.ErrorMessage>
                        </VStack>
                        <VStack justifyContent="center">
                            <Button
                                height={10}
                                onPress={onSubmit}
                                startIcon={
                                    <Icon as={Ionicons} name="ios-search" />
                                }
                            >
                                Search
                            </Button>
                        </VStack>
                    </HStack>
                </FormControl>
            </VStack>
        </Center>
    );
};

export default SearchForm;
