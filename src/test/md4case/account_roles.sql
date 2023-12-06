create table md4case.account_roles
(
    account_id bigint not null,
    roles_id   bigint not null,
    primary key (account_id, roles_id),
    constraint FK70s9enq5d1oywl7v8vis5ke5w
        foreign key (roles_id) references md4case.role (id),
    constraint FKtp61eta5i06bug3w1qr6286uf
        foreign key (account_id) references md4case.account (id)
);

