// Browse Page Functionality
class BrowseManager {
    constructor() {
        this.books = [];
        this.filteredBooks = [];
        this.currentPage = 1;
        this.booksPerPage = 12;
        this.currentView = 'grid';
        this.filters = {
            search: '',
            genres: [],
            minRating: 0,
            yearFrom: null,
            yearTo: null,
            language: 'all',
            sortBy: 'popularity'
        };

        this.init();
    }

    init() {
        this.loadBooks();
        this.setupEventListeners();
        this.setupFilters();
    }

    // Sample book data - in real app, this would come from an API
    loadBooks() {
        this.books = [
            {
                id: 1,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                cover: "https://covers.openlibrary.org/b/id/8259447-L.jpg",
                rating: 4.5,
                year: 1925,
                genre: "fiction",
                language: "english",
                description: "A classic novel of the Jazz Age, exploring themes of idealism, resistance to change, and excess."
            },
            {
                id: 2,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                cover: "https://covers.openlibrary.org/b/id/13018254-L.jpg",
                rating: 5.0,
                year: 1960,
                genre: "fiction",
                language: "english",
                description: "A gripping tale of racial injustice and childhood innocence in the American South."
            },
            {
                id: 3,
                title: "1984",
                author: "George Orwell",
                cover: "https://covers.openlibrary.org/b/id/8264454-L.jpg",
                rating: 4.8,
                year: 1949,
                genre: "scifi",
                language: "english",
                description: "A dystopian social science fiction novel about totalitarian control."
            },
            {
                id: 4,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                cover: "https://covers.openlibrary.org/b/id/8222294-L.jpg",
                rating: 4.6,
                year: 1813,
                genre: "romance",
                language: "english",
                description: "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet."
            },
            {
                id: 5,
                title: "The Hobbit",
                author: "J.R.R. Tolkien",
                cover: "https://covers.openlibrary.org/b/id/8260717-L.jpg",
                rating: 4.9,
                year: 1937,
                genre: "fantasy",
                language: "english",
                description: "A fantasy novel about the adventures of hobbit Bilbo Baggins."
            },
            {
                id: 6,
                title: "Brave New World",
                author: "Aldous Huxley",
                cover: "https://covers.openlibrary.org/b/id/8260718-L.jpg",
                rating: 4.4,
                year: 1932,
                genre: "scifi",
                language: "english",
                description: "A dystopian novel about a futuristic society controlled by technology."
            },
            {
                id: 7,
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                cover: "https://covers.openlibrary.org/b/id/8260719-L.jpg",
                rating: 4.7,
                year: 1951,
                genre: "fiction",
                language: "english",
                description: "A controversial novel about teenage rebellion and alienation."
            },
            {
                id: 8,
                title: "Lord of the Flies",
                author: "William Golding",
                cover: "https://covers.openlibrary.org/b/id/8260720-L.jpg",
                rating: 4.2,
                year: 1954,
                genre: "fiction",
                language: "english",
                description: "A novel about a group of British boys stranded on an uninhabited island."
            },
            {
                id: 9,
                title: "The Alchemist",
                author: "Paulo Coelho",
                cover: "https://covers.openlibrary.org/b/id/8260721-L.jpg",
                rating: 4.5,
                year: 1988,
                genre: "fiction",
                language: "portuguese",
                description: "A philosophical book about a shepherd's journey to find treasure."
            },
            {
                id: 10,
                title: "The Da Vinci Code",
                author: "Dan Brown",
                cover: "https://covers.openlibrary.org/b/id/8260722-L.jpg",
                rating: 4.3,
                year: 2003,
                genre: "mystery",
                language: "english",
                description: "A mystery thriller novel about a conspiracy within the Catholic Church."
            },
            {
                id: 11,
                title: "The Kite Runner",
                author: "Khaled Hosseini",
                cover: "https://covers.openlibrary.org/b/id/8260723-L.jpg",
                rating: 4.6,
                year: 2003,
                genre: "fiction",
                language: "english",
                description: "A powerful story of friendship, betrayal, and redemption in Afghanistan."
            },
            {
                id: 12,
                title: "The Hunger Games",
                author: "Suzanne Collins",
                cover: "https://covers.openlibrary.org/b/id/8260724-L.jpg",
                rating: 4.5,
                year: 2008,
                genre: "scifi",
                language: "english",
                description: "A dystopian novel about a televised death match in a post-apocalyptic nation."
            },
            {
                id: 13,
                title: "The Shining",
                author: "Stephen King",
                cover: "https://covers.openlibrary.org/b/id/8260725-L.jpg",
                rating: 4.7,
                year: 1977,
                genre: "thriller",
                language: "english",
                description: "A horror novel about a family's terrifying experiences in an isolated hotel."
            },
            {
                id: 14,
                title: "Gone Girl",
                author: "Gillian Flynn",
                cover: "https://covers.openlibrary.org/b/id/8260726-L.jpg",
                rating: 4.2,
                year: 2012,
                genre: "mystery",
                language: "english",
                description: "A psychological thriller about a marriage gone terribly wrong."
            },
            {
                id: 15,
                title: "Steve Jobs",
                author: "Walter Isaacson",
                cover: "https://covers.openlibrary.org/b/id/8260727-L.jpg",
                rating: 4.4,
                year: 2011,
                genre: "biography",
                language: "english",
                description: "The exclusive biography of Apple co-founder Steve Jobs."
            },
            {
                id: 16,
                title: "Sapiens",
                author: "Yuval Noah Harari",
                cover: "https://covers.openlibrary.org/b/id/8260728-L.jpg",
                rating: 4.6,
                year: 2011,
                genre: "history",
                language: "english",
                description: "A brief history of humankind from the Stone Age to the present."
            },
            {
                id: 17,
                title: "Dune",
                author: "Frank Herbert",
                cover: "https://covers.openlibrary.org/b/id/8260729-L.jpg",
                rating: 4.8,
                year: 1965,
                genre: "scifi",
                language: "english",
                description: "A science fiction novel set in the distant future amidst a feudal interstellar society."
            },
            {
                id: 18,
                title: "The Girl on the Train",
                author: "Paula Hawkins",
                cover: "https://covers.openlibrary.org/b/id/8260730-L.jpg",
                rating: 4.1,
                year: 2015,
                genre: "thriller",
                language: "english",
                description: "A psychological thriller about a woman who becomes entangled in a missing persons investigation."
            },
            {
                id: 19,
                title: "Educated",
                author: "Tara Westover",
                cover: "https://covers.openlibrary.org/b/id/8260731-L.jpg",
                rating: 4.7,
                year: 2018,
                genre: "biography",
                language: "english",
                description: "A memoir about a young woman who grows up in a survivalist family and eventually goes to college."
            },
            {
                id: 20,
                title: "The Night Circus",
                author: "Erin Morgenstern",
                cover: "https://covers.openlibrary.org/b/id/8260732-L.jpg",
                rating: 4.3,
                year: 2011,
                genre: "fantasy",
                language: "english",
                description: "A fantasy novel about a magical competition between two illusionists."
            },
            {
                id: 21,
                title: "The Silent Patient",
                author: "Alex Michaelides",
                cover: "https://covers.openlibrary.org/b/id/8260733-L.jpg",
                rating: 4.5,
                year: 2019,
                genre: "mystery",
                language: "english",
                description: "A psychological thriller about a woman who shoots her husband and then stops speaking."
            },
            {
                id: 22,
                title: "Where the Crawdads Sing",
                author: "Delia Owens",
                cover: "https://covers.openlibrary.org/b/id/8260734-L.jpg",
                rating: 4.7,
                year: 2018,
                genre: "fiction",
                language: "english",
                description: "A novel about an abandoned girl who raises herself in the marshes of North Carolina."
            },
            {
                id: 23,
                title: "The Seven Husbands of Evelyn Hugo",
                author: "Taylor Jenkins Reid",
                cover: "https://covers.openlibrary.org/b/id/8260735-L.jpg",
                rating: 4.6,
                year: 2017,
                genre: "romance",
                language: "english",
                description: "A novel about a reclusive Hollywood icon and her seven marriages."
            },
            {
                id: 24,
                title: "Atomic Habits",
                author: "James Clear",
                cover: "https://covers.openlibrary.org/b/id/8260736-L.jpg",
                rating: 4.8,
                year: 2018,
                genre: "biography",
                language: "english",
                description: "A guide to building good habits and breaking bad ones."
            }
        ];

        this.applyFilters();
    }

    setupEventListeners() {
        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setView(e.target.closest('.view-btn').dataset.view);
            });
        });

        // Sort select
        document.getElementById('sortSelect').addEventListener('change', (e) => {
            this.filters.sortBy = e.target.value;
            this.applyFilters();
        });

        // Search filter
        document.getElementById('searchFilter').addEventListener('input', (e) => {
            this.filters.search = e.target.value.toLowerCase();
            this.debounce(() => this.applyFilters(), 300);
        });

        // Genre checkboxes
        document.querySelectorAll('.checkbox input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateGenreFilters();
            });
        });

        // Rating filter
        document.querySelectorAll('input[name="rating"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.filters.minRating = parseInt(e.target.value);
                this.applyFilters();
            });
        });

        // Year filters
        document.getElementById('yearFrom').addEventListener('input', (e) => {
            this.filters.yearFrom = e.target.value ? parseInt(e.target.value) : null;
            this.debounce(() => this.applyFilters(), 300);
        });

        document.getElementById('yearTo').addEventListener('input', (e) => {
            this.filters.yearTo = e.target.value ? parseInt(e.target.value) : null;
            this.debounce(() => this.applyFilters(), 300);
        });

        // Language filter
        document.getElementById('languageSelect').addEventListener('change', (e) => {
            this.filters.language = e.target.value;
            this.applyFilters();
        });

        // Pagination
        document.getElementById('prevPage').addEventListener('click', () => {
            this.previousPage();
        });

        document.getElementById('nextPage').addEventListener('click', () => {
            this.nextPage();
        });

        // Filter toggle for mobile
        document.getElementById('filterToggle').addEventListener('click', () => {
            this.toggleFilters();
        });
    }

    setupFilters() {
        // Initialize genre filters to include all checked boxes
        this.updateGenreFilters();
    }

    updateGenreFilters() {
        this.filters.genres = Array.from(document.querySelectorAll('.checkbox input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);
    }

    setView(view) {
        this.currentView = view;
        
        // Update active view button
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });

        // Update books container class
        const booksContainer = document.getElementById('booksContainer');
        booksContainer.className = `books-container ${view}-view`;
    }

    applyFilters() {
        this.showLoading();
        
        // Simulate API delay
        setTimeout(() => {
            this.filteredBooks = this.books.filter(book => {
                // Search filter
                if (this.filters.search) {
                    const searchTerm = this.filters.search.toLowerCase();
                    if (!book.title.toLowerCase().includes(searchTerm) && 
                        !book.author.toLowerCase().includes(searchTerm)) {
                        return false;
                    }
                }

                // Genre filter
                if (this.filters.genres.length > 0 && !this.filters.genres.includes(book.genre)) {
                    return false;
                }

                // Rating filter
                if (book.rating < this.filters.minRating) {
                    return false;
                }

                // Year filter
                if (this.filters.yearFrom && book.year < this.filters.yearFrom) {
                    return false;
                }
                if (this.filters.yearTo && book.year > this.filters.yearTo) {
                    return false;
                }

                // Language filter
                if (this.filters.language !== 'all' && book.language !== this.filters.language) {
                    return false;
                }

                return true;
            });

            // Sort books
            this.sortBooks();

            this.currentPage = 1;
            this.updateDisplay();
            this.hideLoading();
        }, 500);
    }

    sortBooks() {
        switch (this.filters.sortBy) {
            case 'newest':
                this.filteredBooks.sort((a, b) => b.year - a.year);
                break;
            case 'oldest':
                this.filteredBooks.sort((a, b) => a.year - b.year);
                break;
            case 'rating':
                this.filteredBooks.sort((a, b) => b.rating - a.rating);
                break;
            case 'title':
                this.filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'author':
                this.filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
                break;
            case 'popularity':
            default:
                // Default sorting - you could implement popularity based on views, downloads, etc.
                this.filteredBooks.sort((a, b) => b.rating - a.rating);
                break;
        }
    }

    updateDisplay() {
        this.renderBooks();
        this.updatePagination();
        this.updateResultsCount();
    }

    renderBooks() {
        const booksContainer = document.getElementById('booksContainer');
        const startIndex = (this.currentPage - 1) * this.booksPerPage;
        const endIndex = startIndex + this.booksPerPage;
        const booksToShow = this.filteredBooks.slice(startIndex, endIndex);

        if (booksToShow.length === 0) {
            this.showNoResults();
            return;
        }

        this.hideNoResults();

        booksContainer.innerHTML = booksToShow.map(book => `
            <div class="book-card" data-book-id="${book.id}">
                <div class="book-cover">
                    <img src="${book.cover}" alt="${book.title} Cover" onerror="this.src='https://via.placeholder.com/200x300/3498db/ffffff?text=No+Cover'">
                    <div class="book-overlay">
                        <button class="btn-icon" onclick="addToFavorites(${book.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="btn-icon" onclick="addToBookmark(${book.id})">
                            <i class="fas fa-bookmark"></i>
                        </button>
                        <button class="btn-read" onclick="readBook(${book.id})">
                            Read Now
                        </button>
                    </div>
                </div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p class="author">${book.author}</p>
                    <div class="rating">
                        <div class="stars">
                            ${this.renderStars(book.rating)}
                        </div>
                        <span class="rating-value">${book.rating}</span>
                    </div>
                    <p class="book-year">${book.year}</p>
                    ${book.description ? `<p class="book-description">${book.description}</p>` : ''}
                </div>
            </div>
        `).join('');
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }

        return stars;
    }

    updatePagination() {
        const totalPages = Math.ceil(this.filteredBooks.length / this.booksPerPage);
        const paginationNumbers = document.getElementById('paginationNumbers');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        // Update previous/next buttons
        prevBtn.classList.toggle('disabled', this.currentPage === 1);
        nextBtn.classList.toggle('disabled', this.currentPage === totalPages || totalPages === 0);

        // Generate pagination numbers
        let paginationHTML = '';
        const maxVisiblePages = 5;
        let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <button class="pagination-number ${i === this.currentPage ? 'active' : ''}" 
                        onclick="browseManager.goToPage(${i})">
                    ${i}
                </button>
            `;
        }

        paginationNumbers.innerHTML = paginationHTML;
    }

    updateResultsCount() {
        const total = this.filteredBooks.length;
        const start = Math.min((this.currentPage - 1) * this.booksPerPage + 1, total);
        const end = Math.min(this.currentPage * this.booksPerPage, total);
        
        document.getElementById('resultsCount').textContent = 
            total === 0 ? '0' : `${start}-${end} of ${total}`;
    }

    goToPage(page) {
        this.currentPage = page;
        this.renderBooks();
        this.updatePagination();
        this.updateResultsCount();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.goToPage(this.currentPage - 1);
        }
    }

    nextPage() {
        const totalPages = Math.ceil(this.filteredBooks.length / this.booksPerPage);
        if (this.currentPage < totalPages) {
            this.goToPage(this.currentPage + 1);
        }
    }

    showLoading() {
        document.getElementById('loadingState').style.display = 'block';
        document.getElementById('booksContainer').style.opacity = '0.5';
    }

    hideLoading() {
        document.getElementById('loadingState').style.display = 'none';
        document.getElementById('booksContainer').style.opacity = '1';
    }

    showNoResults() {
        document.getElementById('noResults').style.display = 'block';
        document.getElementById('booksContainer').style.display = 'none';
        document.getElementById('loadingState').style.display = 'none';
    }

    hideNoResults() {
        document.getElementById('noResults').style.display = 'none';
        document.getElementById('booksContainer').style.display = 'block';
    }

    toggleFilters() {
        const sidebar = document.getElementById('filtersSidebar');
        sidebar.classList.toggle('active');
    }

    debounce(func, wait) {
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(func, wait);
    }
}

// Global functions for button actions
function performSearch() {
    const searchTerm = document.getElementById('globalSearch').value;
    document.getElementById('searchFilter').value = searchTerm;
    browseManager.filters.search = searchTerm.toLowerCase();
    browseManager.applyFilters();
}

function clearAllFilters() {
    // Clear search
    document.getElementById('searchFilter').value = '';
    document.getElementById('globalSearch').value = '';
    
    // Clear genre checkboxes
    document.querySelectorAll('.checkbox input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Clear rating
    document.getElementById('rating0').checked = true;
    
    // Clear year filters
    document.getElementById('yearFrom').value = '';
    document.getElementById('yearTo').value = '';
    
    // Reset language
    document.getElementById('languageSelect').value = 'all';
    
    // Reset sort
    document.getElementById('sortSelect').value = 'popularity';
    
    // Update filters and apply
    browseManager.filters = {
        search: '',
        genres: [],
        minRating: 0,
        yearFrom: null,
        yearTo: null,
        language: 'all',
        sortBy: 'popularity'
    };
    
    browseManager.applyFilters();
}

function addToFavorites(bookId) {
    alert(`Added book ${bookId} to favorites!`);
    // In a real app, you would make an API call here
}

function addToBookmark(bookId) {
    alert(`Bookmarked book ${bookId}!`);
    // In a real app, you would make an API call here
}

function readBook(bookId) {
    alert(`Opening book ${bookId} for reading...`);
    // In a real app, you would navigate to the reading page
}

// Initialize the browse manager when the page loads
let browseManager;
document.addEventListener('DOMContentLoaded', () => {
    browseManager = new BrowseManager();
});