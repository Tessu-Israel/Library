document.addEventListener("alpine:init", () => {
  Alpine.data("libraryApp", () => ({
    // =========================
    // Reactive Data
    // =========================
    search: "",
    showModal: false,
    selectedBook: {},
    activeCategory: "All",
    categories: ["All"], // Will be filled from JSON
    books: [],

    // =========================
    // Init App
    // =========================
    async init() {
      console.log("📚 High‑Class Library App Initializing...");
      await this.loadBooks();
      this.extractCategories();
      console.log("✅ Books loaded, categories ready.");
    },

    // =========================
    // Load Books from JSON
    // =========================
    async loadBooks() {
      try {
        const response = await fetch("data/books.json");
        if (!response.ok) throw new Error("Failed to fetch books.json");
        this.books = await response.json();
      } catch (error) {
        console.error("❌ Error loading books:", error);
        // Fallback data if JSON fails
        this.books = [
          {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            genre: "Classic",
            cover: "assets/covers/gatsby.jpg",
            summary: "A story of wealth, love, and the American Dream.",
            notes: "Loved the symbolism of the green light."
          },
          {
            title: "1984",
            author: "George Orwell",
            genre: "Sci-Fi",
            cover: "assets/covers/1984.jpg",
            summary: "A dystopian novel exploring surveillance and totalitarianism.",
            notes: "Big Brother is watching."
          }
        ];
      }
    },

    // =========================
    // Extract Unique Categories
    // =========================
    extractCategories() {
      const genres = new Set(this.books.map(book => book.genre));
      this.categories = ["All", ...Array.from(genres)];
    },

    // =========================
    // Filtered Books
    // =========================
    filteredBooks() {
      let filtered = this.activeCategory === "All"
        ? this.books
        : this.books.filter(b => b.genre === this.activeCategory);

      if (this.search.trim()) {
        filtered = filtered.filter(b =>
          b.title.toLowerCase().includes(this.search.toLowerCase()) ||
          b.author.toLowerCase().includes(this.search.toLowerCase())
        );
      }

      return filtered;
    },

    // =========================
    // Modal Controls
    // =========================
    openBook(book, event) {
      this.selectedBook = book;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },

    // =========================
    // Dark Mode Toggle
    // =========================
    toggleDarkMode() {
      document.documentElement.classList.toggle("dark");
    }
  }));
});