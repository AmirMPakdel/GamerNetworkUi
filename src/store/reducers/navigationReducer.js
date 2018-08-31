import * as actionTypes from '../actions/actionTypes';
import _ from 'lodash';

const initialState = { selectedTab: 'Home' };

export default (oldState = initialState, action) => {
    //this is for changing in state immutably
    const clonedSatate = _.cloneDeep(oldState);

    // handling the dispatched actions 
    switch (action.type) {
        case actionTypes.TAB_CHANGED:
            clonedSatate.selectedTab = action.tabName;
            break;
        default:
            break;
    }

    return clonedSatate;
};
