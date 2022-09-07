import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useGetPosts } from '../hooks/useRequest'
import Post from '../components/Post'
import { PostProps } from '../utils/interfaces'

const Sample: NextPage = () => {
  const { data: posts, error } = useGetPosts()

  if (error)
    return (
      <Layout>
        <h3 className="center">Something went wrong!</h3>
      </Layout>
    )

  if (!posts)
    return (
      <Layout>
        <h3 className="center">Loading!...</h3>
      </Layout>
    )

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

export default Sample
