<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/" class="secondary">
          <strong>Tasks App </strong>
        </NuxtLink>
      </li>
    </ul>
    <ul>
      <li>
        <NuxtLink :to="{ name: 'create' }">Create Task</NuxtLink>
      </li>
    </ul>
  </nav>
</template>
