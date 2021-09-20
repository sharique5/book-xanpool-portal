interface IBook {
    _id: string
    title: string
    description: string
    year: number
}

interface BookProps {
    book: IBook
}

interface BooksProps {
    books: IBook[]
}

type ApiDataType = {
    message: string
    status: number
    books: IBook[]
}

type BookApiDataType = {
    message: string
    status: number
    book: IBook
}

type BookId = {
    id: string
}