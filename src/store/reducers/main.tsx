import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import { ACTIONS } from "../actions/main";

const initialState = {
    dragonList: [],
    routes: ['/home', '/login'],
    logged: false,
    blockSave: false,
    userInfo: {
        name: '',
        mail: ''
    },
}

const main = (state = initialState, action: any) => {
    switch (action.type) {
        case ACTIONS.doTheLoginStuff:
            return {
                ...state,
                logged: true,
            }
        case ACTIONS.doTheLogoffStuff:
            return {
                ...state,
                logged: false,
            }
        case ACTIONS.loadingData:
            return {
                ...state,
                blockSave: action.payload,
            }
        case ACTIONS.deleteTheDragon:
            const a = [...state.dragonList];
            // @ts-ignore
            a.splice(a.indexOf(action.payload), 1);
            return {
                ...state,
                dragonList: a,
            }
        case ACTIONS.setupDragon:
            return {
                ...state,
                dragonList: action.payload
            }
        default:
            return state;
    }
}



export default createStore(main, applyMiddleware(thunk));