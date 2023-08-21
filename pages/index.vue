<template>
    <div>
        <main>
            <div id="welcome">
                <div v-for="char in welcome_con" :key="char" :style="getRandomStyles()">
                        {{ char }}
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
    useHead({
        title: 'Blog',
        meta: [
            {
                name: 'description',
                content: 'This is the home page'
            }
        ]
    })

    const welcome_con = "WELCOME"

    const getRandomStyles = computed(() => {
        return () => ({
            // fontFamily: getRandomFontFamily(),
            // color: getRandomColor(),
            fontSize: getRandomFontSize(),
            // margin: getRandomMargin(),
        })
    })

    const getRandomColor = () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'black']
        return colors[Math.floor(Math.random() * colors.length)]
    }

    const getRandomFontSize = () => {
        return `${Math.floor(Math.random() * 20 + 12)}rem`
    }

    const getRandomTransform = () => {
        const transforms = ['rotate(360deg)', 'rotate(180deg)', 'rotate(90deg)', 'rotate(45deg)', 'rotate(0deg)', 'rotate(-45deg)', 'rotate(-90deg)', 'rotate(-180deg)', 'rotate(-360deg)']
        return transforms[Math.floor(Math.random() * transforms.length)]
    }

    const getRandomMargin = () => {
        return `${Math.floor(Math.random() * 20 + 12)}px`
    }

    const getRandomPadding = () => {
        return `${Math.floor(Math.random() * 20 + 12)}px`
    }

    const getRandomBorder = () => {
        const borders = ['thick double', 'thick solid', 'thick dotted', 'thick dashed', 'thick groove', 'thick ridge', 'thick inset', 'thick outset', 'thick none', 'thick hidden']
        return borders[Math.floor(Math.random() * borders.length)]
    }

    const getRandomBackground = () => {
        const backgrounds = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange', 'black', 'white']
        return backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }

    const getRandomFontFamily = () => {
        const fontFamilys = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy', 'system-ui', 'ui-serif', 'ui-sans-serif', 'ui-monospace', 'ui-rounded', 'emoji', 'math', 'fangsong']
        return fontFamilys[Math.floor(Math.random() * fontFamilys.length)]
    }
</script>

<style scoped>
    #welcome {
        display: flex;
        flex-wrap: wrap;
        /* border: thick double; */

    }
</style>