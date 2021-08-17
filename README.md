# MariaDB:

- To get your MariaDB working on a local env. use this image on docker:
https://hub.docker.com/_/mariadb

- And use the following command:
docker run -p 3306:3306 --name mysql-mariadb -e MYSQL_ROOT_PASSWORD=root -d mariadb

# Test table:

```
CREATE TABLE Test(
	id int not null auto_increment primary key,
    test_name varchar(100) not null
);

insert into Test(id, test_name) values(1, 'teste');

select * from Test;
```