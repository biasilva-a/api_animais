import express from "express";
export const app = express();
app.use(express.json());

const port = 3000

app.get('/ping', (req, res) => {
    //Endpoint para conferiri se a API ta funcionando
    //comportamento esperado: receber um status 200 com a mensagem 
    //"pong" no corpo da resposta
    console.log(`Porta: &{port}`);
    console.log('Algué, acessou o endpoint /ping. ping!');
    res.status(200).send('Hello World, pong!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log(`Acesse http://localhost:${port}/ping para testar o endpoint`)
})


