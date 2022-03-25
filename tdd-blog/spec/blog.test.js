const Blog = require("../blog");

describe("Blog", () => {
  it("initializes with no blog posts", () => {
    let blog = new Blog();

    expect(blog.getBlogPosts()).toEqual("There are 0 blog posts");
  });

  it("allows adding a new blog", () => {
    let blog = new Blog();

    blog.addBlogPost("Blog Post 1");
    expect(blog.getBlogPosts()).toEqual(["Blog Post 1"]);
    blog.addBlogPost("Blog Post 2");
    blog.addBlogPost("Blog Post 3");
    expect(blog.getBlogPosts()).toEqual([
      "Blog Post 1",
      "Blog Post 2",
      "Blog Post 3",
    ]);
  });

  it("allows you to see all authors on the site", () => {
    let blog = new Blog();

    blog.addBlogPost("Life as a Cartoon", "Homer Simpson");
    expect(blog.getBlogAuthors()).toEqual(["Homer Simpson"]);
  });

  it("allows you to see who the author of a specific blog was", () => {
    let blog = new Blog();

    blog.addBlogPost("How to Swim Fast", "Michael Phelps");
    blog.addBlogPost("Movie Review: Avatar");
    expect(blog.getSpecificBlogAuthor("How to Swim Fast")).toEqual(
      "Michael Phelps"
    );
    expect(blog.getSpecificBlogAuthor("Makeup for Dummies")).toEqual(
      "No such blog post"
    );
    expect(blog.getSpecificBlogAuthor("Movie Review: Avatar")).toEqual(
      "Blog has no author"
    );
  });

  it("allows you to see all blogs of a specific genre", () => {
    let blog = new Blog();

    blog.addBlogPost("How to Swim Fast", "Michael Phelps", "Sports");
    blog.addBlogPost("I Love Football!", "Tom Brady", "Sports");
    blog.addBlogPost("A Blog About Shoes", "Steve Madden", "Fashion");
    blog.addBlogPost(
      "Gardening in High Altitudes",
      "The Garden Master",
      "Home Improvement"
    );
    expect(blog.getBlogsFromGenre("Sports")).toEqual([
      {
        title: "How to Swim Fast",
        author: "Michael Phelps",
        genre: "Sports",
      },
      {
        title: "I Love Football!",
        author: "Tom Brady",
        genre: "Sports",
      },
    ]);
  });

  it("allows you to see all available genres of blogs", () => {
    let blog = new Blog();
    expect(blog.getAllGenres()).toEqual("There are no genres available");

    blog.addBlogPost("How to Swim Fast", "Michael Phelps", "Sports");
    blog.addBlogPost("I Love Football!", "Tom Brady", "Sports");
    blog.addBlogPost("A Blog About Shoes", "Steve Madden", "Fashion");
    blog.addBlogPost(
      "Gardening in High Altitudes",
      "The Garden Master",
      "Home Improvement"
    );
    expect(blog.getAllGenres()).toEqual([
      "Sports",
      "Sports",
      "Fashion",
      "Home Improvement",
    ]);
  });

  it("it allows a user to add comments to a blog", () => {
    let blog = new Blog();

    blog.addBlogPost("How to Swim Fast", "Michael Phelps", "Sports");
    blog.addBlogPost("I Love Football!", "Tom Brady", "Sports");
    expect(blog.getBlogComments("How to Swim Fast")).toEqual([]);

    blog.addComment("How to Swim Fast", "katiehoesley", "I hate this article!");
    blog.addComment("I Love Football!", "ashcoca", "I love football too! Lol!");
    blog.addComment("I Love Football!", "brandon_ck", "GO FALCONS!");
    expect(blog.getBlogComments("How to Swim Fast")).toEqual([
      {
        comments: [{ user: "katiehoesley", comment: "I hate this article!" }],
      },
    ]);
    expect(blog.getBlogComments("I Love Football!")).toEqual([
      {
        comments: [
          { user: "ashcoca", comment: "I love football too! Lol!" },
          { user: "brandon_ck", comment: "GO FALCONS!" },
        ],
      },
    ]);
  });

  it("allows you to see all comments written by a specific user", () => {
    let blog = new Blog();

    blog.addBlogPost("How to Swim Fast", "Michael Phelps", "Sports");
    blog.addBlogPost("I Love Football!", "Tom Brady", "Sports");
    blog.addComment("How to Swim Fast", "katiehoesley", "I hate this article!");
    blog.addComment("I Love Football!", "ashcoca", "I love football too! Lol!");
    blog.addComment("I Love Football!", "brandon_ck", "GO FALCONS!");
    expect(blog.getCommentsBy("katiehoesley")).toEqual({
      user: "katiehoesley",
      comments: [
        { article: "How to Swim Fast", comment: "I hate this article!" },
      ],
    });
  });

  it("can delete a blog by the blog title", () => {
    let blog = new Blog();

    blog.addBlogPost("I Love Football!", "Tom Brady", "Sports");
    blog.addBlogPost("How to Swim Fast", "Michael Phelps", "Sports");
    expect(blog.getBlogPosts()).toEqual([
      "I Love Football!",
      "How to Swim Fast",
    ]);

    blog.addComment("How to Swim Fast", "katiehoesley", "I hate this article!");
    blog.deleteBlog("How to Swim Fast");
    expect(blog.getBlogPosts()).toEqual(["I Love Football!"]);

    blog.deleteBlog("I Love Football!");
    expect(blog.getBlogPosts()).toEqual("There are 0 blog posts");
  });
});
