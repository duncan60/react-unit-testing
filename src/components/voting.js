import React from 'react';
import Vote from './vote';

let Winner = ({winner}) => (
    <p>winner is { winner }</p>
);

class Voting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            winner,
        } = this.props;

        return (
            <div >
                {winner ?
                    <div ref="winner">
                        <Winner winner={winner} />
                    </div> :
                    <Vote {...this.props} />
                }
            </div>
        );
    }
};

Voting.propTypes = {
    pair    : React.PropTypes.array,
    hasVoted: React.PropTypes.string,
    winner  : React.PropTypes.string,
    vote    : React.PropTypes.func
};
Voting.defaultProps = {
    pair    : [],
    hasVoted: '',
    winner  : '',
    vote    : () => {}
};
export default Voting;
