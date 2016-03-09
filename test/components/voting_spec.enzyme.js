import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';

import Voting from '../../src/components/voting';

describe('enzyme render testing', () => {
    it('renders just the winner when there is one', () => {
        const component = mount(
            <Voting winner="Trainspotting" />
        );
        const buttons = component.find('button');
        expect(buttons.length).to.equal(0);

        const winner = component.ref('winner');
        expect(winner).to.be.ok;
        expect(winner.text()).to.equal('winner is Trainspotting');
    });

    it('renders a pair of buttons', () =>{
        const component = mount(
            <Voting pair={["Trainspotting", "28 Days Later"]} />
        );
        const buttons = component.find('button');
        expect(buttons.length).to.equal(2);

        expect(component.find('button').at(0).text()).to.equal('Trainspotting');
        expect(component.find('button').at(1).text()).to.equal('28 Days Later');
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
        const component = mount(
            <Voting winner="Trainspotting" />
        );
        const buttons = component.find('button');
        buttons[0].simulate('click');
        expect(votedWith).to.equal('Trainspotting');
    });
});