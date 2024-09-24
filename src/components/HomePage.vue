<template>
  <div class="home-page">
    <h1>Welcome to Social-App</h1>
    <p>Your ultimate conversation solution.</p>
    <div class="content">
      <h2>About Social-App</h2>
      <p>
        Social-App connects you with friends and family, allowing you to share 
        moments, engage in meaningful conversations, and stay updated on what 
        matters most to you. Our user-friendly interface and robust features 
        make it easy to navigate and enjoy your social experience.
      </p>
      <p>
        Whether you're posting updates, sharing photos, or commenting on your 
        friends' posts, Social-App makes communication simple and fun. Join us 
        today and become a part of our growing community!
      </p>
      <h2>Features:</h2>
      <ul>
        <li>Connect with friends and family</li>
        <li>Share photos and updates</li>
        <li>Engage in discussions and comments</li>
        <li>Discover new content and trends</li>
        <li>User-friendly interface</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.home-page h1 {
  font-size: 28px;
  color: #3498db;
  margin-bottom: 10px;
}

.home-page p {
  font-size: 18px;
  color: #555;
  margin: 10px 0;
}

.content {
  text-align: left;
  margin: 20px auto;
  max-width: 600px;
}

.content h2 {
  font-size: 22px;
  color: #2c3e50;
  margin-top: 20px;
}

.content ul {
  list-style-type: disc;
  margin-left: 20px;
  color: #555;
}

.content li {
  margin: 8px 0;
  font-size: 16px;
}
</style>
