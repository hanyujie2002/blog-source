<template>
    <div>
        <h1>Welcome</h1>
        <main>
            <ContentList :path="props.lang" v-slot="{ list }">
                <div class="blog-list">
                    <div v-for="article in list" :key="article._path">
                        <NuxtLink class="ArticleTerm" :to="article._path">
                            {{ article.title }}
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
console.log(route.path)

const current = useState('current_page')
current.value = route.path

</script>

<style scoped>
    .blog-list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        /* border: thick double; */
    }

    .blog-list :link, .blog-list :visited {
        font-size: large;
        font-weight: bolder;
        font-family: sans-serif;
        text-decoration: unset;

        color: black;
        padding: 0.5rem 1rem;
    }

    .ArticleTerm:hover {
        background-color: black;
        color: white;
        text-decoration: underline;
        padding-right: 10rem;
    }
</style>
