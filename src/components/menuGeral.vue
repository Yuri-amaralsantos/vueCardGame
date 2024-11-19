<template>
  <div>
    <button id="turn" @click="bTurn">Pass Turn</button>
  </div>
</template>

<script>
export default {
  name: 'MenuGeral',
  props: {
    game: Object,
  },
  methods: {
    bTurn() {
      this.game.turn();
    },
  },
};
</script>


