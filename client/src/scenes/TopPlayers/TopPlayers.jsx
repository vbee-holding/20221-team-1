import { useEffect, useState } from "react"
import { getTopPlayer } from "../../apis/playerAPI";
import Player from "../../containers/Player/Player";
import './TopPlayers.css'

const TopPlayers = () => {
    const [topPlayer, setTopPlayer] = useState([]);

    const loadTopPlayer = async () => {
        const result = await getTopPlayer();
        setTopPlayer(result);
    }

    useEffect(() => {
        loadTopPlayer();
    }, [])

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

export default TopPlayers;
