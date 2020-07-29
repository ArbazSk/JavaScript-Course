// Object Oreinted Project

// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}

// Add Book to List
UI.prototype.addBookToList = function(book){
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
UI.prototype.showAlert = function(msg, className){
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
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
// clear fields 
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Store Constructor -- Local Storage
function Store(){}
// Get Books 
Store.prototype.getBooks = function(){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    }else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
}

// Display Books from LS
Storage.prototype.displayBooks = function(){
    const books = Store.prototype.getBooks();
    console.log('inside Display');
    console.log(books);
    

    books.forEach(function(book){
        const ui = new UI;

        // Add Book to UI
        ui.addBookToList(book);
    });
}

// Add Book to LS
Store.prototype.addBook = function(book){
    const books = Store.prototype.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));   
}

// Remove book from LS
Store.prototype.removeBook = function(isbn){
    const books = Store.prototype.getBooks();

    books.forEach(function(book, index){
        if(book.isbn === isbn){
            books.splice(index, 1);
        }
    });
    localStorage.setItem('books', JSON.stringify(books));

}


// DOM Load Event Store.prototype.displayBooks
document.addEventListener('DOMContentLoaded',Store.prototype.displayBooks);

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
        const store = new Store();
        store.addBook(book);

        // Show Success 
        ui.showAlert('Book Added!', 'sucess');

        // Clear fields
        ui.clearFields();

    }
    
    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    e.preventDefault();

    const ui = new UI();

    ui.deleteBook(e.target);

    // Remove from LS
    const store = new Store();
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);

    ui.showAlert('Book Remover!', 'success');  
});