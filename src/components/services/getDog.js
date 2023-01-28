import { ErrorResponse } from "@remix-run/router";

export const getDog = () => {
    const url = "https://dog.ceo/api/breeds/image/random";
    return fetch(url)
        .then((response) => {
            if (!response.ok){
                throw new ErrorResponse(
                    `HTTP error: The status is ${response.status}`
                )
            }
            return response.json();
        })
        .then((response2) => {
            return response2.message;
        });
};