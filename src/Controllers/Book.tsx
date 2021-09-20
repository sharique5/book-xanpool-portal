import React from 'react'
import { RouteComponentProps } from "react-router-dom";
import { getBookById } from '../API'
import BookItem from '../Components/BookItem';

class Book extends React.Component<RouteComponentProps<BookId>, {}> {
    state: BookApiDataType = {
        message: "",
        status: -1,
        book: {
            _id: '',
            title: '',
            description: '',
            year: -1
        }
    };

    componentDidMount() {
        const { id } = this.props.match.params
        getBookById(id).then(res => {
            this.setState(res)
        })
    }

    render() {
        return (
            <div>
                <BookItem book = {this.state.book}></BookItem>
            </div>
        );
    }
};

export default Book