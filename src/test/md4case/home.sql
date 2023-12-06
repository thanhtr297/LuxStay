create table md4case.home
(
    id_home            bigint auto_increment
        primary key,
    bathroom_count     int          not null,
    bedroom_count      int          not null,
    deleted            int          null,
    description        varchar(255) null,
    name               varchar(255) null,
    price              double       not null,
    account_id         bigint       null,
    address_id_address bigint       null,
    status_id_status   bigint       null,
    constraint FKa8fm2mx6aqbilful8wqrcwo8d
        foreign key (status_id_status) references md4case.status (id_status),
    constraint FKbnk8q3nxg8uuptcpmdhbyyarg
        foreign key (address_id_address) references md4case.address (id_address),
    constraint FKkjhjqtlua153woa0s41kv8vxa
        foreign key (account_id) references md4case.account (id)
);

