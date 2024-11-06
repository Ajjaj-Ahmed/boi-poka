import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../Utility/AddToDb";


const BookDetails = () => {
    const { bookId } = useParams()
    const id = parseInt(bookId)
    const data = useLoaderData()

    const book = data.find(singleBook => singleBook.bookId === id)

    console.log(book)

    const { bookName, author, image, review, rating, category, tags, publisher, yearOfPublishing, totalPages } = book;

    const handleMarkAsRead =(id)=>{
        addToStoreReadList(id);
    }

    return (
        <div className="flex gap-5 border-2 rounded-lg my-10 p-5">
            <div className="w-1/2">
                <img className="h-full w-full rounded-xl" src={image} alt="" />
            </div>
            <div className="w-1/2 space-y-3 flex items-start flex-col">
                <div>
                    <h2 className="card-title pb-2">{bookName}</h2>
                    <p>By : {author}</p>
                </div>
                <div className="divider"></div>

                <button>{category}</button>

                <div className="divider"></div>
                <div className="flex-grow">
                    <p>{review}</p>
                </div>
                <div className='flex gap-3 pb-4'>
                    {
                        tags.map((tag, idx) => <button key={idx} className='btn btn-sm text-green-500'>{tag}</button>)
                    }
                </div>

                <div className="divider"></div>

                <div className="space-y-2">
                    <p>Number of Pages: {totalPages}</p>
                    <p>Year of Published: {yearOfPublishing}</p>
                    <p>Publisher : {publisher}</p>
                    <p>Ratings : {rating}</p>
                </div>

                <div className="divider"></div>

                <div className="flex gap-3 items-center">
                    <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline">Read</button>
                    <button className="btn btn-outline">Wish-List</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;