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

    openBook(book, event) {
  this.selectedBook = book;

  // Find clicked card element
  const cardEl = event.currentTarget.querySelector(".book-card-inner");

  // Show modal so GSAP can target it
  this.showModal = true;

  // Wait a tick for modal DOM to render
  this.$nextTick(() => {
    const modalImageContainer = document.querySelector(".modal-cover-container");

    if (cardEl && modalImageContainer) {
      // Morph animation
      const state = Flip.getState(cardEl);
      modalImageContainer.appendChild(cardEl);
      Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true });
    }
  });
},
    closeModal() {
  const modalImage = document.querySelector(".modal-cover-container .book-card-inner");
  const originalCardSpot = document.querySelector(`.book-card[data-title="${this.selectedBook.title}"]`);

  if (modalImage && originalCardSpot) {
    const state = Flip.getState(modalImage);
    originalCardSpot.appendChild(modalImage);
    Flip.from(state, { duration: 0.6, ease: "power2.inOut", absolute: true });
  }

  this.showModal = false;
},
    toggleDarkMode() {
      document.documentElement.classList.toggle("dark");
    }
  };
}