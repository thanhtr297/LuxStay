create table md4case.image
(
    id_image     bigint auto_increment
        primary key,
    image        varchar(255) null,
    home_id_home bigint       null,
    constraint FKayhxfnaskylhafnxgq5tmxy83
        foreign key (home_id_home) references md4case.home (id_home)
);

