create database egg_article;

use egg_article;

create table article(
    id int(10) not null auto_increment,
    img text default null comment '缩略图',
    title varchar(80) default null comment '文章标题',
    summary varchar(300) default null comment '文章简介',
    content text default null comment '文章内容',
    createTime timestamp default null comment '发布时间',
    primary key(id)
)engine=InnoDB auto_increment=1 comment '文章表';

insert into article(img, title, summary, content, createTime)
values('编程必备基础知识 操作系统','https://ss0.bdstatic.com/
70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3960281818,3530045970&fm=26&gp=0.jpg',
'11111111111111111111111','222222222222222222222222','2019-12-26 10:36:07');