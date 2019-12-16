CREATE database crud;

use crud;

create table persona(
id int( 6) unsigned auto_increment primary key,
nombre varchar(50) not null,
apaterno varchar(50) not null,
amaterno varchar(50) not null,
fnacimiento varchar(50) not null);