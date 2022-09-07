import type { NextPage } from 'next'
import { useGetPosts } from '@hooks/useRequest'
import Post from '@components/Post'
import { PostProps } from '@utils/interfaces'

const Sample: NextPage = () => {
  const { data: posts, error } = useGetPosts()

  if (error) return <h3 className="center">Something went wrong!</h3>
  if (!posts) return <h3 className="center">Loading!...</h3>

  return (
    <div className="section">
      <main className="container">
        <div className="col s12">
          {posts.map((post: PostProps) => (
            <Post key={post.id} title={post.title} id={post.id} body={post.body} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Sample
