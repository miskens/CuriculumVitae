<template>
  <h1>{{title}}</h1>
  <div class="schoolDiv">
      <School />
  </div>
</template>

<script>
import School from "./School"

export default {
    name: 'Studies',
    props: {
        title: {
            type: String,
            default: 'defaultTitle'
        },
        schools: Array,
    },
    components: {
        School,
    }
}
</script>

<style>

</style>