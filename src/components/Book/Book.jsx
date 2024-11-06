import React from 'react';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    const { bookId, bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing } = book
    return (
        <Link to={`books/${bookId}`}>
            <div className="card border-2 w-96 p-6 shadow-xl flex flex-col">
                <figure className='bg-gray-200 border-2 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[168px]'
                    />
                </figure>
                <div className='pt-5 flex-grow'>
                    <div className='flex gap-3 pb-4'>
                        {
                            tags.map((tag,idx)=><button key={idx} className='btn btn-sm text-green-500'>{tag}</button>)
                        }
                    </div>
                    <div >
                    <h2 className="card-title pb-2">{bookName}</h2>
                    <p>By : {author}</p>
                    </div>

                    <div className="divider"></div>
                    
                    <div className="card-actions justify-between">
                        <button>{category}</button>
                        <button className='flex items-center gap-2'>{rating} <CiStar /></button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;