import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPostByMatch, getPostByTeam } from '../../apis/postAPI';
import DetailPost from '../../containers/DetailPost/DetailPost';
import { SubNavForTeam } from '../../components/subnav/SubNav';
import './Post.css'

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
