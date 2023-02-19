import Match from '../../containers/Match/Match';
import './MatchBracket.css';

const MatchBracket = () => {
    return (
        <div className="match-bracket">
            <div class="row">
                <div class="column">
                    <div class="row">
                        <div class="column">
                            <div class="row">
                                <div class="column">
                                    <div class="row">
                                        <div class="column">
                                            <div><Match idMatch={53} isBracket={true} /></div>
                                            <div class="border"></div>
                                            <div><Match idMatch={54} isBracket={true} /></div>
                                        </div>
                                        <div><Match idMatch={57} isBracket={true} /></div>
                                    </div>

                                    <div class="row">
                                        <div class="column">
                                            <div><Match idMatch={49} isBracket={true} /></div>
                                            <div><Match idMatch={50} isBracket={true} /></div>
                                        </div>
                                        <div><Match idMatch={58} isBracket={true} /></div>
                                    </div>
                                </div>
                                <div><Match idMatch={61} isBracket={true} /></div>
                            </div>

                            <div class="row">
                                <div class="column">
                                    <div class="row">
                                        <div class="column">
                                            <div><Match idMatch={51} isBracket={true} /></div>
                                            <div><Match idMatch={52} isBracket={true} /></div>
                                        </div>
                                        <div><Match idMatch={60} isBracket={true} /></div>
                                    </div>

                                    <div class="row">
                                        <div class="column">
                                            <div><Match idMatch={55} isBracket={true} /></div>
                                            <div><Match idMatch={56} isBracket={true} /></div>
                                        </div>
                                        <div><Match idMatch={59} isBracket={true} /></div>
                                    </div>
                                </div>
                                <div><Match idMatch={62} isBracket={true} /></div>
                            </div>
                        </div>
                        <div><Match idMatch={64} isBracket={true} /></div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MatchBracket;
