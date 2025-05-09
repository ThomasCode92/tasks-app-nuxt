<script setup lang="ts">
import type { FetchError } from "ofetch";

const errorMessage = ref("");
const isLoading = ref(false);
const taskName = ref("");

async function onSubmit() {
  if (!taskName.value.trim()) {
    errorMessage.value = "Task name is required";
    return;
  }

  try {
    isLoading.value = true;
    errorMessage.value = "";

    const result = await $fetch("/api/tasks", {
      method: "POST",
      body: { title: taskName.value },
    });

    navigateTo({ name: "tasks-id", params: { id: result.task.id } });
  } catch (e) {
    const error = e as FetchError;
    errorMessage.value = error.statusMessage ?? "Unknown error occurred";
  }

  isLoading.value = false;
}
</script>

<template>
  <div>
    <h1>Create Task</h1>
    <article v-if="isLoading" aria-busy="true" />
    <article v-else-if="errorMessage" class="error">{{ errorMessage }}</article>
    <form @submit.prevent="onSubmit">
      <label>
        Task
        <input v-model="taskName" type="text" name="title" />
      </label>
      <div class="button-container">
        <button>Create</button>
      </div>
    </form>
  </div>
</template>
