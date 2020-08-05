---
title: mysql
lang: en-US
---

## 简单语句

### 简单的查询语句

```mysql
SELECT \* FROM 表名;
```

### 简单插入语句

```mysql
INSERT INTO 表名(列1, 列2, ...) VALUES(列1的值，列2的值, ...);
```

### 去除重复结果

```mysql
SELECT DISTINCT department FROM student_info
```

### 批量插入

```mysql
INSERT INTO first_table(first_column, second_column) VALUES(4, 'ddd'), (5, 'eee'), (6, 'fff');
```

## 表的属性

1. NOT NULL
2. DEFAULT
3. 主键

   - 一个表可能有多个候选键，我们可以选择一个候选键作为表的主键。一个表最多只能有一个主键，主键的值不能重复，通过主键可以找到唯一的一条记录
   - 如果主键只是单个列的话，可以直接在该列后声明 PRIMARY KEY
   - 对于多个列的组合作为主键的情况,必须使用这种单独声明的形式

     ```mysql
     PRIMARY KEY (number, subject)
     ```

   - 主键列默认是有 NOT NULL 属性

4. UNIQUE 属性
   我们可以把这个列或列组合添加一个 UNIQUE 属性，表明该列或者列组合的值是不允许重复的。
5. 主键和 UNIQUE 约束的区别
   - 主键和 UNIQUE 约束都能保证某个列或者列组合的唯一性
   - 一张表中只能定义一个主键，却可以定义多个 UNIQUE 约束！
   - 主键列不允许存放 NULL，而声明了 UNIQUE 属性的列可以存放 NULL，而且 NULL 可以重复地出现在多条记录中
6. 外键
   - 如果 A 表中的某个列或者某些列依赖与 B 表中的某个列或者某些列，那么就称 A 表为子表，B 表为父表。子表和父表可以使用外键来关联起来
7. AUTO_INCREMENT 属性
   AUTO_INCREMENT 翻译成中文可以理解为自动增长，简称自增。如果一个表中的某个列的数据类型是整数类型或者浮点数类型，那么这个列可以设置 AUTO_INCREMENT 属性。当我们把某个列设置了 AUTO_INCREMENT 属性之后，如果我们在插入新记录的时候不指定该列的值，或者将该列的值显式地指定为 NULL 或者 0，那么新插入的记录在该列上的值就是当前该列的最大值加 1 后的值
8. 列的注释
   在建表语句的末尾可以添加 COMMENT 语句来给表添加注释
9. ZEROFILL
   - 对于无符号整数类型的列，我们可以在查询数据的时候让数字左边补 0，如果想实现这个效果需要给该列加一个 ZEROFILL 属性
   - 创建表的时候，如果声明了 ZEROFILL 属性的列没有声明 UNSIGNED 属性，那 MySQL 会为该列自动生成 UNSIGNED 属性
   - 无符号整数声明 `UNSIGNED`
   - MySQL 现在只支持对无符号整数进行自动补 0 的操作

## 分组查询

### 创建分组

```mysql
SELECT subject, AVG(score) FROM student_score GROUP BY subject
```

### 带有 WHERE 子句的分组查询

```mysql
SELECT subject, AVG(score) FROM student_score WHERE score >= 60 GROUP BY subject;
```

### 作用于分组的过滤条件

```mysql
SELECT subject, AVG(score) FROM student_score GROUP BY subject HAVING AVG(score) > 73
```

## 子查询

### 标量子查询

```mysql
SELECT * FROM student_score WHERE number = (SELECT number FROM student_info WHERE name = '杜琦燕');
```

### 列子查询

```mysql
SELECT * FROM student_score WHERE number IN (20180101, 20180102);
```

### 行子查询

```mysql
SELECT * FROM student_score WHERE (number, subject) = (SELECT number, '母猪的产后护理' FROM student_info LIMIT 1);
```

### 表子查询

```mysql
SELECT * FROM student_score WHERE (number, subject) IN (SELECT number, '母猪的产后护理' FROM student_info WHERE major = '计算机科学与工程')
```

## 连接查询

**如果我们乐意，我们可以连接任意数量张表，但是如果没有任何限制条件的话，这些表连接起来产生的笛卡尔积可能是非常巨大的。比方说 3 个 100 行记录的表连接起来产生的笛卡尔积就有 100×100×100=1000000 行数据！**

### 示例

```mysql
SELECT t1.*, t2.* FROM t1, t2;
```

- 内连接
  内连接中的 WHERE 子句和 ON 子句是等价的
  对于内连接的两个表，驱动表中的记录在被驱动表中找不到匹配的记录，该记录不会加入到最后的结果集，我们上边提到的连接都是所谓的内连接
- 外连接
  对于外连接的两个表，驱动表中的记录即使在被驱动表中没有匹配的记录，也仍然需要加入到结果集。
