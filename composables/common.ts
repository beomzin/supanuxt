import type { SearchParameters } from 'ofetch'

const baseUrl = process.env.LOCAL_URL

export const fetch = {
  get: async (url: string, params?: SearchParameters) =>
    await useFetch(url, {
      baseURL: baseUrl,
      method: 'GET',
      params: params
    }),
  post: async (url: string, params?: SearchParameters) =>
    await useFetch(url, {
      baseURL: baseUrl,
      method: 'POST',
      params: params
    }),
  patch: async (url: string, params?: SearchParameters) =>
    await useFetch(url, {
      baseURL: baseUrl,
      method: 'PATCH',
      params: params
    }),
  delete: async (url: string, params?: SearchParameters) =>
    await useFetch(url, {
      baseURL: baseUrl,
      method: 'DELETE',
      params: params
    })
}
