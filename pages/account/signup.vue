<template>
  <div>
    <nuxt-link
      href="signin"
      class="absolute px-6 py-12 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    >
      {{ '< ' }}back
    </nuxt-link>
    <div
      class="h-screen flex flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
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
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" method="POST" @submit.prevent="signUp">
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
            <div class="flex items-center justify-between">
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
            </div>
            <div class="mt-2">
              <input
                id="name"
                v-model="form.name"
                name="name"
                type="text"
                required=""
                placeholder="Supanuxt"
                class="block w-full p-2 mb-6 border-b-2 border-b-black outline-none focus:border-b-indigo-500"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="nationality"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
            </div>
            <div class="mt-2">
              <select
                v-model="form.nationality"
                class="block w-full p-2 mb-6 border-b-2 border-b-black outline-none focus:border-b-indigo-500"
              >
                <option
                  v-for="country in countries"
                  :key="country.id"
                  :value="country.iso2"
                  :label="country.name"
                />
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'none'
})

const client = supabase.client()
const form = ref({ email: '', password: '', name: '', nationality: 'US' })

const { data: countries } = await client.from('countries').select('*')

const signUp = async () => {
  const { data, error } = await client.auth.signUp({
    email: form.value.email,
    password: form.value.password
  })

  if (!error) await submit(data.user)
  else console.log('SIGN UP ERROR ::', error?.message)
}

const submit = async (user) => {
  const { error } = await client.from('users').insert([
    {
      uid: user.id,
      name: form.value.name,
      nationality: form.value.nationality
    }
  ])

  if (!error) await navigateTo('signin')
  else console.log('INSERT ERROR ::', error?.message)
}
</script>

<style scoped></style>
