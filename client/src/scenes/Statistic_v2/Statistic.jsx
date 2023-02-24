import React, { useEffect, useState } from "react";
import "./Statistic.css";
import { fetchApi } from "../../apis";
import { SELECT_OPTION, TABLE_HEADER } from "../../constant";
import DOMAIN from "../../config";
import Select from "./Select"
import Table from "../../containers/Table/Table";

const Statistic = () => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(SELECT_OPTION[0]);
    const [tableHeader, setTableHeader] = useState(
        TABLE_HEADER[selected.value]
    );

    const handleSelected = (_selected) => {
        setSelected(_selected);
        setTableHeader(TABLE_HEADER[_selected.value]);
    };

    const loadData = async (field) => {
        const listPlayer = await fetchApi(`${DOMAIN}/players`);
        switch (selected.value) {
            case "goal":
            case "assist":
                listPlayer.sort((a, b) => b[field] - a[field]);
                listPlayer.length = 10;
                setData(listPlayer);
                break;

            case "yellow_card":
            case "red_card":
                const statisticRaw = await fetchApi(`${DOMAIN}/statistic`);
                const statistic = statisticRaw[`top_${selected.value}`].reduce(
                    (acc, value) => {
                        return { ...acc, [value.idPlayer]: value };
                    },
                    {}
                );
                const filter = listPlayer.reduce((acc, value) => {
                    return statistic[value.id]
                        ? [...acc, { ...value, ...statistic[value.id] }]
                        : [...acc];
                }, []);
                setData(filter);
                break;
            case "attendance":
                const listMatches = await fetchApi(`${DOMAIN}/matches`);
                listMatches.sort((a, b) => b["attendance"] - a["attendance"]);
                listMatches.length = 10;
                const _listMatches = listMatches.map((match) => {
                    return {
                        match: `${match.home_team.name}-${match.away_team.name}`,
                        attendance: match.attendance,
                    };
                });
                setData(_listMatches);
                break;
            default:
                setData([]);
                break;
        }
    };

    useEffect(() => {
        setData([]);
        loadData(selected.value);
    }, [selected.value]);

    return (
        <div className="container-statistic">
            <Select selected={selected} handleSelected={handleSelected} />
            <Table data={data} columns={tableHeader} />
        </div>
    );
};

export default Statistic;
