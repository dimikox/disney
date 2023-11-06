import axios from 'axios'

export const getCharacters = (value, choise) => {
    const params = {};
    if (choise === "1") {
        params.name = value;
    } else {
        params.tvShows = value;
    }

    return axios ({
        method: 'GET',
        url: `https://api.disneyapi.dev/character`,
        params,
    })
}

export const getCurrentPageCharacters = (number) => {
    return axios ({
        method: 'GET',
        url: `http://api.disneyapi.dev/character?page=${number}&pageSize=50`,
    })
}
export const getCharacter = (id) => {
    return axios ({
        method: 'GET',
        url: `https://api.disneyapi.dev/character/${id}`,
    })
}




