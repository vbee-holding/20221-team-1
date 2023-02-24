import { useParams } from "react-router-dom"
import RankOneGroup from "../../containers/RankOneGroup/RankOneGroup";
import { InfoTeam } from "../../containers/Team/Team";
import './RankByTeam.css'
import { SubNavForTeam } from "../../components/subnav/SubNav";
const RankByTeam = () => {
    const { idTeam } = useParams();

    const Info = InfoTeam({ idTeam });

    return (
        <div>
        <SubNavForTeam idTeam={idTeam} />
        <div className="rank-by-team"><RankOneGroup letter={Info[2]} /></div>
        </div>
    )
}

export default RankByTeam;
