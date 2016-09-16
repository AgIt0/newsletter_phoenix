import React from 'react';
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function buildHeaders() {
  const authToken = localStorage.getItem('authToken');

  return { ...defaultHeaders, Authorization: authToken };
}

function buildUrl(url) {
  return `http://localhost:4000/${url}`;
}

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

export function httpGet(url) {
  return fetch(buildUrl(url), {
    headers: buildHeaders(),
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function httpPost(url, data) {
  const body = JSON.stringify(data);

  return fetch(buildUrl(url), {
    method: 'post',
    headers: buildHeaders(),
    body: body
  })
  .then(checkStatus)
  .then(parseJSON);
}

export function httpDelete(url) {
  return fetch(buildUrl(url), {
    method: 'delete',
    headers: buildHeaders(),
  })
  .then(checkStatus)
  .then(parseJSON);
}
