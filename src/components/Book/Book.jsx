import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <Link to={`books/${bookId}`}>
            <div className="card border-2 w-96 p-6 shadow-xl">
                <figure className='bg-gray-200 border-2 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[168px]'
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{author}</h2>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;