import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllPost, getPostByMatch, getPostByTeam } from '../../apis/postAPI';
import DetailPost from '../../containers/DetailPost/DetailPost';
import { SubNavForTeam } from '../../components/subnav/SubNav';
import './Post.css'
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

export const PostAboutTeam = () => {
    const [postAboutTeam, setPostAboutTeam] = useState([]);

    const { idTeam } = useParams();
    const loadPostAboutTeam = async () => {
        const result = await getPostByTeam(idTeam);
        setPostAboutTeam(result);
    }

    useEffect(() => {
        loadPostAboutTeam();
    }, []);

    return (
        <div>
            <SubNavForTeam idTeam={idTeam} />
            <div className='post-team' >
                {postAboutTeam.map((post, index) => {
                    return (
                        <div className='post-team-detail' key={index}><DetailPost post={post} /></div>
                    )
                })}
            </div>
        </div>
    )
}
