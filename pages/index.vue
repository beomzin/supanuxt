<template>
  <div />
</template>

<script setup>
definePageMeta({
  layout: 'none'
})

const user = supabase.user()

if (!user.value) navigateTo('/account/signin')
</script>
