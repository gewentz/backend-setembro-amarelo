const express = require('express');
const router = express.Router();
const Questionario = require('../models/questionario.js')

router.post('/', async (req, res) => {
  const { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15 } = req.body;

  try {
    questionario = new Questionario({ q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15 });
    await questionario.save();
    res.status(201).json(questionario);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar questionário', details: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const questionario = await Questionario.find();
    res.status(200).send(questionario);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar questionários', details: error });
  }
});

module.exports = router;