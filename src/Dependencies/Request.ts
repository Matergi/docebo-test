import {StartLoading, StopLoading} from 'stateUpdaters';
import type {DetailRequest} from 'types';

const getHeader = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default async (detail: DetailRequest): Promise<any> => {
  detail.dispatch && detail.dispatch(StartLoading(detail.loadingId));
  let options = {};

  switch (detail.method) {
    case 'GET':
      options = getHeader;
      options = {...options};
      break;
    default:
      options = getHeader;
      options = {...options};
      break;
  }

  options = {
    ...options,
    headers: {
      ...detail.headers,
    },
  };

  let {url} = detail;
  if (detail.query) {
    url = Object.keys(detail.query).reduce(
      (accumulator, current, index): string => {
        let newAccumultator = accumulator;
        if (!newAccumultator || !detail.query) {
          return '';
        }

        if (current === 'params' && Array.isArray(detail.query[current])) {
          detail.query[current].forEach((key: string, indexParam: number) => {
            if (index !== 0 || indexParam > 0) {
              newAccumultator += '&';
            }

            newAccumultator += `${key}=${detail.params[key]}`;
          });
          return newAccumultator;
        }

        if (index !== 0) {
          newAccumultator += '&';
        }

        newAccumultator += `${current}=${detail.query[current]}`;
        return newAccumultator;
      },
      `${url}?`,
    );
  }

  detail.params &&
    Object.keys(detail.params).forEach((key) => {
      url = url.replace(`{${key}}`, detail.params[key]);
    });

  detail.debug && console.log('request', {url, options});

  const result = await fetch(url, options);
  const response = await result.json();
  detail.dispatch && detail.dispatch(StopLoading(detail.loadingId));

  detail.debug && console.log('response', response);

  if (response.errors != null) {
    throw new Error(response.message);
  }

  return response;
};
