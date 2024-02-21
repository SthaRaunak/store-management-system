import multer from "multer";

const fileDest = "./public/temp";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, fileDest);
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true); //pass true in cb (accept the file)
    } else {
        cb(null, false); //pass false cb (decline the file)
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 30 * 1024 * 1024, // acepts byte (30 * 1024 * 1024 = 30mb)
    },
    fileFilter,
});

export { upload };
