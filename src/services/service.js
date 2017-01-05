import request from 'utils/request';

export const getProfile = ({
  tag,
  region = 'kr'
}) => {
  return request({
    url: `https://api.lootbox.eu/pc/${region}/${tag}/profile`,
    method: 'get'
  });
};

export const getHeroes = ({
  tag,
  region = 'kr',
  mode
}) => {
  return request({
    url: `https://api.lootbox.eu/pc/${region}/${tag}/${mode}/heroes`,
    method: 'get'
  });
};

export const getAllHeroes = ({
  tag,
  region = 'kr',
  mode
}) => {
  return request({
    url: `https://api.lootbox.eu/pc/${region}/${tag}/${mode}/allHeroes/`,
    method: 'get'
  });
};