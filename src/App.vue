<template>
  <div id="app">

    <input
      type="text"
      v-model="query"
      @change="loadData"
    >

    <Table
      v-if="query.trim() && packages.objects.length"
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
            console.log(data);
          });
      },
    },

    watch: {
      query: function() {
        this.loadData();
      },
    },
  }
</script>

<style lang="scss">

</style>
