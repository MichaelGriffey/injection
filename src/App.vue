<script setup lang="ts">
  import { provide, ref } from 'vue';
  import StatusUpdater from './models/StatusUpdater';
  import Status from './models/Status';

  let status = ref(Status.Init);
  let statusUpdater = new StatusUpdater(status);
  
  provide<StatusUpdater>('status', statusUpdater);
  
  function doSomething() {
    statusUpdater.updateStatus(Status.Processing);
    setTimeout(function() {
      statusUpdater.updateStatus(Status.Active);
    }, 5000);
  }

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
  <button @click="doSomething">Waste Time</button>{{ status }}
</template>