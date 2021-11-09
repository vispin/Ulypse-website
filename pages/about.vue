<template>
    <div class="main">
        <div class="container">
            <h1>About</h1>
            <p>
                Founded in 2021, Ulypse strives to create an experience that
                no Discord server in high school can uphold.
            </p>

            <p>
                Our primary goal is to make all of the code in future projects
                <a target="_blank" href="https://github.com/euphorxa/ulypse">open source</a>
                while giving to the community at Ulypse, which are mainly people in high school.
            </p>

            <p>
                We are still in beta, so some of the features we plan to release
                are either still being worked on as a whole, or they are buggy,
                requiring comprehensive updates to finish completing. 
            </p>

            <p>
                We also feature affiliate servers that you can go to. These are 
                mainly servers that we support as a whole, either because of the
                community or because of how the project is made.
            </p>

            <p>
                Ulypse is created by Jeffrey, who is a nerd lol imagine being one. :)
</template>

<script>
import Mfooter from '~/components/layout/footer'

export default {
    components: {
        Footer,
    },
    auth: false, 
    head: {
        title: 'About - Ulypse',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                  'View information about Ulypse, an open source platform here! Ulypse is currently working on may projects at the moment, more to come!.',
            },
            {
                hid: 'apple-mobile-web-app-title',
                name: 'apple-mobile-web-app-title',
                content: 'About',
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'About',
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: 'About',
            },
        ],
    },
}
</script>

<style lang="scss" scoped>
.main {
  margin: var(--spacing-card-sm) auto;
  max-width: 800px;
}
.container {
  @extend %card;
  padding: var(--spacing-card-sm) var(--spacing-card-lg);
}
a {
  text-decoration: underline;
  color: var(--color-link);
}
</style>