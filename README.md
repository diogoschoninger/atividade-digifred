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
5. Realizei a requisição à API, buscando por todos os produtos;
6. Formatei a resposta, armazenando apenas um array de objetos com os produtos na váriável dataSource. Com isso, a tabela já consegue realizar a listagem dos produtos.

---

7. Adicionei o Paginator à tabela e, logo de cara, erro de animação. Então reinstalei o @angular/material com as animações e isso foi resolvido;
8. Tirei o código de busca dos produtos do método ngOnInit() e o coloquei em um método dedicado dentro da classe, para poder realizar novamente as buscas quando a tabela for paginada;
9. Criei outro método no serviço de produtos para realizar requisições com paginação (getProductsWithPagination());
10. Adicionei o método ngAfterViewInit() para realizar as requisições novamente sempre que a tabela for paginada.

---

Entre uma etapa e outra houveram muitos erros e correções. Cria componente, exclui componente e assim por diante.

Até esta atividade, não tive contato com Angular, então a maior parte do tempo foi gasto lendo a documentação e assistindo vídeos para entender como esse framework funciona.

Nas tentativas de criar os Dialogs de adição e edição de produtos, não consegui executar.

Manti os componentes no código para análise, mesmo não conseguindo exibí-los.