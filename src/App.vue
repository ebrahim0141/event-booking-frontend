<template>
  <div class="container py-3">

    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import Footer from "@/views/Footer.vue";
import Navbar from "@/views/Navbar.vue";
</script>

<style>

</style>
