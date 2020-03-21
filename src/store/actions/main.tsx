import axios from 'axios';
import Axios from 'axios';

const setupDragon: string = 'SET-DRAGON';
const deleteTheDragon: string = 'DELETE-DRAGON';

export const ACTIONS = {
    setupDragon, deleteTheDragon
}

export const loadDragon = () => {
    return async (dispatch: any) => {
        const res = await axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon');
        console.log(res);
        dispatch({type: ACTIONS.setupDragon, payload: res.data})
    }
}

export const deleteDragon = (dragon: any) => {
    return async (dispatch: any) => {
        await Axios.delete(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`);
        dispatch({type: ACTIONS.deleteTheDragon, payload: dragon});
        
    }
}