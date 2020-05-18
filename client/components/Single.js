import React from 'react'
import Photo from './Photo'
import Comments from './Comments'
import { useSelector } from 'react-redux'

const Single = (props) => {
    const { postId } = props.params
    const posts = useSelector(state => state.posts)
    const postComments = useSelector(state => state.comments[postId] || [])

    const i = posts.findIndex((post) => post.code === postId)
    const post = posts[i]
    return (
        <div className='single-photo'>
            <Photo i={i} post={post} {...props} />
            <Comments postComments={postComments} {...props} />
        </div>
    )
}

export default Single
