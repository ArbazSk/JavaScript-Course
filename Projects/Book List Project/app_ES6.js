class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    // Add Book to List
    addBookToList(book){
        const list = document.getElementById('book-list');
        // create tr element
        const row = document.createElement('tr');
        // insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

    list.appendChild(row);
    }

    // Show Alerts
    showAlert(msg, className){
        // Create div
        const div = document.createElement('div');
        // Add Classess
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(msg));
        // get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        // Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 2000);

    }

    // Delete Book
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }

    }

    // clear fields
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }
}

// Local Storage class
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks(){
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;

            // Add Book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }

    static removeBook(isbn){
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded',Store.displayBooks);

// Event Listener for add
document.getElementById('book-form').addEventListener('submit',function(e){
    // get form values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value ; 

    const book = new Book(title, author, isbn);

    const ui = new UI();

    // validate
    if(title === '' || author === '' || isbn === ''){
        
        ui.showAlert('please fill in all fields', 'error'); 
    }else {
        // Add Book to list
        ui.addBookToList(book);

        // Add to LS
        Store.addBook(book);

        // Show Success 
        ui.showAlert('Book Added!', 'success');

        // Clear fields
        ui.clearFields();

    }
    
    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    e.preventDefault();

    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    // Remove from LS
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Remover!', 'success');  
});