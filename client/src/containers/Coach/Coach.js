import { useEffect, useState } from "react"
import { getCoachByTeam } from "../../apis/coachAPI";

const Coach = ({ idTeam }) => {
    const [coach, setCoach] = useState({});

    const loadCoach = async () => {
        const result = await getCoachByTeam(idTeam);
        setCoach(result);
    }

    useEffect(() => {
        loadCoach();
    }, [idTeam])

    return coach;
}

export default Coach;
