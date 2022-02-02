const express = require('express');
const router = new express.Router();

const libraryController = require('../controller/librarycontroller');

router.post('/add_librarydata',libraryController.addLibraryData);
router.get('/get_alllibrary',libraryController.getAllLibrary);
router.get('/get_library/:id',libraryController.getLibrary);
router.post('/like/:id',libraryController.addLike);

module.exports = router;