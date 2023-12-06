create table md4case.address
(
    id_address   bigint auto_increment
        primary key,
    name         varchar(255) null,
    city_id_city bigint       null,
    constraint FK6hrwsv4bnypudo1d4ars9wuo5
        foreign key (city_id_city) references md4case.city (id_city)
);

