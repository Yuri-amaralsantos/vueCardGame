<template>
  <div>
   <div class="base">
    <Board :game="game" side="bot" />
    <Board :game="game" side="player" />
    <br>  
    <Hand :game="game" />
    <h1></h1>
    </div>
    <MenuGeral :game="game" />
  </div>
</template>

<script>
import Board from "./components/Board.vue";
import Hand from "./components/Hand.vue";
import MenuGeral from "./components/MenuGeral.vue";
import { game } from "./data";

export default {
  components: { Board, Hand, MenuGeral },
  data() {
    return { game };
  },
};
</script>
