import { IGifsData } from '../models/data';

export const getDataTrending = async (): Promise<IGifsData> => {
    const url = 'https://api.giphy.com/v1/gifs/trending';
    const search = '?';
    const key = '&api_key=rIBXAUARqWUeHGOtglMKUSh4AZlxU5iZ';
    const limit = '&limit=25';
    const completeUrl = url + search + key + limit;

    const result = await fetch(completeUrl).then((response) => {
        return response.json();
    });
    return result;
};

export const getSearchData = async (dataSearch: string) => {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const search = `?q=${dataSearch}`;
    const key = '&api_key=rIBXAUARqWUeHGOtglMKUSh4AZlxU5iZ';
    const limit = '&limit=50';
    const completeUrl = url + search + key + limit;

    const result = await fetch(completeUrl).then((response) => {
        return response.json();
    });
    return result;
};

export const getLocalData = async () => {
    const url = 'http://localhost:3500/userData';
    const result = await fetch(url).then((response) => {
        return response.json();
    });
    return result;
};

export const createLocalData = async (gifData: IGifsData) => {
    const url = 'http://localhost:3500/userData';
    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(gifData),
        headers: {
            'content-type': 'application/json',
        },
    }).then((response) => response.json());

    return result;
};

// export const deleteLocalData =
