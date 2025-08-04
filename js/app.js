document.addEventListener("alpine:init", () => {
  Alpine.data("libraryApp", () => ({
    search: "",
    showModal: false,
    selectedBook: {},
    activeCategory: "All",
    categories: ['All', 'Classic', 'Sci-Fi', 'Fantasy', 'Philosophy'],
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        cover: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        summary: "A story of wealth, love, and the American Dream.",
        notes: "Loved the symbolism of the green light."
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Sci-Fi",
        cover: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
        summary: "A dystopian novel exploring surveillance and totalitarianism.",
        notes: "Big Brother is watching."
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        cover: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
        summary: "A hobbit's adventurous quest to help dwarves reclaim their homeland.",
        notes: "Bilbo’s courage grows throughout the journey."
      },
      {
        title: "Meditations",
        author: "Marcus Aurelius",
        genre: "Philosophy",
        cover: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
        summary: "Personal writings by the Roman Emperor on Stoic philosophy.",
        notes: "Timeless wisdom for personal conduct."
      }
    ],

    init() {
      console.log("Library App Initialized");
    },

    filteredBooks() {
      let filtered = this.activeCategory === 'All'
        ? this.books
        : this.books.filter(b => b.genre === this.activeCategory);

      if (this.search.trim() !== "") {
        filtered = filtered.filter(b =>
          b.title.toLowerCase().includes(this.search.toLowerCase()) ||
          b.author.toLowerCase().includes(this.search.toLowerCase())
        );
      }
      return filtered;
    },

    openBook(book) {
      this.selectedBook = book;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    toggleDarkMode() {
      document.documentElement.classList.toggle("dark");
    }
  }));
});