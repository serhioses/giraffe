import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-dom/test-utils';

import ConnectedDeleteAd, {DeleteAd} from '../../js/dev/components/DeleteAd';

describe('DeleteAd component', () => {
    it('should exist', () => {
        expect(DeleteAd).toExist();
    });

    // it('should delete ad if user confirms deleting', () => {
    //     var deleteAd, spy;
        
    //     spy = expect.createSpy();
    //     deleteAd = TestUtils.renderIntoDocument(<DeleteAd dispatch={spy} routeParams={{id: 1}} />);

    //     expect(spy).toHaveBeenCalled();
    // });

    // it('should not delete ad if user does not confirm deleting', () => {
    //     var deleteAd, spy;

    //     spy = expect.createSpy();
    //     deleteAd = TestUtils.renderIntoDocument(<DeleteAd dispatch={spy} routeParams={{id: 1}} />);

    //     expect(spy).toNotHaveBeenCalled();
    // });
});
