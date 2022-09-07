import { useState } from 'react'

const CreatePost = () => {
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    //! do some wired stuff
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-50 ">
      <textarea
        cols={3}
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
