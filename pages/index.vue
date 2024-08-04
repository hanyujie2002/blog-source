<template>
  <main>
    <div id="icons">
        <i class="fa fa-github fa-fw" style="font-size:200px"></i>
        <i class="fa fa-envelope fa-fw" style="font-size:200px"></i>
        <i class="fa fa-lock fa-fw" style="font-size:200px"></i>
    </div>
  </main>
</template>

<script setup lang="ts">
    useHead({
        title: 'Yujie Han\'s Blog',
        meta: [
            {
                name: 'description',
                content: 'This is the home page'
            }
        ]
    })

</script>

<style scoped>
    main {
        width: 100%;
        height: 100%;
        display: flex;
    }

    p {
        font-size: xx-large;
    }

    #icons {
        margin: auto;
    }
</style>
