<template>
  <div class="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Supanuxt
      </h2>
      <p class="float-end text-gray-500">{{ version }}</p>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" method="POST" @submit.prevent="submit">
        <div>
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div class="mt-2">
            <input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              placeholder="email@example.com"
              class="block w-full p-2 mb-6 border-b-2 border-b-black outline-none focus:border-b-indigo-500"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div class="text-sm">
              <nuxt-link
                href="#"
                class="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </nuxt-link>
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              v-model="form.password"
              name="password"
              type="password"
              autocomplete="current-password"
              required=""
              placeholder="••••••"
              class="block w-full p-2 mb-6 border-b-2 border-b-black outline-none focus:border-b-indigo-500"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <nuxt-link
          href="signup"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Sign up
        </nuxt-link>
      </p>
    </div>

    <Alert :message="message" @close="closeAlert" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'none'
})

const version = useRuntimeConfig().public.buildVersion
const client = supabase.client()
const form = ref({ email: '', password: '' })
const message = ref('')

const submit = async () => {
  const { data, error } = await client.auth.signInWithPassword({
    email: form.value.email,
    password: form.value.password
  })

  if (data.session) await navigateTo('/main')
  if (error) {
    message.value = error?.message
    console.log('SIGN IN ERROR ::', error?.message)
  }
}
const closeAlert = () => {
  message.value = ''
}
</script>

<style scoped></style>
