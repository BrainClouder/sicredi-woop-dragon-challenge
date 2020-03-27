import axios from 'axios';

const setupDragon: string = 'SET-DRAGON';
const deleteTheDragon: string = 'DELETE-DRAGON';
const loadingData: string = 'LOADING-DATA';
const doTheLoginStuff: string = 'LOGIN';
const doTheLogoffStuff: string = 'LOGOFF';

export const ACTIONS = {
    setupDragon, deleteTheDragon, loadingData, doTheLoginStuff, doTheLogoffStuff
}

export const loadDragon = () => {
    return async (dispatch: any) => {
        const res = await axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
        console.log(res);
        dispatch({ type: ACTIONS.setupDragon, payload: res.data })
    }
}

export const deleteDragon = (dragon: any) => {
    return async (dispatch: any) => {
        await axios.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`);
        dispatch({ type: ACTIONS.deleteTheDragon, payload: dragon });

    }
}

export const postDragon = (newDragon: any) => {

    return async (dispatch: any) => {
        dispatch({type: ACTIONS.loadingData, payload: true});
        try {
            const verify = await axios.get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${newDragon.id}`);
            let dragonHandled = newDragon;
            dragonHandled.id = Math.floor(Math.random() * 999999 + 1000);
            await axios.post(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`, dragonHandled)
            
        } catch (error) {
            await axios.post(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/`, newDragon);
        }
        await dispatch(loadDragon());
        dispatch({type: ACTIONS.loadingData, payload: false});
    }
}

export const editDragon = (dragon: any) => {
    return async (dispatch: any) => {
        await axios.put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`, dragon);
        await dispatch(loadDragon());
    }
}