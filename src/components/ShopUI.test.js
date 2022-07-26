import React from 'react';
import renderer from 'react-test-renderer';
import ShopUI from './ShopUI';

describe('Mocking Shop page', () => {
    it('Renders shop page', () => {
        const component = renderer.create(<ShopUI />);
        expect(component).toMatchSnapshot();
    });
});