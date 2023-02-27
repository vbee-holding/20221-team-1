import { useEffect, useState } from "react"
import { getTeam } from "../../apis/teamAPI";

export const InfoTeam = ({ idTeam }) => {
    const [team, setTeam] = useState({});
    // const [loading, setLoading] = useState(true);

    const loadTeam = async () => {
        const result = await getTeam(idTeam);
        setTeam(result);
        // setLoading(false)
    }

    useEffect(() => {
        if (idTeam) {
            loadTeam();
        }
    }, [idTeam])

    return team && [team.flag, team.name, team.group_letter];
}
