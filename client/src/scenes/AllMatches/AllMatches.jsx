import { useEffect } from "react";
import { useState } from "react"
import { getAllMatch } from "../../apis/matchAPI";
import Match from "../../containers/Match/Match";
import "./AllMatches.css"

const AllMatches = () => {
    const [matches, setMatches] = useState([]);

    const loadMatches = async () => {
        const result = await getAllMatch();
        setMatches(result);
    }

    var dateMatch = [];
    for (var i = 0; i < matches.length; i++) {
        var date = new Date(matches[i].datetime)
        dateMatch.push({
            day: date.getDate(),
            month: date.getMonth() + 1
        })
    }
    // lọc ngày trùng nhau 
    dateMatch = dateMatch.filter((date, index, self) =>
        index === self.findIndex((t) => (
            t.day === date.day && t.month === date.month
        ))
        // sắp xếp ngày tháng
    ).sort((date1, date2) => {
        if (date1.month !== date2.month) return date1.month - date2.month;
        else return date1.day - date2.day;
    })

    useEffect(() => {
        loadMatches();
    }, [])


    return (
        <div className="all-matches">
            *Nếu trang không hiển thị gì, vui lòng refresh lại trang
            {matches && dateMatch &&
                dateMatch.map((date, index) => {
                    return (
                        <div key={index}>
                            <div className="date-match">
                                Ngày thi đấu {`${date.day}-${date.month}`}
                            </div>

                            <div className="about-day-match">
                                {
                                    matches.map((match, index) => {
                                        var _date = new Date(match.datetime);
                                        if (_date.getDate() === date.day && _date.getMonth() + 1 === date.month) {
                                            return (
                                                <div className="match" key={index}>
                                                    <Match idMatch={match.id} />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default AllMatches;
