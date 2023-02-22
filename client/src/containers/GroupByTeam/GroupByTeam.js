import { useEffect, useState } from "react";
import { getGroupMatchByTeam } from "../../apis/groupAPI";

const GroupByTeam = ({ idTeam }) => {
    const [groupMatchByTeam, setGroupMatchByTeam] = useState([]);

    const loadGroupMatchTeam = async () => {
        const result = await getGroupMatchByTeam(idTeam);
        setGroupMatchByTeam(result);
    }

    useEffect(() => {
        loadGroupMatchTeam();
    }, [])

    return groupMatchByTeam;
}

export default GroupByTeam;
