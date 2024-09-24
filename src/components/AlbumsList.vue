<template>
  <div class="albums-list">
    <h2>Albums</h2>
    <ul v-if="paginatedAlbums.length">
      <li v-for="(album, index) in paginatedAlbums" :key="album.id">
        <h3>{{ (currentPage - 1) * itemsPerPage + index + 1 }}. {{ album.title }}</h3>
      </li>
    </ul>
    <p v-else>No albums available.</p>

    <div class="pagination" v-if="totalPages > 1">
      <button @click="prevPage" :disabled="currentPage === 1">&laquo; Prev</button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="{ active: currentPage === page }"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next &raquo;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.albums.length / this.itemsPerPage);
    },
    paginatedAlbums() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.albums.slice(start, end);
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/albums");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.albums = await response.json();
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.albums-list {
  padding: 1em;
  max-width: 600px;
  margin: auto;
}

.albums-list ul {
  list-style-type: none;
  padding: 0;
}

.albums-list li {
  border-bottom: 1px solid #ccc;
  margin-bottom: 1em;
  padding-bottom: 1em;
}

.albums-list h3 {
  margin: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1em;
}

.pagination button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 0.5em 1em;
  margin: 0 0.25em;
  cursor: pointer;
}

.pagination button.active {
  background-color: #007bff;
  color: white;
}

.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
</style>
