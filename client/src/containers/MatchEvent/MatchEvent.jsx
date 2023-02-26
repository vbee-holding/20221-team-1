import './MatchEvent.css';

const MatchEvent = (props) => {
    const home_team_event = props.event_home;
    const away_team_event = props.event_away;

    var eventMatch = [...home_team_event, ...away_team_event];
    eventMatch = eventMatch.sort((event1, event2) => {
        if (Number(event1.time.replace('\'', '')) !== Number(event2.time.replace('\'', ''))) return event1.time - event2.time;
        else return event1.id - event2.id
    })

    return (
        <>
            {home_team_event && away_team_event && eventMatch && (
                <div className="match-event-detail">
                    {eventMatch.map((event, index) => {
                        return (
                            <div key={index} className="team-event-detail">
                                <div className="info-of-event">
                                    <div className="type-of-event">
                                        {event?.type_of_event}
                                    </div>
                                    <div className="time-of-event">
                                        {event?.time}
                                    </div>
                                </div>
                                <div className="player-of-event">
                                    {event.player}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </>
    )
}

export default MatchEvent;
