import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../Utility/AddToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList,setReadList] = useState([])

    const allBooks = useLoaderData();
    
    useEffect(()=>{
        const readBooks = getStoreReadList();
        const readBooksId = readBooks.map(id => parseInt(id))

        const bookReadList = allBooks.filter(book => readBooksId.includes(book.bookId))
        setReadList(bookReadList);
    },[])

    return (
        <div className='text-center space-y-5'>
            
            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2 className='text-4xl font-bold my-10'>Listed Books:{readList.length}</h2>
      <div className='grid grid-cols-3 gap-4 my-10'>
        {
            readList.map(book =><Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;