import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getPlayerByTeam } from "../../apis/playerAPI";
import Player from "../../containers/Player/Player";
import './PlayerByTeam.css';
import { SubNavForTeam } from "../../components/subnav/SubNav";
const PlayerByTeam = () => {
    const [playerByTeam, setPlayerByTeam] = useState([]);

    const idTeam = useParams().idTeam;

    const loadPlayerByTeam = async () => {
        const result = await getPlayerByTeam(idTeam);
        setPlayerByTeam(result);
    }

    useEffect(() => {
        loadPlayerByTeam();
    }, [])

    return (
        <>
        <SubNavForTeam idTeam={idTeam} />
            {playerByTeam &&
                <div className="all-team-player">
                    {playerByTeam.map((player, index) => {
                        return (
                            <div key={index}><Player playerId={player?.id} /></div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default PlayerByTeam;
