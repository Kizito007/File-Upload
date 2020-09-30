const express = require("express"),
    app = express(),
    multer = require("multer"),
    router = require("express").Router({}),
    path = require("path");

//storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage,
    //limits: {fileSize:1000000}
})

router.post('/upload', upload.single("profile"), (req, res) => {
    res.json ({
        success: 1,
        profile_url: `http://localhost:3000/profile/${req.file.filename}`
    })
});

function errHandler(err, req, res, next) {
    if(err instanceof multer.MulterError){
        res.json ({
            success: 0,
            message: err.message
        })
    }
}
router.use(errHandler)

module.exports = router;