create table md4case.bill
(
    id_bill      bigint auto_increment
        primary key,
    checkin      date   null,
    checkout     date   null,
    total_price  double not null,
    account_id   bigint null,
    home_id_home bigint null,
    constraint FKf8ia3o5yftc527ksq0lksbryt
        foreign key (home_id_home) references md4case.home (id_home),
    constraint FKgpfluataee5ad31ijyu9jfvms
        foreign key (account_id) references md4case.account (id)
);

