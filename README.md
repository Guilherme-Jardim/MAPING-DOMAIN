# MAPING-DOMAIN

## Entidades de Domínio (entities)

- [ ] **product (Produto)**: Representa cada item individual no estoque.
- [ ] **inventory (Estoque)**: Mantém o registro de todos os produtos disponíveis.
- [ ] **stock-alert (Alerta de Estoque)**: Notificações enviadas quando o estoque de um produto está baixo.
- [ ] **sales-history (Histórico de Vendas)**: Registros de todas as vendas realizadas.
- [ ] **purchase-order (Ordem de Compra)**: Pedidos feitos para reabastecer o estoque.
- [ ] **supplier (Fornecedor)**: Empresas ou indivíduos que fornecem os produtos.

## Casos de Uso (use-cases)

- [ ] **track-product (Rastrear Produto)**: Atribuir e acompanhar um número de identificação único para cada produto.
- [ ] **set-minimum-quantities (Definir Quantidades Mínimas)**: Estabelecer um limite mínimo de estoque para cada produto.
- [ ] **receive-stock-alerts (Receber Alertas de Estoque)**: Obter notificações por e-mail ou no sistema quando o estoque estiver baixo.
- [ ] **view-sales-history (Visualizar Histórico de Vendas)**: Consultar dados de vendas e lucro por produto e período.
- [ ] **manage-purchase-orders (Gerenciar Ordens de Compra)**: Criar e processar ordens de compra automaticamente.
- [ ] **integrate-with-suppliers (Integrar com Fornecedores)**: Conectar o sistema aos fornecedores para atualizações automáticas de entrega.

## Objetos de Valor (value-objects)

- [ ] **product-identification (Identificação do Produto)**: Número ou código único para cada produto.
- [ ] **product-information (Informações do Produto)**: Dados adicionais como tamanho e cor.
- [ ] **stock-limit (Limite de Estoque)**: O número mínimo de unidades para cada produto.
- [ ] **sales-data (Dados de Vendas)**: Quantidade vendida, lucro por produto e tendências de vendas.

## Repositórios (Repositories)

- [ ] **product-repository (Repositório de Produtos)**: Armazena e gerencia informações sobre os produtos.
- [ ] **inventory-repository (Repositório de Estoque)**: Controla os níveis de estoque dos produtos.
- [ ] **sales-history-repository (Repositório de Histórico de Vendas)**: Mantém o histórico de vendas e análises relacionadas.
- [ ] **purchase-order-repository (Repositório de Ordens de Compra)**: Gerencia a criação e o acompanhamento das ordens de compra.
