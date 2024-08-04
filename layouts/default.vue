<template>
    <div id="main">
        <nav>
            <span id="small-screen-menu">
                <div id="menu" @click="(event) => {isshowlist=!isshowlist}"><img src="~/assets/img/menu.svg"></div>
                <div class="menu-list" v-show="isshowlist">
                    <NuxtLink to="/" class="option" @click="(event) => {isshowlist = !isshowlist}">Home</NuxtLink>
                    <NuxtLink to="/about" class="option" @click="(event) => {isshowlist = !isshowlist}">about me</NuxtLink>

                    <div class="small-screen-languages">
                        <button style="padding-left: 1rem; border-bottom: double black;">文/A</button>
                        <!-- language choose -->
                        <NuxtLink class="option" @click="(event) => {isshowlist = !isshowlist}" to="/blog/en">English ↗</NuxtLink>
                        <NuxtLink class="option" @click="(event) => {isshowlist = !isshowlist}" to="/blog/zh">中文 ↗</NuxtLink>
                    </div>
                </div>
            </span>

            <div id="broad-screen-menu">
                <NuxtLink to="/" :class="{current_page: isCurrent('/'), links: true}" style="margin-left: 3vw">Home</NuxtLink>
                <NuxtLink to="/about" :class="{links: true, current_page: isCurrent('/about')}">about me</NuxtLink>

                <div style="margin-left: auto;">
                    <!-- when hover on the button, it shows the language div -->
                    <button id="lang_sel">文/A</button>
                    <div class="languages">
                        <!-- language choose -->
                        <NuxtLink to="/blog/en" class="option">English</NuxtLink>
                        <NuxtLink to="/blog/zh" class="option">中文</NuxtLink>
                    </div>
                </div>
            </div>
        </nav>

        <!-- <div id="content_wrapper"> -->
            <main>
                <slot />
            </main>
        <!-- </div> -->

        <footer id="footer">
            <p>This blog is supported by Nuxt</p>
        </footer>
    </div>
</template>

<script setup Lang="ts">
    // useSeoMeta ({
    //     ogSiteName: "YuJie Han's blog",
    //     twitterCard: "summary_large_image"
    // })

    const route = useRoute()
    const current = useState('current_page', ()=>'/')
    const isCurrent = (path) => { return route.path === path; }
    const isshowlist = useState('isshowlist', ()=>false);
    // const isBroadScreen = computed(() => {
    //     return window.innerWidth > 1000;
    // })
</script>

<style scoped>
    /* #lan_sel + .languages {
        display: none;
    } */

    .small-screen-languages {
        display: flex;
        flex-direction: column;
        font-size: x-large;
        font-family: sans-serif;
        border: black double;
    }
    #broad-screen-menu {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 1vw;
        display: none;
    }

    #small-screen-menu {
        display: block;
    }

    #menu {
        width: 100%;
        height: 100%;
        padding: 0.5rem 1rem;
    }

    .menu-list {
        /* display: none; */
        position: absolute; 
        font-size:x-large;

        display: flex;
        flex-direction: column;

        padding: 3px;

        background: white;

        border: double thick;
        box-shadow: 5px 5px; 
        
        z-index: 1;
    }

    .menu-list :link, .menu-list :visited {
        font-family: sans-serif;
        color: black;
        text-decoration: none;
    }

    nav {
        display: flex;
        /* gap: 1rem; */
        /* justify-content: space-around; */
        padding: 1rem 0;
        background-color: black;

        gap: 1vw;
    }

    nav .links:link, nav .links:visited {
        font-size: large;
        font-weight: bolder;
        font-family: sans-serif;
        text-decoration: none;

        border: thick double;

        color: white;
        padding: 0.5rem 1rem;
        font-family: sans-serif;
        
        /* margin-left: 3vw; */
    }

    nav .links:hover {
        color: black;
        text-decoration: underline;
        background-color: #f4f4f5;
        box-shadow: 5px 5px white;
    }

    nav .links:active {
        background: white;
    }

    nav .links.current_page {
        background-color: #f4f4f5;
        color: black;
        box-shadow: 5px 5px white;
    }

    #footer {
        background-color: black;
        color: white;
        padding: 1rem 0;
        text-align: center;
    }


    /* resopnsible design, when screen width is more than half of screen width in a computer screen, restrict the width */
    /* @media screen and (min-width: 1000px) {
        .nav {
            max-width: 1000px;
            margin: auto;
        }

        #content {
            max-width: 1000px;
            background-color: white;
            margin: auto;
            min-height: 100vh;
        }

        #background {
            background-color: #f4f4f5;
        }

        #footer {
            max-width: 1000px;
            margin: auto;
        }
    } */
    /* .language_button {
        font-size: large;
        font-weight: bolder;
        font-family: sans-serif;
        text-decoration: none;

        border: thick double;

        color: white;
        padding: 0.5rem 1rem;
        font-family: sans-serif;
        
        margin-right: 3vw;
    }

    .language_button:hover {
        background-color: white;
        color: black;

    } */

    .languages {
        display: none;
    }

    #lang_sel {
        font-size: large;
        font-weight: bolder;
        font-family: sans-serif;
        text-decoration: none;

        border: thick double;

        background-color: black;
        color: white;
        padding: 0.5rem 1rem;
        font-family: sans-serif;
        
        margin-right: 3vw;
    }

    #lang_sel:hover {
        cursor: pointer;
        background-color: white;
        color: black;
    }

    #lang_sel:hover+.languages, #lang_sel+.languages:hover {
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: white;
        font-size:x-large;
        border: thick double;
        font-family: sans-serif;
    }

    .languages :link, .languages :visited {
        color: black;
        text-decoration: none;
    }

    .option {
        padding: 1rem;
    }
    .option:hover {
        background-color: black;
        color: white;
    }

    #main {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
        background-color: white;
    }

    main {
        /* max-width: 100vw; */
        overflow-x: auto; 
        
        margin-left: 3vw;
        margin-right: 3vw;
    }

    @media screen and (min-width: 1000px) {
        #main {
            max-width: 1000px;
            margin: auto;
        }
        
        .languages {
            right: unset;
        }

        #content_wrapper {
            border: thick double;
        }
        main {
        }

        #small-screen-menu {
            display: none;
        }

        #broad-screen-menu {
            display: flex;
        }
    }

</style>
