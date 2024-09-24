<template>
  <div class="albums-list">
    <h2>Albums</h2>
    <ul v-if="albums.length">
      <li v-for="(album, index) in albums" :key="album.id">
        <h3>{{ index + 1 }}. {{ album.title }}</h3>
      </li>
    </ul>
    <p v-else>No albums available.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: []
    };
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
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.albums-list {
  padding: 1em;
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
</style>
