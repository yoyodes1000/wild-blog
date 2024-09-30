export class Article {
  id: number;
  title: string;
  author: string;
  content: string;
  image :string;
  isPublished: boolean;
  comment: string;

  constructor(id: number, title: string, author: string, content: string, image: string, isPublished: boolean, comment: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
    this.image = image;
    this.isPublished = isPublished;
    this.comment = comment;
  }
}