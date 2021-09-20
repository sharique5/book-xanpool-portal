import { get } from './Fetchers/Fetchers';

const baseUrl: string = "http://localhost:8085"

export const getBooks = async () => {
    const temp = await get<ApiDataType>(baseUrl + "/books");
    return temp
}

export const getBookById = async (bookId: string) => {
    const book = await get<BookApiDataType>(baseUrl + "/book/" + bookId);
    return book
}