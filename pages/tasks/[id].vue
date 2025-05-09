<script setup lang="ts">
const { data, status, error } = await useFetch(`/api/tasks/${}`, { lazy: true });
</script>

<template>
  <h1>The Single Task Page</h1>
</template>
