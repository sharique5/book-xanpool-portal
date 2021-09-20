import React from 'react'
import { Redirect } from 'react-router-dom';
import './style.scss'

interface ListState {
    selectedBookId?: string;
}

class BookList extends React.Component<BooksProps, ListState> {
    state: ListState = {
        selectedBookId: ''
    };    
    
    setSelectedBook = (id:string) => {
        this.setState({ selectedBookId: id })
    }

    render() {

        if (this.state.selectedBookId) {
            return <Redirect push to={"/" + this.state.selectedBookId}></Redirect>
        }

        const { books } = this.props
        return (
            <section className="book-list-component" data-testid="book-list">
                <div className="row">
                    {
                        books.map((book: IBook) => (
                            <div className="col" 
                                key={book._id} 
                                data-testid={book._id}
                                onClick={() => this.setSelectedBook(book._id)}
                                title={book.title}
                            >
                                <span>{book.title}</span>
                            </div>
                        ))
                    }    
                </div>
            </section>
        )
    }
}

export default BookList