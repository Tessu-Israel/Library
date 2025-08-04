document.addEventListener('alpine:init', () => {
  Alpine.data('libraryApp', () => ({
    search: '',
    showModal: false,
    selectedBook: {},
    books: [
      { 
        title: 'The Great Gatsby', 
        author: 'F. Scott Fitzgerald', 
        cover: 'https://covers.openlibrary.org/b/id/8228691-L.jpg', 
        summary: 'A story of wealth, love, and the American Dream during the Jazz Age.', 
        notes: 'Loved the symbolism of the green light.' 
      },
      { 
        title: 'Pride and Prejudice', 
        author: 'Jane Austen', 
        cover: 'https://covers.openlibrary.org/b/id/10582845-L.jpg', 
        summary: 'A romantic classic exploring manners, morality, and marriage in 19th-century England.', 
        notes: 'Elizabeth Bennet is a timeless character.' 
      },
      { 
        title: '1984', 
        author: 'George Orwell', 
        cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg', 
        summary: 'A dystopian vision of a totalitarian regime that watches everything.', 
        notes: 'Scarily relevant to modern times.' 
      }
    ],
    filteredBooks() {
      return this.books.filter(b => b.title.toLowerCase().includes(this.search.toLowerCase()));
    },
    openBook(book) {
      this.selectedBook = book;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }))
})

toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
},
init() {
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
  }
}