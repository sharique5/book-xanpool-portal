import React from 'react'
import { getBooks } from '../API'
import BookList from '../Components/BookList';

class BookCatalog extends React.Component<{}, {}> {
    state: ApiDataType = {
        message: "",
        status: -1,
        books: []
    };

    componentDidMount() {
        getBooks().then(res => {
            this.setState(res)
        })
    }

    render() {
        return <BookList books = {this.state.books}></BookList>;
    }
};

export default BookCatalog