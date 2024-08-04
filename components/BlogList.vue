<template>
    <main>
        <ContentList :path="props.lang" v-slot="{ list }">
            <ul class="blog-list">
                <li v-for="article in list" :key="article._path">
                    <NuxtLink class="article" :to="article._path" tabindex="0">
                        {{ article.title }}
                    </NuxtLink>
                </li>
            </ul>
        </ContentList>
    </main>
</template>

<script setup lang="ts">
useHead({
    title: 'blog list',
    meta: [
        {
            name: 'description',
            content: 'This is the blog list page'
        }
    ]
})

const props = defineProps(['lang'])

// get the uri of the current page
const route = useRoute()
// console.log(route.path)

const current = useState('current_page')
current.value = route.path

</script>

<style scoped>
    .blog-list {
        list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        margin-bottom: 1rem;
    }

    .article:link, .article:visited {
        font-size: large;
        font-weight: bolder;
        font-family: sans-serif;
        text-decoration: unset;
        color: black;

        padding: 0.5rem 1rem;
        display: block;
        height: 5rem;
        outline: black dashed;
    }

    .article:hover, .article:focus {
        background-color: black;
        color: white;
        outline: unset;
    }
</style>
