-- 1. Criação das tabelas na ordem correta

CREATE TABLE item (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    titulo VARCHAR(150) NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('livro', 'revista')),
    autor VARCHAR(100),
    edicao VARCHAR(20),
    disponivel BOOLEAN DEFAULT TRUE
);

CREATE TABLE usuario (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(20) NOT NULL CHECK (tipo IN ('aluno', 'professor')),
    limite_itens INT NOT NULL
);

CREATE TABLE emprestimo (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    item_id INT NOT NULL REFERENCES item(id),
    usuario_id INT NOT NULL REFERENCES usuario(id),
    data_retirada DATE NOT NULL,
    data_devolucao_prevista DATE NOT NULL,
    data_devolucao DATE, 
    valor_multa NUMERIC(10,2) DEFAULT 0.00
);

-- 2. Inserção de dados de teste (4 itens, 2 usuários, 2 empréstimos)


INSERT INTO item (codigo, titulo, tipo, autor, edicao, disponivel) VALUES
('L001', 'Java Como Programar', 'livro', 'Deitel', '11a', FALSE), 
('L002', 'Clean Code', 'livro', 'Robert C. Martin', '1a', TRUE),
('R001', 'Tech Monthly', 'revista', NULL, 'Janeiro/2024', FALSE),
('L003', 'Engenharia de Software', 'livro', 'Sommerville', '10a', TRUE);


INSERT INTO usuario (nome, tipo, limite_itens) VALUES
('João da Silva', 'aluno', 3),
('Maria Souza', 'professor', 5);


INSERT INTO emprestimo (item_id, usuario_id, data_retirada, data_devolucao_prevista, data_devolucao, valor_multa) VALUES
-- Empréstimo do item 1 (L001) para João, ainda em aberto:
(1, 1, '2024-02-01', '2024-02-15', NULL, 0.00),

-- Empréstimo do item 3 (R001) para Maria, já devolvido mas com multa:
(3, 2, '2024-01-10', '2024-01-17', '2024-01-19', 2.00);


--Consultas SQL

-- 1. Listar todo o acervo com código, título, tipo e disponibilidade
SELECT codigo, titulo, tipo, disponivel 
FROM item;

-- 2. Listar os empréstimos em aberto (com o nome do usuário e título do item)
SELECT u.nome AS usuario, i.titulo AS item_titulo 
FROM emprestimo e
JOIN usuario u ON (e.usuario_id = u.id)
JOIN item i ON (e.item_id = i.id)
WHERE e.data_devolucao IS NULL;

-- 3. Calcular o total de multas acumuladas por usuário
SELECT u.nome AS usuario, COALESCE(SUM(e.valor_multa), 0) AS total_multas
FROM usuario u
JOIN emprestimo e ON (u.id = e.usuario_id)
GROUP BY u.id, u.nome;

-- 4. Listar os itens que NUNCA foram emprestados (usando LEFT JOIN)
SELECT i.codigo, i.titulo
FROM item i
LEFT JOIN emprestimo e ON (i.id = e.item_id)
WHERE e.id IS NULL;