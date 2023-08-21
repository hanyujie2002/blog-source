<template>
    <section>
        <P>A Chinese university student</P>
        <p style="font-size:400%">ヾ(≧▽≦*)o</p>
    </section>
</template>

<style scoped>
    
</style>

<script setup lang="ts">
useHead({
    title: 'About page',
    meta: [
        {
            name: 'description',
            content: 'This is the about page'
        }
    ]
})

// get the uri of the current page
const route = useRoute()
console.log(route.path)
const current = useState('current_page')
current.value = route.path

const test = queryContent('/').find()
console.log(test)
</script>
