import React, {createContext, useState} from "react";


export const CustomContext = createContext();

export const Context = (props) => {
   const [books, setBooks] = useState([
    {id: 1, title: 'JS'},
    {id: 2, title: 'React'},
    {id: 3, title: 'NodeJS'},
   ]); 


const addBook = (book) => {
    setBooks([book, ...books]) 
    }

const removeBook = (id) =>  {
    setBooks(books.filter(book => book.id !==id )) 
}   

return <CustomContext.Provider>
    {props.children}
</CustomContext.Provider>

}