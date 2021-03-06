<template>
  <div id="app">

    <input
      type="text"
      v-model="query"
      @input="newSearch"
    >

    Found results: {{ packages.total }}

    <div
      v-if="isTableVisible"
    >
      <Table
        v-bind:packages="packages"
      />

      <paginate
        v-model="currentPage"
        :page-count="totalPages"
        :click-handler="loadData"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :active-class="'active-page'"
        :break-view-link-class="'break-page-link'"
      >
      </paginate>

      <label>
        Go to page:
        <input
          type="text"
          v-model="toPage"
          @keyup.enter="goToPage"
        >
      </label>
    </div>

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
        totalPages: 0,
        currentPage: 1,
        toPage: '',
      }
    },

    components: {
      Table,
    },

    methods: {
      loadData() {
        fetch(`http://registry.npmjs.com/-/v1/search?text=${this.query.trim()}&from=${(this.currentPage - 1) * 10}&size=10`)
          .then(response => response.json())
          .then((data) => {
            this.packages = data;
          });
      },

      tableVisability() {
        this.isTableVisible = this.query.trim() && this.packages.objects.length;
      },

      newSearch() {
        this.currentPage = 1;
        this.loadData();
      },

      goToPage() {
        if (this.toPage <= this.totalPages) {
          this.currentPage = +this.toPage;
          this.loadData();
          this.toPage = '';
        }
      }
    },

    watch: {
      packages() {
        this.tableVisability();
        this.totalPages = Math.ceil(this.packages.total / 10);
      },
    },

  }
</script>

<style lang="scss">
  .pagination {
    display: flex;
    gap: 10px;

    list-style: none;
  }

  .active-page {
    background-color: rgb(77, 224, 89);
  }

  .break-page-link {
    cursor: default !important;
  }
</style>
