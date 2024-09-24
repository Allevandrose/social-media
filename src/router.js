import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import UsersList from "./components/UsersList.vue";
import CommentsList from "./components/CommentsList.vue";
import PostsList from "./components/PostsList.vue";
import AlbumsList from "./components/AlbumsList.vue"; // New import

const routes = [
  { path: "/", component: HomePage },
  { path: "/users", component: UsersList },
  { path: "/comments", component: CommentsList },
  { path: "/posts", component: PostsList },
  { path: "/albums", component: AlbumsList }, // New route for albums
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
