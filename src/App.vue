<template>
  <div id="app">
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4 shadow-navbar sticky-top">
      <router-link to="/" class="navbar-brand d-flex align-items-center text-center">
        <div class="icon p-2 me-2">
          <!-- Icon placeholder -->
        </div>
        <h1 class="m-0 text-primary">Social-App</h1>
      </router-link>

      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-item nav-link" active-class="active">Home</router-link>
          <router-link to="/posts" class="nav-item nav-link" active-class="active">Posts</router-link>
          <router-link to="/comments" class="nav-item nav-link" active-class="active">Comments</router-link>
          <router-link to="/users" class="nav-item nav-link" active-class="active">Users</router-link>
          <router-link to="/albums" class="nav-item nav-link" active-class="active">Albums</router-link>
        </div>
      </div>
    </nav>
    <!-- Navbar End -->

    <!-- Router View -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Navbar with box shadow */
.navbar {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

/* Sticky top */
.sticky-top {
  position: sticky;
  top: 0;
  z-index: 1030; /* Ensure it stays on top of other content */
}

.navbar-nav .nav-link.active {
  font-weight: bold;
  color: #3498db;
}

.navbar-nav .nav-link {
  padding: 10px 15px;
}

.btn-primary {
  background-color: #3498db;
  border-color: #3498db;
}
</style>
