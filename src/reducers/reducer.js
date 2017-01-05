import ActionTypes from 'actions/actionTypes';
import * as rs from 'utils/requestStatus';

const profile = {
  data: {
    username: '',
    level: '',
    games: {
      quick: {
        wins: ''
      },
      competitive: {
        wins: '',
        lost: '',
        played: ''
      }
    },
    playtime: {
      quick: '',
      competitive: ''
    },
    avatar: '',
    competitive: {
      rank: '',
      rank_img: ''
    },
    levelFrame: '',
    star: ''
  }
};

const heroes = {
  dataOfCompetition: [],
  dataOfQuick: []
};

const allHeroes = {
  competition: {
    fireTime: '',
    objectiveTime: ''
  },
  quick: {
    fireTime: '',
    objectiveTime: ''
  }
};

const initialState = {
  profile: {
    ...profile
  },
  heroes: {
    ...heroes
  },
  allHeroes: {
    ...allHeroes
  },
  requests: {
    profile: {
      ...rs.request
    },
    heroesOfCompetition: {
      ...rs.request
    },
    heroesOfQuick: {
      ...rs.request
    },
    allHeroesOfCompetition: {
      ...rs.request
    },
    allHeroesOfQuick: {
      ...rs.request
    }
  }
};

export default function reducer(state = initialState, action) {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.GET_PROFILE + '_PENDING':
      return {
        ...state,
        requests: {
          ...state.requests,
          profile: {
            ...rs.pending
          }
        }
      }
    case ActionTypes.GET_PROFILE + '_FULFILLED':
      if (!payload.data.statusCode) {
        // FULFILLED
        return {
          ...state,
          profile: {
            ...state.profile,
            data: payload.data.data
          },
          requests: {
            ...state.requests,
            profile: {
              ...rs.fulfilled
            }
          }
        }
      } else {
        // REJECTED             
        return {
          ...state,
          requests: {
            ...state.requests,
            profile: {
              ...rs.rejected,
              error: payload.data.error
            }
          }
        }
      }
    case ActionTypes.GET_PROFILE + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          profile: {
            ...rs.rejected,
            error: payload
          }
        }
      }
    case ActionTypes.GET_HEROES_COMPETITION + '_PENDING':
      return {
        ...state,
        requests: {
          ...state.requests,
          heroesOfCompetition: {
            ...rs.pending
          }
        }
      }
    case ActionTypes.GET_HEROES_COMPETITION + '_FULFILLED':
      return {
        ...state,
        heroes: {
          ...state.heroes,
          dataOfCompetition: payload.data.slice(0, 3)
        },
        requests: {
          ...state.requests,
          heroesOfCompetition: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.GET_HEROES_COMPETITION + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          heroesOfCompetition: {
            ...rs.rejected,
            error: payload
          }
        }
      }
    case ActionTypes.GET_HEROES_QUICK + '_PENDING':
      return {
        ...state,
        requests: {
          ...state.requests,
          heroesOfQuick: {
            ...rs.pending
          }
        }
      }
    case ActionTypes.GET_HEROES_QUICK + '_FULFILLED':
      return {
        ...state,
        heroes: {
          ...state.heroes,
          dataOfQuick: payload.data.slice(0, 3)
        },
        requests: {
          ...state.requests,
          heroesOfQuick: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.GET_HEROES_QUICK + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          heroesOfQuick: {
            ...rs.rejected,
            error: payload
          }
        }
      }
    case ActionTypes.GET_ALL_HEROES_COMPETITION + '_PENDING':
      return {
        ...state,
        requests: {
          ...state.requests,
          allHeroesOfCompetition: {
            ...rs.pending
          }
        }
      }
    case ActionTypes.GET_ALL_HEROES_COMPETITION + '_FULFILLED':
      return {
        ...state,
        allHeroes: {
          ...state.allHeroes,
          competition: {
            fireTime: payload.data.TimeSpentonFire,
            objectiveTime: payload.data.ObjectiveTime
          }
        },
        requests: {
          ...state.requests,
          allHeroesOfCompetition: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.GET_ALL_HEROES_COMPETITION + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          allHeroesOfCompetition: {
            ...rs.rejected,
            error: payload
          }
        }
      }


    case ActionTypes.GET_ALL_HEROES_QUICK + '_PENDING':
      return {
        ...state,
        requests: {
          ...state.requests,
          allHeroesOfQuick: {
            ...rs.pending
          }
        }
      }
    case ActionTypes.GET_ALL_HEROES_QUICK + '_FULFILLED':
      return {
        ...state,
        allHeroes: {
          ...state.allHeroes,
          quick: {
            fireTime: payload.data.TimeSpentonFire,
            objectiveTime: payload.data.ObjectiveTime
          }
        },
        requests: {
          ...state.requests,
          allHeroesOfQuick: {
            ...rs.fulfilled
          }
        }
      }
    case ActionTypes.GET_ALL_HEROES_QUICK + '_REJECTED':
      return {
        ...state,
        requests: {
          ...state.requests,
          allHeroesOfQuick: {
            ...rs.rejected,
            error: payload
          }
        }
      }
    default:
      return state;
  }
}