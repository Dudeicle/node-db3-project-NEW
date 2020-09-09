-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select product.ProductName, category.CategoryName
from product
  JOIN Category on product.CategoryId = category.Id;
-- WORKING --



-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select [order].Id, [order].ShipName, [order].OrderDate
from [order]
where [order].OrderDate < '2012-08-09'
-- WORKING --



-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
-- OrderID(OrderDetails) | ProductName(products) | Quantity(orderDetails)
select product.ProductName, orderdetail.Quantity
from orderdetail
  join product on Product.Id = orderdetail.ProductId
where orderdetail.OrderId = 10251
order by product.productname asc
-- WORKING --



-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
-- OrderID(OrderDetails) | CustomerID(Customers) | CustomerName(Customers) | EmployeeID(Employees) | LastName(Employees) 
select [Order].Id, [Order].CustomerId, Customer.CompanyName, Employee.LastName
from [Order]
  join Customer on [Order].CustomerId = Customer.Id
  join Employee on [Order].EmployeeId = Employee.Id;
  -- NOT SURE IF CORRECT, RETURNING CORRECT COLUMNS BUT WRONG AMOUNT OF RECORDS --