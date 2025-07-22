<template>
  <div style="display: flex; flex-direction: column">
    <button @click="counter++">Ajouter 1</button>
    <button @click="counter += 2">Ajouter 2</button>
    <button @click="counter += 5">Ajouter 5</button>
    <button @click="counter += 10">Ajouter 10</button>
    <button @click="window.Neutralino.app.exit()">Quit</button>
    {{ counter }}
  </div>
</template>

<script>
export default {
  data: () => ({
    counter: 0,
  }),
}
</script>
