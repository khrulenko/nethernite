<template>
  <div id="app">

    <input
      type="text"
      v-model="query"
      @input="loadData"
    >

    Found results: {{ packages.total }}

    <Table
      v-if="isTableVisible"
      v-bind:packages="packages"
    />

  </div>
</template>

<script>
  import Table from '@/components/Table';

  export default {
    data() {
      return {
        packages: {},
        query: '',
        isTableVisible: false,
      }
    },

    components: {
      Table,
    },

    methods: {
      loadData() {
        fetch(`http://registry.npmjs.com/-/v1/search?text=${this.query.trim()}&from=0&size=10`)
          .then(response => response.json())
          .then((data) => {
            this.packages = data;
          });
      },

      tableVisability() {
        this.isTableVisible = this.query.trim() && this.packages.objects.length;
      },
    },

    watch: {
      packages() {
        this.tableVisability();
      },
    },
  }
</script>

<style lang="scss">

</style>
