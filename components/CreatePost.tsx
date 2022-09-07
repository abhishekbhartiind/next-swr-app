import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = ({ setPosts }: any) => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 10000)
    const { data } = await axios('/posts', {
      method: 'POST',
      data: {
        id,
        content: `${content} with ${id}`,
      },
    })
    setPosts((posts: any) => [...posts, data])
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-50 ">
      <textarea
        cols={5}
        className="form-control white"
        placeholder="Write your dream post :)"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button className="btn btn-outline-warning" type="submit">
        Add Post
      </button>
    </form>
  )
}

export default CreatePost
