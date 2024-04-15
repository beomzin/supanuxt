import type { SearchParameters } from 'ofetch'

const getBaseUrl = () => useRuntimeConfig().public.serverUrl

export default {
  get: async (url: string, params?: SearchParameters) =>
    await useFetch(url, {
      baseURL: getBaseUrl(),
      method: 'GET',
      params: params
    }),
  post: async (url: string, params?: SearchParameters) =>
    await useFetch(url, {
      baseURL: getBaseUrl(),
      method: 'POST',
      params: params
    }),
  patch: async (url: string, params?: SearchParameters) =>
    await useFetch(url, {
      baseURL: getBaseUrl(),
      method: 'PATCH',
      params: params
    }),
  delete: async (url: string, params?: SearchParameters) =>
    await useFetch(url, {
      baseURL: getBaseUrl(),
      method: 'DELETE',
      params: params
    })
}
