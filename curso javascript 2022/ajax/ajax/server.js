const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('.'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single('arquivo');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.arquivo);
  });
});

app.post('/formulario', (req, res) => {
  res.send({
    ...req.body,
    id: Date.now(),
  });
});

app.get('/parOuImpar', (req, res) => {
  const par = parseInt(req.query.numero) % 2 === 0;
  res.send({
    resultado: par ? 'par' : 'impar',
  });
});

app.listen(8081, () => console.log('Server running on port 8081'));
