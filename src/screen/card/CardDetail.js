import React, { useEffect } from 'react'
import { Card } from 'antd';
import { useParams } from 'react-router';
import Loader from '../../components/loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { singlePosts } from '../../action/requestPost';
import { useNavigate } from 'react-router-dom';


export default function CardDetail(props) {
    // const postId = props.match.params.id;
    const navigate = useNavigate();
    const pushtoHome = () => {
        navigate('/');
    }

    const { id } = useParams()
    const dispatch = useDispatch();
    const singlePostList = useSelector(state => state.signlePostList);
    const { loading, post } = singlePostList
    console.log(singlePostList)
    useEffect(() => {
        dispatch(singlePosts(id))
    }, [id])

    return (
        <div>
            {loading ? <Loader></Loader> : (
                <Card size="default" title={post.title} extra={<a><button onClick={pushtoHome}>Delete</button></a>} style={{ width: "90%", height: '70vh', marginLeft: 'auto', marginRight: 'auto' }}>
                    {post.body}

                </Card>
            )}
        </div>
    )

}
