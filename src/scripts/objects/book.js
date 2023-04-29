import { getBookCover } from "../services/book-cover.js";

const book = {
  title: "",
  author: "",
  coverIds: '',
  coverUrl: "",
  description: "",
  epubUrl: "",
  setBookInfo(source1, source2) {
    //const random = Math.floor(Math.random() * this.coverIds.length);

    this.title = source1?.title;
    this.description = source1?.description;
    this.coverIds = source1?.covers;
    console.log(this.coverIds);
    this.coverUrl = getBookCover(this.coverIds[0]);
    this.author = source2?.authors[0].name;
    this.epubUrl = source2?.formats["application/epub+zip"];
  },
};

export { book };
