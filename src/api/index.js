const basePath = "https://api.myjson.com";

class API {
  static get(path) {
    const headers = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    });
    return fetch(`${basePath}${path}`, { method: "GET", headers }).then(
      response => response.json()
    );
  }
}

export default API;
