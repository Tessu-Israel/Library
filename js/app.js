function libraryApp() {
  return {
    books: [],
    categories: ["All", "Classic", "Sci-Fi", "Fantasy", "Philosophy"],
    activeCategory: "All",
    search: "",
    showModal: false,
    selectedBook: {},

    async init() {
      try {
        const res = await fetch('data/books.json');
        this.books = await res.json();
      } catch (err) {
        console.error("Failed to load books:", err);
      }
    },

    filteredBooks() {
      return this.books.filter(book => {
        const matchesCategory =
          this.activeCategory === "All" || book.genre === this.activeCategory;
        const matchesSearch =
          book.title.toLowerCase().includes(this.search.toLowerCase()) ||
          book.author.toLowerCase().includes(this.search.toLowerCase());
        return matchesCategory && matchesSearch;
      });
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
  };
}