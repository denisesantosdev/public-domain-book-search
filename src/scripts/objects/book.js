const book = {
  title: "",
  author: "",
  coverIds: "",
  description: "",
  epubUrl: "",
  setBookInfo(source1, source2) {
    this.title = source1.title;
    this.description = source1.description;
    this.coverIds = source1.covers;
    this.author = source2.authors[0].name;
    this.epubUrl = source2.formats["application/epub+zip"];
  },
};

export { book };
