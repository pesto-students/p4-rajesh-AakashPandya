USE WAREHOUSE;

-- Find the item that has minimum weight.
SELECT * FROM ITEMS WHERE WEIGHT = ( SELECT MIN(WEIGHT) FROM ITEMS ); 

-- Find the different warehouses in “Pune”.
SELECT * FROM WAREHOUSES WHERE LOCATION_CITY='PUNE';

-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT * FROM ITEMS WHERE ITEMNO IN ( SELECT ITEMNO FROM ORDERS WHERE CNO = (SELECT CNO FROM CUSTOMER WHERE CNAME='ALEX'));

-- Find a Warehouse which has maximum stores.
SELECT * FROM WAREHOUSES WHERE WID = (SELECT WID FROM STORES GROUP BY WID ORDER BY COUNT(SID) DESC LIMIT 1); 

-- Find an item which is ordered for a minimum number of times.
SELECT * FROM ITEMS WHERE ITEMNO IN (SELECT ITEMNO FROM ORDERS GROUP BY ITEMNO HAVING COUNT(ITEMNO) = (SELECT COUNT(ITEMNO) FROM ORDERS GROUP BY ITEMNO ORDER BY COUNT(ITEMNO) ASC LIMIT 1));

-- Find the detailed orders given by each customer.
SELECT CUSTOMER.CNO, CUSTOMER.CNAME, ORDERS.ONO, ITEMS.ITEMNO ,ITEMS.DESCRIPTION FROM CUSTOMER INNER JOIN ORDERS INNER JOIN ITEMS ON CUSTOMER.CNO = ORDERS.CNO && ORDERS.ITEMNO = ITEMS.ITEMNO ORDER BY CUSTOMER.CNAME;