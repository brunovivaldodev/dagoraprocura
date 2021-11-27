create table if not exists disappearance(
    id int not null auto_increment primary key,
    user_id int,
    foreign key (user_id) references users(id) on update cascade on delete cascade,
    type enum('BI', 'credit_card', 'passport'),
    document_url varchar(255),
    disappearance_place enum('taxi', 'via'),
    state enum('disappeared', 'founded'),
    location json,
    message_sent boolean default false,
    created_at DATE default (CURRENT_DATE),
    updated_at timestamp default (CURRENT_DATE)
)