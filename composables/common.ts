export const getSampleData = async () => {
  const { data } = await useFetch('/api/sample')
  return data.value
}
