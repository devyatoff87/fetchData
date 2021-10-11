function makeRequest(method, url, body = null, headers) {
  if (method == "GET") {
    return fetch(url)
      .then((response) => response)
      .then((data) => data.json());
  }

  const settings = {
    method: method,
    body: JSON.stringify(body),
    headers: !headers ? { "Content-Type": "application/json" } : headers,
  };

  //POST REQ
  return fetch(url, settings).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return response.json().then((error) => {
      const e = new Error("Something went wrong");
      e.data = error;
      throw e;
    });
  });
}

export const getData = (url) => {
  return makeRequest("GET", url)
    .then((responseData) => responseData)
    .catch((err) => err);
};

export const sendData = (url, body, headers = null) => {
  return makeRequest("POST", url, body, headers)
    .then((responseData) => responseData)
    .catch((err) => err);
};
