const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post('/send', async (req, res) => {
  const {
    q1, q2, q3, q4, q5,
    q6, q7, q8, q9, q10,
    q11, q12, q13, q14, q15,
  } = req.body;

  try {
    const resposta = await prisma.resposta.create({
      data: {
        q1, q2, q3, q4, q5,
        q6, q7, q8, q9, q10,
        q11, q12, q13, q14, q15,
      },
    });
    res.status(201).json(resposta);
  } catch (error) {
    console.error('Erro ao salvar as respostas:', error);
    res.status(500).json({ error: 'Erro ao salvar as respostas' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
