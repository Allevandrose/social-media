<template>
  <div class="users-list">
    <h2>Users</h2>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">
        <h3>{{ user.name }}</h3>
        <p>@{{ user.username }}</p>
        <div class="user-info">
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Phone:</strong> {{ user.phone }}</p>
          <p><strong>Website:</strong> <a :href="`http://${user.website}`" target="_blank">{{ user.website }}</a></p>
        </div>
      </li>
    </ul>
    <p v-else>No users available.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        this.users = await response.json();
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
.users-list {
  padding: 1em;
}

.users-list ul {
  list-style-type: none;
  padding: 0;
}

.users-list li {
  background-color: #ffffff;
  margin-bottom: 1em;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.user-info {
  font-size: 14px;
  color: #555;
}
</style>
