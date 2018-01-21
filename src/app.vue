<template lang="pug">
    v-app
        the-toolbar

        v-container(fluid)
            h1 This is a test
            p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet autem corporis deserunt ducimus possimus quas quibusdam ratione? Architecto deserunt incidunt necessitatibus, pariatur possimus quam, quibusdam quidem quo reiciendis sapiente totam.

            v-text-field(label="Text", v-model="text")

            hr

            v-btn(@click="show_new_stuff=true") Click Me

            div.lala(v-if="show_new_stuff") New stuff

            //transition(:name="transitionName")
            router-view
                    p Nothing to see here

        v-footer(dense)
            v-spacer
            .my-1 Built with love
            v-spacer
</template>

<script>
    import TheToolbar from './the-toolbar'
    const x = import('vue')


    export default {
        data() { return {
            transitionName: '',
            a: { b: { c: 1 }},
            text: '123',
            show_new_stuff: false
        }},

        created() {
            window.a = this.a
        },

        components: {
            TheToolbar
        },

        watch: {
            '$route.path'(to, from) {
                const toDepth       = to.split('/').length
                const fromDepth     = from.split('/').length
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
                console.log('###', this.transitionName)
            },
            'a.b.c'(nv, ov) {
                console.log('>>> %s, %s', nv, ov)
            },
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        color: green;
    }
</style>