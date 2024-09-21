create table Person(
    name varchar(10) not null
);

insert into person values('刘耀惠');
insert into person values('我');
insert into person values('我的');

    select * from person;

alter database shop character set utf8;
alter table person character set utf8;
alter table person change name name varchar(10) character set utf8 not null;