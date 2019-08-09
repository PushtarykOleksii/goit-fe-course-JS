const baseUrl = "https://pixabay.com/api/?";
const pictureHorizont = "image_type=photo&orientation=horizontal";
const key = "&key=13241537-06d8871706b8937518ecf25ca";

export default {
  page: 1,
  query: "",
  fetchPictures() {
    const requestParam = `&q=${this.query}&page=${this.page}&per_page=12`;

    return fetch(baseUrl + pictureHorizont + requestParam + key)
      .then(response => response.json())
      .then(parseResponse => {
        this.incrementPage();
        return parseResponse.hits;
      });
  },
  get serchQuery() {
    return this.query;
  },
  set serchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  } 
};
