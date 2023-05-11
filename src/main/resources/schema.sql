
create table if not exists ocjene (
    id int auto_increment primary key not null,
    ime varchar(50),
    perilica int,
    sudoper int,
    stednjak int,
    smece int,
    stolovi_ormar int,
    datum date,
    komentar varchar(512),
    kontrola varchar(50)
);