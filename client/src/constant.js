export const TABLE_HEADER = {
    'goal': [
        {
            header: "Cầu thủ",
            accessor: "name",
        },
        {
            header: "Đội tuyển",
            accessor: "idTeam",
        },
        {
            header: "Bàn thắng",
            accessor: "goal",
        },
    ],
    'assist': [
        {
            header: "Cầu thủ",
            accessor: "name",
        },
        {
            header: "Đội tuyển",
            accessor: "idTeam",
        },
        {
            header: "Kiến tạo",
            accessor: "assist",
        },
    ],
    "yellow_card": [
        {
            header: "Cầu thủ",
            accessor: "name",
        },
        {
            header: "Đội tuyển",
            accessor: "idTeam",
        },
        {
            header: "Thẻ vàng",
            accessor: "num_yellow_card",
        },
    ],
    "red_card": [
        {
            header: "Cầu thủ",
            accessor: "name",
        },
        {
            header: "Đội tuyển",
            accessor: "idTeam",
        },
        {
            header: "Thẻ đỏ",
            accessor: "num_red_card",
        },
    ],
    "attendance": [
        {
            header: "Trận đấu",
            accessor: "match",
        },
        {
            header: "Lượt mua vé",
            accessor: "attendance",
        },
    ]
}


export const SELECT_OPTION = [
    { label: "Vua phá lưới", value: "goal" },
    { label: "Vua kiến tạo", value: "assist" },
    { label: "Thẻ vàng", value: "yellow_card" },
    { label: "Thẻ đỏ", value: "red_card" },
    { label: "Lượt mua vé", value: "attendance" },
];