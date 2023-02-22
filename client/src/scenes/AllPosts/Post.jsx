import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
import { getAllPost } from '../../apis/postAPI';
import DetailPost from '../../containers/DetailPost/DetailPost';

export const AllPost = () => {
    const [posts, setPosts] = useState([]);

    const loadPost = async () => {
        const result = await getAllPost();
        setPosts(result);
    }

    useEffect(() => {
        loadPost();
    }, [])

    return (
        <div style={{ width: 'calc(100vw/1.5)', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {posts && posts.map((post, index) => {
                return (
                    <div key={index}><DetailPost post={post} /></div>
                )
            })}
        </div>
    )
}
