<template lang="pug">
    v-btn(:small="small", flat, :to="to")
        v-icon(v-if="icon").mr-1 {{ icon }}
        span
            slot
</template>

<script>
    export default {
        props: {
            icon:  {},
            to:    {},
            small: { type: Boolean, default: true },
        },
    }
</script>

<style scoped lang="scss">
    .btn span {
        text-transform: none;
    }
</style>