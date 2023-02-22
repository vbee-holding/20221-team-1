import { useEffect, useState } from "react"
import { getTeam } from "../../apis/teamAPI";

export const InfoTeam = ({ idTeam }) => {
    const [team, setTeam] = useState({});

    const loadTeam = async () => {
        try {
            const result = await getTeam(idTeam);
            setTeam(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadTeam();
    }, [idTeam])

    return team && [team.flag, team.name, team.group_letter];
}
