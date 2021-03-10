<template>

  <div>
    <table
      class="table"
    >

      <tr>
        <th>Version</th>
        <th>Name</th>
        <th>Description</th>
      </tr>

      <Package
        v-for="pack of packages.objects"
        v-bind:pack="pack"
        v-bind:key="pack.date"
      />

    </table>

  </div>

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
  .table {
    margin: auto;
  }
</style>
