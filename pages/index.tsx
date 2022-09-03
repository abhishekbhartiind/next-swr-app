import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useGetPosts } from '../hooks/useRequest'
import Post from '../components/Post'
import { PostProps } from '../utils/interfaces'

const Home: NextPage = () => {
  const { data: posts, error } = useGetPosts()

  if (error) return <h1>Something went wrong!</h1>
  if (!posts) return <h1>Loading...</h1>

  return (
    <Layout>
      <div className="section white">
        <main className="container">
          <div className="col s12">
            {posts.map((post: PostProps) => (
              <Post key={post.id} title={post.title} id={post.id} body={post.body} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Home
