class Blog {
  constructor() {
    this.posts = [];
    this.comments = {};
  }
  getBlogPosts() {
    return this.posts.length
      ? this.posts.map((post) => post.title)
      : `There are 0 blog posts`;
  }
  addBlogPost(title, author, genre) {
    this.comments[title] = { comments: [] };
    this.posts.push({ title, author, genre });
  }
  getBlogAuthors() {
    return this.posts.map((post) => post.author);
  }
  getSpecificBlogAuthor(searchedTitle) {
    let correctEntry = this.posts.find((post) => post.title === searchedTitle);
    return correctEntry
      ? correctEntry.author
        ? correctEntry.author
        : `Blog has no author`
      : `No such blog post`;
  }
  getBlogsFromGenre(searchedGenre) {
    return this.posts.filter((post) => post.genre === searchedGenre);
  }
  getAllGenres() {
    let genres = this.posts.map((post) => post.genre);
    return genres.length ? genres : `There are no genres available`;
  }
  addComment(postTitle, user, comment) {
    this.comments[postTitle].comments.push({ user, comment });
  }
  getBlogComments(postTitle) {
    return this.comments[postTitle].comments.length
      ? [this.comments[postTitle]]
      : [];
  }
  getCommentsBy(user) {
    let out = {
      user,
      comments: [],
    };
    Object.keys(this.comments).forEach((title) => {
      let comments = this.comments[title].comments;
      comments.forEach((comment) => {
        if (comment.user === user)
          out.comments.push({ article: title, comment: comment.comment });
      });
    });
    return out;
  }
  deleteBlog(titleToDelete) {
    this.posts = this.posts.filter((post) => post.title !== titleToDelete);
    delete this.comments[titleToDelete];
  }
}

module.exports = Blog;
