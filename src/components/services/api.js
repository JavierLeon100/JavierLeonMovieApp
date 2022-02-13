import axios from "axios";
import { API_KEY, BASE_URL } from "../config/api_config";

export const getMovies = (movieFilter) => {
    return axios
        .get(
            `${BASE_URL}/movie/${movieFilter}?api_key=${API_KEY}&language=en-US&page=1`,
            {
                field: [
                    "id",
                    "title",
                    "overview",
                    "popularity",
                    "poster_path",
                    "release_date",
                ],
            }
        )
        .then((response) => {
            let movies = response.data.results;
            return movies;
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const getShows = (ShowsFilter) => {
    return axios
        .get(
            `${BASE_URL}/tv/${ShowsFilter}?api_key=${API_KEY}&language=en-US&page=1`,
            {
                field: [
                    "id",
                    "title",
                    "overview",
                    "popularity",
                    "poster_path",
                    "release_date",
                ],
            }
        )
        .then((response) => {
            let Shows = response.data.results;
            return Shows;
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const getSearch = (searchQuery, searchType) => {
    return axios
        .get(
            `${BASE_URL}/search/${searchType}?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1`,
            {
                field: [
                    "id",
                    "title",
                    "overview",
                    "popularity",
                    "poster_path",
                    "release_date",
                ],
            }
        )
        .then((response) => {
            let content = response.data.results;
            return content;
        })
        .catch((error) => {
            console.log(error.message);
        });
};

export const getDetails = (DetailsID, DetailsType) => {
    return axios
        .get(
            `${BASE_URL}/${DetailsType}/${DetailsID}?api_key=${API_KEY}&language=en-US`,
            {
                field: [
                    "id",
                    "title",
                    "overview",
                    "popularity",
                    "poster_path",
                    "release_date",
                ],
            }
        )
        .then((response) => {
            let content = response.data;
            return content;
        })
        .catch((error) => {
            console.log(error.message);
        });
};
