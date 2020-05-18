import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import { increment } from '../actions/actionCreators'
const Photo = (props) => {
    const { post, i } = props
    const dispach = useDispatch()
    const comments = useSelector(state => state.comments)
    return (
        <figure className='grid-figure'>
            <div className="grid-photo-wrap">
                <Link to={`/view/${post.code}`}>
                    <img src={post.display_src} alt={post.caption} className="grid-photo" />
                </Link>
                <CSSTransitionGroup
                    transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    <span key={post.likes} className='likes-heart'>{post.likes}</span>
                </CSSTransitionGroup>

            </div>
            <figcaption>
                <p>{post.caption}</p>
                <div className='control-buttons'></div>
                <button onClick={() => dispach(increment(i))} className='likes'>&hearts; {post.likes}</button>
                <Link className='button' to={`/view/${post.code}`}>
                    <span className="comment-count">
                        <span className="speech-bubble"> </span>&nbsp;
                        {comments[post.code] ? comments[post.code].length : 0}
                    </span>
                </Link>
            </figcaption>
        </figure>
    )
}

export default Photo
