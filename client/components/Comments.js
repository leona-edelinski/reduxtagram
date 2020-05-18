import React, { useRef } from 'react'
import { addComment, removeComment } from '../actions/actionCreators'
import { useDispatch } from 'react-redux'

const Comments = (props) => {
    const commentForm = useRef()
    const comment = useRef()
    const author = useRef()
    const dispach = useDispatch()
    const { postId } = props.params
    const renderComment = (comment, i) => {
        return (
            <div key={i}>
                <p>
                    <strong>
                        {comment.user}
                    </strong>
                    {comment.text}
                    <button className='remove=comment' onClick={() => dispach(removeComment(postId, i))}>&times;</button>
                </p>
            </div>
        )

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispach(addComment(postId, author.current.value, comment.current.value))
        commentForm.current.reset()
    }
    return (
        <div className='comment'>
            {props.postComments.map(renderComment)}
            <form ref={commentForm} className='comment-form' onSubmit={handleSubmit}>
                <input type='text' ref={author} placeholder='author' />
                <input type='text' ref={comment} placeholder='comment' />
                <input type='submit' hidden />
            </form>
        </div>
    )
}

export default Comments
