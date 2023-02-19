import { useEffect, useState } from "react"
import { getTopPlayer } from "../../apis/playerAPI";
import Player from "../../containers/Player/Player";
import './TopPlayer.css'

const TopPlayer = () => {
    const [topPlayers, setTopPlayers] = useState([]);

    useEffect(() => {
        loadTopPlayers();
    }, [])

    const loadTopPlayers = async () => {
        const result = await getTopPlayer();
        setTopPlayers(result);
    }

    return (
        <div className="top-player">
            {topPlayers.map((player, index) => {
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
