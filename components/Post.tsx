import { PostProps } from '@utils/interfaces'

const Post = (post: PostProps) => {
  const { title, body, id }: PostProps = post
  return (
    <div className="col s12 m6 l4">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">
            {id}. {title}
          </span>
          <p className="white-text text-darken-3 lighten-3">{body}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
