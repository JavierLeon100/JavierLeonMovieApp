import { Box, Center, Image, Text, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { getDetails } from "../services/api";

const DetailsScreen = ({ navigation, route }) => {
    const { id, type } = route.params;
    const [content, setContent] = useState({});
    const [imageLoaded, setImageLoaded] = useState(false);

    const fetchContent = () => {
        getDetails(id, type).then((content) => {
            setContent(content);
            setImageLoaded(true);
        });
    };

    fetchContent();

    return (
        <Center>
            <Text py={5} fontSize={25} fontWeight="bold">
                {content.original_title}
            </Text>

            {imageLoaded ? (
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${content.poster_path}`,
                    }}
                    alt={content.original_title}
                    size={250}
                />
            ) : null}

            <Text px={10} py={5}>
                {content.overview}
            </Text>
            <Text fontWeight="bold" mt={5}>
                Popularity: {content.popularity} | Release Date:{" "}
                {content.release_date}
            </Text>
        </Center>
    );
};

export default DetailsScreen;
