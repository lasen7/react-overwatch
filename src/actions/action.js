import ActionTypes from './actionTypes';
//import { createAction } from 'redux-actions';

import * as service from 'services/service';

export const getProfile = (tag) => {
  return {
    type: ActionTypes.GET_PROFILE,
    payload: {
      promise: service.getProfile(tag)
    }
  }
};

export const getHeroes = (params) => {
  let action = {};

  if (params.mode === 'competitive') {
    action.type = ActionTypes.GET_HEROES_COMPETITION;
  } else {
    action.type = ActionTypes.GET_HEROES_QUICK;
  }

  return {
    type: action.type,
    payload: {
      promise: service.getHeroes(params)
    }
  }
};

export const getAllHeroes = (params) => {
  let action = {};

  if (params.mode === 'competitive') {
    action.type = ActionTypes.GET_ALL_HEROES_COMPETITION;
  } else {
    action.type = ActionTypes.GET_ALL_HEROES_QUICK;
  }

  return {
    type: action.type,
    payload: {
      promise: service.getAllHeroes(params)
    }
  }
};