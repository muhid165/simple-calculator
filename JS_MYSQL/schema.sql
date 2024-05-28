

create database notes_app;

use notes_app;

create table notes (
    id integer primary key auto_increment,
    title varchar (255) not null,
    contents text not null,
    created timestamp not null default now()
);

insert into notes (title,contents)
values 
('My first note', 'A Note about something '),
('My Second Note', 'A Different Note about something!');





