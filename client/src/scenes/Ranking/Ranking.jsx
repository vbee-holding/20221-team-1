import { useEffect, useState } from 'react';
import { getAllGroup } from '../../apis/groupAPI';
import RankOneGroup from '../../containers/RankOneGroup/RankOneGroup';
import './Ranking.css';

const Ranking = () => {
    const [rankAll, setRankAll] = useState([]);

    const loadAllGroup = async () => {
        const result = await getAllGroup();
        setRankAll(result);
    }

    var letterAllGroup = [];
    for (var i = 0; i < 8; i++) {
        letterAllGroup.push(rankAll && rankAll[i]?.letter)
    }

    letterAllGroup = letterAllGroup.sort()

    useEffect(() => {
        loadAllGroup();
    }, [])

    return (
        <div className="ranking-all-group">
            {rankAll && letterAllGroup.map((letter, index) => {
                return (
                    <div key={index}>
                        <RankOneGroup letter={letter} />
                    </div>
                )
            })}
        </div>
    )
}

export default Ranking;
