import React from 'react'
import { useSelector } from 'react-redux'
import Photo from './Photo'

const PhotoGrid = (props) => {
    const posts = useSelector(state => state.posts)

    return (
        <div className='photo-grid'>
            {posts.map((post, i) => <Photo {...props} key={i} i={i} post={post} />)}
        </div>
    )
}

export default PhotoGrid
