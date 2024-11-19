<template>
  <div class="list" id="hand">
    <button
      class="card"
      v-for="(item, index) in game.player.hand"
      :key="index"
      @click="click(index)"
    >
      {{ item.cost }} <br />
      {{ item.name }}<br />{{ item.hp }}/{{ item.atk }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Hand",
  props: {
    game: Object,
  },
  methods: {
    click(index) {
      this.game.play(index);
    },
  },
};
</script>
