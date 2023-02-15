import { useEffect, useState } from "react";
import { getPlayer } from "../../apis/playerAPI";
import { InfoTeam } from "../Team/Team";
import './Player.css';
import CustomModal from '../../components/customModal/CustomModal'
// import Statistic from "../../scenes/Statistic/Statistic";

const Player = (props) => {
    const [player, setPlayer] = useState({});

    useEffect(() => {
        loadPlayer();
    }, [])

    const id = props.playerId;

    const loadPlayer = async () => {
        const result = await getPlayer(id);
        setPlayer(result);
    }

    const idTeam = player.idTeam;
    const Info = InfoTeam({ idTeam });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // console.log(Player.prototype());
    return (
        <>
            <CustomModal
                open={open}
                handleClose={handleClose}
                player={player}
            />

            {/* <Statistic
                playerName={player.name}
                playerTeam={player.idTeam}
            /> */}
            <div className="about-player" onClick={handleOpen}>
                <div className="img-player-div">
                    <img src={player.pictureUrl} alt="player" className="img-player" />
                </div>
                <div className="name__postition">
                    <div className="name-player">
                        {player.name}
                    </div>
                    <div className="position-player">
                        {player.position}
                    </div>
                </div>
                <div className="team-player">
                    <img className="flag__team-player" src={Info[0]} />
                    <div className="name__team-player">
                        {Info[1]}
                    </div>
                </div>
            </div>
        </>
    )
}


export default Player;
