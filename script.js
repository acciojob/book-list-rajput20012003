
document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');
    const submitButton = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form submission

        // Get input values
        const title = titleInput.value;
        const author = authorInput.value;
        const isbn = isbnInput.value;

        // Validate input
        if (title.trim() === '' || author.trim() === '' || isbn.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Add book to table
        addBookToList(title, author, isbn);

        // Clear input fields
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    });

    function addBookToList(title, author, isbn) {
        // Create table row
        const row = document.createElement('tr');

        // Create table data cells
        const titleCell = document.createElement('td');
        titleCell.textContent = title;
        const authorCell = document.createElement('td');
        authorCell.textContent = author;
        const isbnCell = document.createElement('td');
        isbnCell.textContent = isbn;
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', function() {
            row.remove(); // Delete the

