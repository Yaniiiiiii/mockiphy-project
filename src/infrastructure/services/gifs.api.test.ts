import { getDataTrending, getGifById, getSearchData } from './gifs.api';

describe('Given the gifs api component', () => {
    describe('When we instance it', () => {
        test(`Then if I use service.getDataTrending() 
            it should return a Promise of a string`, async () => {
            global.fetch = jest
                .fn()
                .mockResolvedValue({ json: jest.fn().mockResolvedValue({}) });
            const result = await getDataTrending(0);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
        test(`Then if I use service.getSearchData() 
            it should return a Promise of a string`, async () => {
            global.fetch = jest
                .fn()
                .mockResolvedValue({ json: jest.fn().mockResolvedValue({}) });
            const result = await getSearchData(`test`);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });

        test('Then if I use service.getGifById() it should return a Promise of a string', async () => {
            global.fetch = jest
                .fn()
                .mockResolvedValue({ json: jest.fn().mockResolvedValue({}) });
            const result = await getGifById(`test`);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
});
