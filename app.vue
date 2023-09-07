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

useSeoMeta ({
  title: "Yujie Han's blog",
  ogTitle: "Yujie Han's blog",
  description: "Love open source, Love open Internet",
  ogDescription: "Love open source, Love open Internet",
  ogImage: "/favicon.png",
  ogSiteName: "YuJie Han's blog",
  twitterCard: "summary_large_image"
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