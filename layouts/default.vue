<template>
  <div class="container">
    <AppNavbar />
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
.button-container {
  display: flex;
  justify-content: end;
}

.error {
  color: red;
}
</style>
