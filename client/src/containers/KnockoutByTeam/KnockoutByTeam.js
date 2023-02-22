import { useEffect, useState } from "react"
import { getKnockoutByTeam } from "../../apis/knockoutAPI";

const KnockoutByTeam = (props) => {
    const [knockoutMatchByTeam, setKnockoutMatchByTeam] = useState([]);

    useEffect(() => {
        loadKnockoutByTeam();
    }, [])

    const idTeam = props.idTeam;

    const loadKnockoutByTeam = async () => {
        const result = await getKnockoutByTeam(idTeam);
        setKnockoutMatchByTeam(result);
    }

    return knockoutMatchByTeam;
}

export default KnockoutByTeam;
