<template>
 
    <div class="list">
      <button
        class="card"
        v-for="(item, index) in game[side].board"
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
  name: "Board",
  props: {
    game: Object,
    side: String,
  },
  methods: {
    click(index) {
      this.game.play(index, this.side);
    },
  },
};
</script>
