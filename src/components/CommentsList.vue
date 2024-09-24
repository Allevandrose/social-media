<template>
  <div class="comments-list">
    <h2>Comments</h2>
    <ul v-if="paginatedComments.length">
      <li v-for="comment in paginatedComments" :key="comment.id">
        <h3>{{ comment.name }}</h3>
        <p>{{ comment.body }}</p>
        <small>— {{ comment.email }}</small>
      </li>
    </ul>
    <p v-else>No comments available.</p>

    <!-- Pagination Controls -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    paginatedComments() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.comments.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.comments.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.comments = await response.json();
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.comments-list {
  padding: 1em;
}

.comments-list ul {
  list-style-type: none;
  padding: 0;
}

.comments-list li {
  background-color: #ffffff;
  margin-bottom: 1em;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.comments-list h3 {
  margin: 0 0 5px 0;
  font-size: 18px;
}

.comments-list p {
  font-size: 16px;
  color: #444;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
