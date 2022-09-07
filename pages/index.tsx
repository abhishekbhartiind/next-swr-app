import type { NextPage } from 'next'
import CreatePost from '@components/CreatePost'
import PostCard from '@components/PostCard'

const Home: NextPage = () => {
  return (
    <div className="section white">
      <main className="container">
        <div className="col s12">
          <h4>useSWR Hook ⛳</h4>
          <CreatePost />

          <h4>Posts</h4>
          {[...new Array(10)].map((_, i) => (
            <PostCard key={i} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
