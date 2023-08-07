<script setup lang="ts">
</script>
<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      Your Logo Here!
    </router-link>
    <ul class="nav-links">
      <li class="nav-item"><router-link to="/" class="nav-links">Home</router-link></li>
      <li class="nav-item"><router-link to="/About" class="nav-link">About</router-link></li>
    </ul>
  </nav>
    <router-view />
</template>