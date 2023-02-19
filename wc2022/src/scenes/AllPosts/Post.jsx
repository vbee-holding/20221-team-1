import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllPost, getPostByMatch, getPostByTeam } from '../../apis/postAPI';
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
        <div style={{ width: 'calc(100vw/1.5)', height: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto', backgroundColor: 'gray' }}>
            {postAboutTeam.map((post, index) => {
                return (
                    <div key={index}><DetailPost post={post} /></div>
                )
            })}
        </div>
    )
}

export const PostAboutMatch = (props) => {
    const [postAboutMatch, setPostAboutMatch] = useState([]);

    const idMatch = props.idMatch;
    const loadPostAboutMatch = async () => {
        const result = await getPostByMatch(idMatch)
        setPostAboutMatch(result);
    }

    useEffect(() => {
        loadPostAboutMatch();
    }, [])

    return (
        <div>
            {postAboutMatch.map((post, index) => {
                return (
                    <div key={index}><DetailPost post={post} /></div>
                )
            })}
        </div>
    )
}
