<template>
  <h1>
    {{ msg }}
  </h1>
  <abc />
</template>

<script lang="tsx" setup>

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const abc = <h1>1321</h1>

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
