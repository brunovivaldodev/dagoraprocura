create table if not exists user(
    id int not null auto_increment primary key,
    name varchar(255),
    password varchar(255),
    email varchar(255),
    number int,
    created_at timestamp,
    updated_at timestamp,
);