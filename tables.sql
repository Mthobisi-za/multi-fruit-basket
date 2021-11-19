create table multi_fruit_basket(id serial primary key not null , name text not null);


create table fruit_basket_item(multi_fruit_basket_id int, foreign key (multi_fruit_basket_id) references multi_fruit_basket (id), fruit_name text not null, fruit_price  decimal(10,02),count  int);
