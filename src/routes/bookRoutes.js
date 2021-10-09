const express = require("express");

const booksRouter = express.Router();

function router(nav) {
  var books = [
    {
      title: "Gulliver's Travels",
      author: "Jonathan Swift",
      genre: "Satire",
      img: "7.png",
      des: "Gulliver’s Travels, original title Travels into Several Remote Nations of the World, four-part satirical work by Anglo-Irish author Jonathan Swift, published anonymously in 1726 as Travels into Several Remote Nations of the World. ",
      dat:"28 October 1726",
    },

    {
      title: "Wings of Fire",
      author: "A. P. J. Abdul Kalam",
      genre: "Autobiography",
      img: "4.jpg",
      des: "Wings of Fire revolves around the personal & professional life of Kalam and the individuals who made an impact on him. The book is mainly divided into 4 sections (Orientation, Creation, Propitiation and Contemplation) of Kalam’s life which contains 16 chapters and an epilogue.",
      dat:"1999",
    },
    {
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      genre: "Autobiography",
      img: "diaryofgirl.jpg",
      des: "The Diary of a Young Girl, also known as The Diary of Anne Frank, is a book of the writings from the Dutch-language diary kept by Anne Frank while she was in hiding for two years with her family during the Nazi occupation of the Netherlands.",
      dat:"25 June 1947",
    },
    
  ];

  var books2 = [
    {
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      genre: "Fantasy",
      img: "5.png",
      des: "Alice's Adventures in Wonderland is an 1865 English children's novel by Lewis Carroll. A young girl named Alice falls through a rabbit hole into a fantasy world of anthropomorphic creatures.",
      dat:"26 November 1865",
    },
    {
      title: "Pride and Prejudice",
      author: "	Jane Austen",
      genre: "Novel",
      img: "3.jpg",
      des: "Pride and Prejudice is an 1813 romantic novel of manners written by Jane Austen. Though it is mostly called a romantic novel, it can also be considered a satirical book.",
      dat:"28 January 1813",
    },
    {
      title: "A Thousand Splendid Suns",
      author: "Khaled Hosseini,",
      genre: "Novel",
      img: "8.jpg",
      des: "A Thousand Splendid Suns is a 2007 novel by Afghan-American author Khaled Hosseini, following the huge success of his bestselling 2003 debut The Kite Runner.",
      dat:"May 22, 2007",
    },
  ];
  booksRouter.get("/nmy/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Single Book",

      book1: books2[id],
    });
  });

  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Single Book",
      book1: books[id],
    });
  });

  booksRouter.get("/", function (req, res) {
    res.render("books", {
      nav,
      title: "Books:Library",
      books,
      books2,
    });
  });

  return booksRouter;
}

module.exports = router;