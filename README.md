# MAPING-DOMAIN

## Entidades de Domínio (entities)

- [x] **product (Produto)**: Representa os produtos disponíveis.
- [x] **stock (Estoque)**: Representa o estoque referente aos produtos disponíveis.
- [x] **sale (Histórico de Venda)**: Representa os registros referente aos documentos das vendas realizadas.
- [x] **purchase-order (Ordem de Compra)**: Representas as ordens de compra feitas para reabastecer o estoque dos produtos.
- [x] **supplier (Fornecedor)**: Representa os fornecedores dos produtos.
- [x] **client (Cliente)**: Representa os clientes consumidores dos produtos.
- [x] **movimentation (Movimentação)**: Representa a movimentação dos produtos vinculados nos registros das vendas.

## Casos de Uso (use-cases)

- [x] **stock-alert (Alerta de Estoque)**: Notificações quando um produto esta com seu estoque baixo.
    1. [ ] Verificar níveis de estoque após cada venda.
    2. [ ] Gerar alerta se estoque abaixo do limite mínimo.
    3. [ ] Enviar alerta ao gerente por e-mail e registrar no sistema.
- [x] **set-minimum-stock-quantitie (Definir Quantidade Mínima)**: Estabelecer um limite mínimo de estoque para cada produto.
    1. [ ] Permitir que o gerente defina o limite mínimo no sistema.
    2. [ ] Validar e aplicar o novo limite mínimo estabelecido.
    3. [ ] Gerar alertas se o estoque atingir o limite mínimo.
- [x] **receive-stock-alert-by-email (Receber Alerta de Estoque)**: Obter notificações por e-mail ou no sistema quando o estoque estiver baixo.
    1. [ ] Configurar recebimento de alertas por e-mail no sistema.
    2. [ ] Enviar e-mails automáticos quando o estoque estiver baixo.
    3. [ ] Permitir consulta de alertas no sistema de gerenciamento.
- [x] **view-sale-history (Visualizar Histórico de Venda)**: Consultar dados de vendas e lucro por produto e período.
    1. [ ] Acessar interface de consulta de vendas no sistema.
    2. [ ] Filtrar dados de vendas por produto e período.
    3. [ ] Visualizar relatórios de lucro e tendências de vendas.
- [x] **manage-purchase-order (Gerenciar Ordem de Compra)**: Criar e processar ordens de compra automaticamente.
    1. [ ] Criar ordens de compra no sistema com base no estoque mínimo.
    2. [ ] Processar e acompanhar ordens de compra automaticamente.
    3. [ ] Permitir que o gerente edite ou cancele ordens de compra.
- [x] **integrate-with-supplier (Integrar com Fornecedore)**: Conectar o sistema aos fornecedores para atualizações automáticas de entrega.
    1. [ ] Estabelecer conexão automática com sistemas dos fornecedores.
    2. [ ] Atualizar entregas e estoque em tempo real.
    3. [ ] Gerenciar informações de fornecedores integrados.
- [ ] **track-movimentation (Rastrear Movimentação)**: Acompanhar o histórico de movimentações de um produto.
    1. [ ] Consultar histórico de movimentações de produtos no sistema.
    2. [ ] Registrar entradas e saídas de produtos automaticamente.
    3. [ ] Disponibilizar relatórios de movimentação para consulta.

## Repositórios (Repositories)

- [ ] **product-repository (Repositório de Produtos)**: Armazena e gerencia informações sobre os produtos.
    1. [ ] Armazenar dados dos produtos.
    2. [ ] Gerenciar cadastro e atualizações de produtos.
    3. [ ] Prover informações para outros módulos do sistema.
- [ ] **stock-repository (Repositório de Estoque)**: Controla os níveis de estoque dos produtos.
    1. [ ] Manter registros atualizados de estoque.
    2. [ ] Permitir consultas rápidas de disponibilidade.
    3. [ ] Atualizar estoque após vendas ou recebimento de produtos.
- [ ] **sale-repository (Repositório de Histórico de Vendas)**: Mantém o histórico de vendas e análises relacionadas.
    1. [ ] Armazenar histórico de vendas.
    2. [ ] Analisar tendências e lucratividade.
    3. [ ] Gerar relatórios de vendas para gestão.
- [ ] **purchase-order-repository (Repositório de Ordens de Compra)**: Gerencia a criação e o acompanhamento das ordens de compra.
    1. [ ] Gerenciar criação de ordens de compra.
    2. [ ] Acompanhar status e processamento das ordens.
    3. [ ] Armazenar histórico de compras para análise.
- [ ] **supplier-repository (Repositório de Fornecedores)**: Armazena e gerencia informações sobre os fornecedores.
    1. [ ] Armazenar dados dos fornecedores.
    2. [ ] Gerenciar informações de contato e contratos.
    3. [ ] Integrar com sistemas de fornecedores para atualizações.
- [ ] **client-repository (Repositório de Clientes)**: Armazena e gerencia informações sobre os clientes.
    1. [ ] Armazenar informações dos clientes.
    2. [ ] Gerenciar cadastro e histórico de compras.
    3. [ ] Suportar estratégias de marketing e relacionamento.
- [ ] **movimentation-repository (Repositório de Movimentações)**: Controla o registro de entradas e saídas de produtos no estoque.
    1. [ ] Registrar movimentações de entrada e saída.
    2. [ ] Controlar histórico de movimentações para auditoria.
    3. [ ] Prover dados para análise de fluxo de produtos.

## Diagrama de Entidade-Relacionamento (ER)

[product] --< [stock] --< [movimentation]
[product] --< [sale]
[supplier] --< [purchase-order] --< [product]
[client] --< [sale]