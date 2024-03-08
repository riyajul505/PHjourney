import './Book.css'
export default function ShowBook({books}){
    console.log(books)
    return (
      <div className='book'>
        <h3>Books length: {books.length}</h3>
        {
          books.map(b => <li>Book name: {b.name}</li>)
        }
      </div>
    )
  }