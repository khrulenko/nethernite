<template>

  <table>

    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Version</th>
    </tr>

    <Package
      v-for="pack of packages.objects"
      v-bind:pack="pack"
      v-bind:key="pack.date"
     />

  </table>

</template>

<script>
  import Package from '@/components/Package';

  export default {
    props: ['packages'],

    components: {
      Package,
    },

  }
</script>

<style lang="scss">

</style>