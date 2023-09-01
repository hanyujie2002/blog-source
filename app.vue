<template>
  <div>
    <NuxtLayout class="layouts">
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'body'
  }
})
</script>

<style>
  body {
    margin: 0px;
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

  body::-webkit-scrollbar-thumb {
    background-color: black;
  }

  body::-webkit-scrollbar-track {
    background-color: white;
  }
</style>