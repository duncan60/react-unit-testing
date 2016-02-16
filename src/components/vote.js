import React from 'react';

class Vote extends React.Component {
    constructor(props) {
        super(props);
    }
    isDisabled(entry) {
        return !!this.props.hasVoted;
    }
    hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    }
    render() {
        const {
            pair,
            vote
        } = this.props;
        return (
            <div className="voting">
                {this.props.pair.map((entry, idx) => {
                    return (
                        <button
                            key={idx}
                            disabled={this.isDisabled()}
                            onClick={() => this.props.vote(entry)}>
                            <h1>{entry}</h1>
                            {
                                this.hasVotedFor(entry) ? <span className="label">Voted</span> : null
                            }
                        </button>
                    )
                })}
            </div>
        );
    }
};

Vote.propTypes = {
    pair    : React.PropTypes.array,
    hasVoted: React.PropTypes.string,
    vote    : React.PropTypes.func
};
Vote.defaultProps = {
    pair    : [],
    hasVoted: '',
    vote    : () => {}
};
export default Vote;
