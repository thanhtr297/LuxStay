create table md4case.user
(
    id_user     bigint auto_increment
        primary key,
    address     varchar(255)  null,
    age         int           null,
    avatar      varchar(255)  null,
    change_role int default 0 null,
    full_name   varchar(255)  null,
    phone       varchar(255)  null,
    sex         varchar(255)  null,
    account_id  bigint        null,
    constraint FKc3b4xfbq6rbkkrddsdum8t5f0
        foreign key (account_id) references md4case.account (id)
);

