create database if not exists game CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

use game;

drop table feedback;
drop table users;

CREATE TABLE users (
    id CHAR PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    role ENUM('ESTAGIARIO','GERENTE') NOT NULL
);

CREATE TABLE feedback (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'ABERTO',
    sender_id CHAR(36) NOT NULL,
    receiver_id CHAR(36) NOT NULL,
    response TEXT NOT NULL,
    fk_sender_id CHAR,
    fk_receiver_id CHAR,
	FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);

