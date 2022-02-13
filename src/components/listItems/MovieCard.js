import { Box, Button, Center, HStack, Image, Text, VStack } from "native-base";
import React from "react";

const MovieCard = (props) => {
    const { image, title, popularity, releaseDate, navigation, id, type } =
        props;

    return (
        <Box borderBottomWidth={1} borderBottomColor="gray.300">
            <HStack justifyContent="space-between" p={4} space={3}>
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${image}`,
                    }}
                    alt={title}
                    size="lg"
                />
                <VStack flex={1} pr={10}>
                    <Text fontWeight="bold">{title}</Text>
                    <Text>Popularity: {popularity}</Text>
                    <Text>Release Date: {releaseDate}</Text>
                    <Button
                        onPress={() =>
                            navigation.navigate("Details", {
                                id,
                                type,
                            })
                        }
                    >
                        More Details
                    </Button>
                </VStack>
            </HStack>
        </Box>
    );
};

export default MovieCard;
