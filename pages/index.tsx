import type { NextPage } from 'next'
import CreatePost from '@components/CreatePost'
import PostCard from '@components/PostCard'
import { IPost } from '../types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '@components/Loader'

const Home: NextPage = () => {
  const [posts, setPosts] = useState<IPost[]>()
  const getPosts = async () => {
    const { data } = await axios('/posts')
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="section">
      <main className="container">
        <div className="col s12">
          <h4 className="center">useSWR Hook ⛳</h4>
          <CreatePost setPosts={setPosts} />

          <h4>Posts</h4>
          {!posts && <Loader />}

          {posts?.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
