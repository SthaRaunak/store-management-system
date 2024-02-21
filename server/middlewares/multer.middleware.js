import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dest_folder = path.join(__dirname, "../public/temp");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(dest_folder)) {
            fs.mkdirSync(dest_folder, { recursive: true });
        }

        cb(null, dest_folder);
    },

    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + ext);
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
