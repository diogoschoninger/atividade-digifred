## Tecnologias utilizadas
- Angular v15.0.4
- Node v18.12.1
- NPM v8.8.0
- Typescript v4.8.4

---

## Processo de desenvolvimento
1. Utilizei o MatTableModule (@angular/material/table), para construir a tabela;
2. Utilizei o HttpClientModule (@angular/common/http) para realizar as requisições à API;
3. Defini a interface de tipagem dos objetos de produtos (Product);
4. Construí um serviço, para gerenciar as requisições à API (src/app/services/products.service);
5. Realizer a requisição à API, buscando por todos os produtos;
6. Formatei a resposta, armazenando apenas um array de objetos com os produtos na váriável dataSource. Com isso, a tabela já consegue realizar a listagem dos produtos.
