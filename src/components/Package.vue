<template>

  <tr>
    <td>{{ pack.package.name }}</td>
    <td>{{ pack.package.description }}</td>
    <td>{{ pack.package.version }}</td>
  </tr>

</template>

<script>

  export default {
    props: ['pack'],

  }
</script>

<style lang="scss">

</style>