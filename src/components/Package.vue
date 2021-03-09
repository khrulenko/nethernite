<template>

  <tr
    v-on:click="infoVisability"
    class="table-row"
  >

    <td>{{ pack.package.version }}</td>
    <td>{{ pack.package.name }}</td>
    <td>{{ pack.package.description }}</td>

    <div
      class="info"
      v-if="isInfoVisible"
    >

      <div
        class="info-body"
      >
        <p>
          NAME: {{ pack.package.name }}
        </p>
        <p>
          AUTHOR: {{ pack.package.author ? pack.package.author.name : 'unknown' }}
        </p>
        <p>
          PUBLISHER: {{ pack.package.publisher.username }}
        </p>
      </div>

    </div>

  </tr>

</template>

<script>

  export default {
    props: ['pack'],

    data() {
      return {
        isInfoVisible: false,
      };
    },

    methods: {
      infoVisability() {
        this.isInfoVisible = !this.isInfoVisible;
      },
    },

  }
</script>

<style lang="scss">
  .info {
    z-index: 4;
    position: absolute;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
  }

  .info-body {
    max-width: 500px;
    margin: 50px auto;

    text-align: center;
  }

  .table-row {
    height: 50px;
    border-bottom: 1px solid black;
    cursor: pointer;
  }

  .table-row:hover {
    background-color: #007bff75;
  }
</style>