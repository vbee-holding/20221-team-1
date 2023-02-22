import { useEffect, useState } from "react"
import { getTopPlayer } from "../../apis/playerAPI";
import Player from "../../containers/Player/Player";
import './TopPlayer.css'

const TopPlayer = () => {
    const [topPlayer, setTopPlayer] = useState([]);

    useEffect(() => {
        loadTopPlayer();
    }, [])

    const loadTopPlayer = async () => {
        const result = await getTopPlayer();
        setTopPlayer(result);
    }

    return (
        <div className="top-player">
            {topPlayer.map((player, index) => {
                return (
                    <div key={index}>
                        <Player playerId={player.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default TopPlayer;
