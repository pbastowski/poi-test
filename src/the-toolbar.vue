<template lang="pug">
    v-toolbar(dense)
        v-layout(row, align-center)
            v-toolbar-side-icon.mx-0
            the-toolbar-item(to="/here", icon="fingerprint") Here
            the-toolbar-item(to="/there", icon="room") There
</template>

<script>
    import TheToolbarItem from './the-toolbar-item'

    export default {
        components: { TheToolbarItem }
    }
</script>