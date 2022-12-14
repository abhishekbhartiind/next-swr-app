import { IComment } from '../types'
import { FunctionComponent } from 'react'

const CommentCard: FunctionComponent<{ comment: IComment }> = ({ comment: { content } }) => {
  return (
    <div className=" card w-50 bg-dark">
      <p className="card-body">{content} </p>
    </div>
  )
}

export default CommentCard
