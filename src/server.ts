import express from 'express';

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
  return res.json({ message: 'Caso queira ver a lista de usuários, vá para a página /users'})
})


app.post('/users', (req, res) => {

  console.log(req.body)

  const users = [
    {name: 'Wagner', idade: 26},
    {name: 'Cintia', idade: 29},
    {name: 'Antonella', idade: 2}

  ]
  return res.json(users);

});

app.listen(3333);
