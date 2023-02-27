import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom";
import { getGroupByLetter } from "../../apis/groupAPI";
import './RankOneGroup.css'

// cái này để khi ấn vào Bảng xếp hạng khi xem chi tiết 1 đội
const RankOneGroup = ({ letter }) => {
    const [rankGroup, setRankGroup] = useState({});

    const idTeam = useParams().idTeam;

    const loadRankGroup = async () => {
        const result = await getGroupByLetter(letter);
        setRankGroup(result);
    }

    var pointTeamGroup = [];
    const teamOfGroup = rankGroup.teams;

    for (var i = 0; i < 4; i++) {
        pointTeamGroup.push({
            id: teamOfGroup && teamOfGroup[i].country,
            name: teamOfGroup && teamOfGroup[i].name,
            letter: teamOfGroup && teamOfGroup[i].group_letter,
            point: teamOfGroup && teamOfGroup[i].group_points,
            wins: teamOfGroup && teamOfGroup[i].wins,
            draws: teamOfGroup && teamOfGroup[i].draws,
            losses: teamOfGroup && teamOfGroup[i].losses,
            goals_for: teamOfGroup && teamOfGroup[i].goals_for,
            goals_against: teamOfGroup && teamOfGroup[i].goals_against,
            diff: teamOfGroup && teamOfGroup[i].goal_differential
        })
    }

    pointTeamGroup = pointTeamGroup.sort((pointTeam1, pointTeam2) => {
        if (pointTeam1.point !== pointTeam2.point) return pointTeam2.point - pointTeam1.point;
        else return pointTeam2.diff - pointTeam1.diff;
    })

    useEffect(() => {
        loadRankGroup();
    }, [letter])

    return (
        <>
            {rankGroup && teamOfGroup && pointTeamGroup &&
                (
                    <div className="rank-a-group">
                        <div className="letter-group"><h4>Bảng {letter}</h4></div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Thứ hạng</th>
                                    <th>Đội tuyển</th>
                                    <th>Điểm</th>
                                    <th>Thắng</th>
                                    <th>Hòa</th>
                                    <th>Thua</th>
                                    <th>Số bàn thắng</th>
                                    <th>Số bàn thua</th>
                                    <th>Hiệu số</th>
                                </tr>
                            </thead>
                            <>
                                {pointTeamGroup.map((team, index) => {
                                    return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><NavLink className='nav-team' to={`/team/${team.id}`}>{team?.name}</NavLink></td>
                                                <td>{team?.point}</td>
                                                <td>{team?.wins}</td>
                                                <td>{team?.draws}</td>
                                                <td>{team?.losses}</td>
                                                <td>{team?.goals_for}</td>
                                                <td>{team?.goals_against}</td>
                                                <td>{team?.diff}</td>
                                            </tr>
                                        </tbody>

                                    )
                                })}

                            </>
                        </table>

                    </div>
                )}
        </>
    )
}

export default RankOneGroup;
