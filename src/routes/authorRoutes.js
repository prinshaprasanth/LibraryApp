const express = require("express");
const authorsRouter = express.Router();

function router(nav) {
  var authors = [
    {
      title: "J. K. Rowling",
      author: "Harry Potter",
      genre: "Novel",
      img: "a1.jpg",
    },
    {
      title: "Leo Tolstoy",
      author: "Anna Karenina",
      genre: "Novel",
      img: "a2.jpg",
    },
    {
      title: "Rudyard Kipling",
      author: "The Jungle Book",
      genre: "Children's book",
      img: "a3.jpg",
    },
    // {
    //   title: "John Bunyan",
    //   author: "Famous Work: The Pilgrim's Progress",
    //   genre: "Allegory",
    //   img: "John Bunyan.jpg",
    // },
  ];
  authorsRouter.get("/", function (req, res) {
    res.render("authors", {
      nav,
      title: "Authors:Library",
      authors,
    });
  });

  authorsRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("author", {
      nav,
      title: "Single Author",
      author: authors[id],
    });
  });

  return authorsRouter;
}

module.exports = router;