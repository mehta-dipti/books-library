import axios from "axios";

export const fetchBooks = async (page, filters) => {
  let filterString = "";
  if (filters && Object.keys(filters).length) {
    let filterQuery = [];
    for (const [key, value] of Object.entries(filters)) {
      filterQuery.push(`${key}=${encodeURI(value)}`);
      filterString = filterQuery.join("&");
    }
  }

  return axios.get(`http://68.178.162.203:8080/application-test-v1.1/books${page.currentPage ? "?page=" + page.currentPage : ""}${page.sortDirection ? "&DIR=" + page.sortDirection : ""}${filterString.length ? "&" + filterString : ""}`).then((res) => {
    return Promise.resolve(res.data);
  });
};

export const postBooks = async (payload) => {
  return axios.post(`http://68.178.162.203:8080/application-test-v1.1/books`, payload).then((res) => {
    return Promise.resolve(res.data);
  });
};

export const updateBook = async (payload) => {
  return axios.put(`http://68.178.162.203:8080/application-test-v1.1/books/${payload.id}`, payload).then((res) => {
    return Promise.resolve(res.data);
  });
};
