import { useEffect, useState } from "react";
import { getGroupMatchByTeam } from "../../apis/groupAPI";

const GroupByTeam = (props) => {

    const [groupMatchByTeam, setGroupMatchByTeam] = useState([]);

    const idTeam = props.idTeam;

    useEffect(() => {
        loadGroupMatchTeam();
    }, [])

    const loadGroupMatchTeam = async () => {
        const result = await getGroupMatchByTeam(idTeam);
        setGroupMatchByTeam(result);
    }

    return groupMatchByTeam;
}

export default GroupByTeam;