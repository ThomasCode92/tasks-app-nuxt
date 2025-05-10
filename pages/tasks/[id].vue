<script setup lang="ts">
const route = useRoute();
const { data, status, error } = await useFetch(
  `/api/tasks/${route.params.id}`,
  { lazy: true },
);
</script>

<template>
  <article v-if="status === 'pending'" aria-busy="true" />
  <article v-else-if="error" class="error">{{ error.statusMessage }}</article>
  <article v-else-if="data">
    <h1>{{ data.task.title }}</h1>
  </article>
</template>
