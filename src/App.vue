<template>
  <div id="app">

    <b-form-input
      v-model="query"
      @update="newSearch"
      placeholder="enter package name or it's part (at least 2 symbols)"
      type="text"
      debounce="500"
      :state="isCorrect"
    >
    </b-form-input>

    <b-alert
      v-if="isTableVisible"
      variant="success"
      show
    >
      Found results: {{ packages.total }}
    </b-alert>

    <div
      v-if="isTableVisible"
    >

      <Table
        v-bind:packages="packages"
      />

      <!-- <paginate
        v-model="currentPage"
        :page-count="totalPages"
        :click-handler="loadData"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :active-class="'active-page'"
        :break-view-link-class="'break-page-link'"
      >
      </paginate> -->

      <div class="mt-3">
        <b-pagination-nav
          v-model="currentPage"
          :number-of-pages="totalPages"
          :link-gen="loadData"
          limit="9"
          pills
          size="md"
          base-url="#"
          align="center"
          exact-active-class="active-page"
        >
        </b-pagination-nav>
      </div>

      <div>
        <b-form-input
          id="range-1"
          v-model="currentPage"
          type="range"
          min="1"
          :max="totalPages"
          :lazy="true"
        >
        </b-form-input>
      </div>

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
        fetch(`https://registry.npmjs.com/-/v1/search?text=${this.query.trim()}&from=${(this.currentPage - 1) * 10}&size=10`)
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

    computed: {
      isCorrect() {
        return this.query.length === 0 ? null
          : this.query.trim().length >= 2 ? true
          : false;
      },
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

</style>
