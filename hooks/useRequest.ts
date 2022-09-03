import useSWR, { Key, Fetcher } from "swr"

const url = "https://jsonplaceholder.typicode.com/posts"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useGetPosts = () => {
  const { data, error } = useSWR(url, fetcher)

  return { data, error }
}
