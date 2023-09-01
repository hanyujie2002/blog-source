<template>
    <div>
        <h1>Welcome</h1>
        <main>
            <ContentList :path="props.lang" v-slot="{ list }">
                <div class="blog-list">
                    <div v-for="article in list" :key="article._path">
                        <NuxtLink class="article-term" :to="article._path" tabindex="0">
                            <div>
                            {{ article.title }}
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </ContentList>
        </main>
    </div>
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
        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* border: thick double; */
        width: 100%;
        margin-bottom: 1rem;
    }

    .blog-list :link, .blog-list :visited {
        font-size: large;
        font-weight: bolder;
        font-family: sans-serif;
        text-decoration: unset;

        color: black;
        padding: 0.5rem 1rem;
    }

    .article-term:link, .article-term:visited {
        display: block;
        height: 5rem;
        margin: auto;
        outline: black dashed;
    }
    .article-term:hover, .article-term:focus {
        background-color: black;
        color: white;
        box-shadow: unset;
        outline: unset;
    }
</style>
