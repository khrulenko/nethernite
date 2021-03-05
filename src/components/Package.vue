<template>

  <tr v-on:click="infoVisability">

    <td>{{ pack.package.name }}</td>
    <td>{{ pack.package.description }}</td>
    <td>{{ pack.package.version }}</td>

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
          AUTHOR: {{ pack.package.author ? pack.package.author.name : '---' }}
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
    z-index: 3;
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
</style>