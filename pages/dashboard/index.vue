<template>
  <div>
    {{ dashboard }}

    <Alert :message="message" @close="closeAlert" />
  </div>
</template>

<script setup>
const message = ref('')
const { data: dashboard, error } = await fetch.get('/api/dashboard')

if (error) message.value = error.value

const closeAlert = () => {
  message.value = ''
}
</script>

<style scoped></style>
