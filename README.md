# [MyReads](https://github.com/GonEbal/MyReads): A Book Tracking App

This Web Application allows you to select and catagorize books you have read, are currently reading, or want to read!

![gif #1](public/newpreview.gif)

To get started right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

You can search for books you want to add to your library.
But search terms are limited! You can find them in SEARCH_TERMS.md.

The app is using API provided by UDACITY. You can find it in BooksAPI.js.

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of my app.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js #
```

## Backend Server

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
