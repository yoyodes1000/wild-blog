export class Article {
  id: number;
  title: string;
  author: string;
  content: string;
  image :string;
  isPublished: boolean;
  comment: string;
  isLiked: boolean;

  constructor(id: number, title: string, author: string, content: string, image: string, isPublished: boolean, comment: string, isLiked: boolean = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
    this.image = image;
    this.isPublished = isPublished;
    this.comment = comment;
    this.isLiked = isLiked;
  }
}