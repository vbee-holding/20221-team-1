import { useEffect, useState } from "react"
import { getTeam } from "../../apis/teamAPI";

export const InfoTeam = (props) => {
    const [team, setTeam] = useState({});

    useEffect(() => {
        loadTeam();
    })

    const idTeam = props.idTeam;

    const loadTeam = async () => {
        const result = await getTeam(idTeam);
        setTeam(result);
    }

    // loadTeam();

    return team && [team.flag, team.name, team.group_letter];
}

