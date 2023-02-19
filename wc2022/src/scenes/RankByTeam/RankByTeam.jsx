import { useParams } from "react-router-dom"
import RankOneGroup from "../../containers/RankOneGroup/RankOneGroup";
import { InfoTeam } from "../../containers/Team/Team";
import './RankByTeam.css'

const RankByTeam = () => {
    const { idTeam } = useParams();

    const Info = InfoTeam({ idTeam });

    return (
        <div className="rank-by-team"><RankOneGroup letter={Info[2]} /></div>
    )
}

export default RankByTeam;
