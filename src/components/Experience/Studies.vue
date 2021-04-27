<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
    name: 'Studies',
    props: {
        title: {
            type: String,
            default: 'defaultTitle'
        }
    }
}
</script>

<style>

</style>