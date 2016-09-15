import React from 'react';
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

export function renderErrorsFor(errors, ref) {
  if (!errors) return false;

  return errors.map((error, i) => {
    if (error[ref]) {
      return (
          <div key={i} className="error">
          {error[ref]}
        </div>
      );
    }
  });
}
function checkStatus(response) {
  if(response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

export function httpPost(url, data) {
  url = `http://localhost:4000/${url}`;
  const headers = {
    Authorization: localStorage.getItem('authToken'),
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const body = JSON.stringify(data);

  return fetch(url, {
    method: 'post',
    headers: headers,
    body: body
  })
  .then(checkStatus)
  .then(parseJSON);
}
