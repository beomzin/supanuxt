<template>
  <div>
    <div class="bg-white shadow mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">
        {{ hello }}
      </h1>
    </div>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <!-- Your content -->
    </div>
  </div>
</template>

<script setup>
const hello = ref('')
const { data } = await fetch.get('/api/sample', {})
hello.value = data.value?.hello
</script>
