import React from 'react';
import {findDOMNode} from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

import Voting from '../../src/components/voting';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate, createRenderer } = TestUtils;

describe('renderIntoDocument testing', () => {
    it('renders a pair of buttons', () =>{
        const component = renderIntoDocument(
            <Voting pair={["Trainspotting", "28 Days Later"]} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(findDOMNode(buttons[0]).textContent).to.equal('Trainspotting');
        expect(findDOMNode(buttons[1]).textContent).to.equal('28 Days Later');
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
        const component = renderIntoDocument(
            <Voting
                pair={["Trainspotting", "28 Days Later"]}
                vote={vote}/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(findDOMNode(buttons[0]));
        expect(votedWith).to.equal('Trainspotting');
    });

    it('disables buttons when user has voted', () => {
        const component = renderIntoDocument(
            <Voting
                pair={["Trainspotting", "28 Days Later"]}
                hasVoted="Trainspotting" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(findDOMNode(buttons[0]).hasAttribute('disabled')).to.equal(true);
        expect(findDOMNode(buttons[1]).hasAttribute('disabled')).to.equal(true);
    });

    it('adds label to the voted entry', () => {
        const component = renderIntoDocument(
            <Voting
                pair={["Trainspotting", "28 Days Later"]}
                hasVoted="Trainspotting" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(findDOMNode(buttons[0]).textContent).to.contain('Voted');
    });

    it('renders just the winner when there is one', () => {
        const component = renderIntoDocument(
            <Voting winner="Trainspotting" />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(0);

        const winner = findDOMNode(component.refs.winner);
        expect(winner).to.be.ok;
        expect(winner.textContent).to.equal('winner is Trainspotting');
    });
});

describe('Shallow Rendering', () => {
    it('renders a pair of buttons', () =>{
        const renderer = createRenderer();
        renderer.render(<Voting pair={["Trainspotting", "28 Days Later"]} />);
        const component = renderer.getRenderOutput();
        const childrenPair = component.props.children.props.pair;
        expect(childrenPair.length).to.equal(2);
        expect(childrenPair).to.deep.equal(["Trainspotting", "28 Days Later"]);
    });
})