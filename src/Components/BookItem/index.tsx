import React from 'react'
import './style.scss'

class BookItem extends React.Component<BookProps, {}> {
    render() {
        const { title, year, description } = this.props.book
        return (
            <section className="book-item-component" data-testid="book-item">
                <div className="label">
                    <span>Title</span>
                    <p className="text-bold" data-testid="title">{title}</p>
                </div>
                <div className="label">
                    <span>Published in</span>
                    <p className="badge" data-testid="year">{year}</p>
                </div>
                <div className="label">
                    <span>Description</span>
                    <p data-testid="description">{description}</p>
                </div>
            </section>
        )
    }
}

export default BookItem