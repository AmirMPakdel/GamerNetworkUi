import * as actionTypes from './actionTypes';

// when calling this, pass a argument as the selected tab name
export const onTabChanged = tabName => {
    return {
        type: actionTypes.TAB_CHANGED,
        tabName
    };
};
