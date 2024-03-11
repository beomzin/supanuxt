export default defineNuxtRouteMiddleware((to, from) => {
  const user = supabase.user()
  const whiteList = ['/', '/account/signin', '/account/signup']
  const isWhiteListPath = whiteList.includes(to.path)

  if (isWhiteListPath && user.value) {
    return navigateTo('/main')
  }

  if (!isWhiteListPath && !user.value) {
    return navigateTo('/account/signin')
  }
})
