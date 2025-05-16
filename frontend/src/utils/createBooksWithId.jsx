import { v4 as uuid } from 'uuid';

const createBooksWithId = (book) =>{
    return{
        ...book,
        isFavorite: false,
        id: uuid()
    }
}

export default createBooksWithId;