import supabase from '~/composables/supabase'

export default defineNuxtRouteMiddleware((to, from) => {
  const user = supabase.user()
  const whiteList = ['/', '/account/signin', '/account/signup']

  const isWhiteList = whiteList.includes(to.path) || false
  if (isWhiteList) {
    if (user.value) return navigateTo('/main')
  } else {
    if (!user.value) return navigateTo('/account/signin')
  }
})
