 
 /*Setting regions*/
 Insert into Region values (default,"East India");
 Insert into Region values (default,"West India");
 Insert into Region values (default,"USA");
 Insert into Region values (default,"North India");
 Insert into Region values (default,"Japan");
 Insert into Region values (default,"China");
 Insert into Region values (default,"West Europe");
 Insert into Region values (default,"East Europe");

 Insert into Delivery_Type values (1,"One-Day Delivery",10);
 Insert into Delivery_Type values (2,"Standard Delivery",3);
 Insert into Delivery_Type values (3,"Prime Delivery",5);

 Insert into Vehicle_Type values (1,"Truck",10000);
 Insert into Vehicle_Type values (2,"Van",5000);
 Insert into Vehicle_Type values (3,"Train",100000);
 Insert into Vehicle_Type values (4,"Plane",25000);
 Insert into Vehicle_Type values (5,"Ship",50000);

 Insert into Route_Type values (1,"Land");
 Insert into Route_Type values (2,"Air");
 Insert into Route_Type values (3,"Sea");

    Insert into Work_type values (1,"Driver");
    Insert into Work_type values (2,"Warehouse Manager");
 
    Insert into Warehouses values(default, 2);
    Insert into Warehouses values(default, 3);
    Insert into Warehouses values(default, 4);
    Insert into Warehouses values(default, 5);
    Insert into Warehouses values(default, 6);
    Insert into Warehouses values(default, 1);

                                     
 Insert into employees values (default,12341,2,1,"John","Doe","ABC Street",2,5,0);
    Insert into employees values (default,15000,4,2,"Jane","Doe","XYZ Street",4,5,0);
    Insert into employees values (default,16000,2,1,"James","Fox","PQR Street",2,5,0);
    Insert into employees values (default,15000,1,2,"Amanda","Doe","nwq Street",1,5,0);
    Insert into employees values (default,12345,3,1,"Kelly","Doe","wdadad Street",3,5,0);
    Insert into employees values (default,12346,8,2,"Andrea","Doe","ed3wd Street",8,5,0);
    Insert into employees values (default,50000,3,2,"Craig","Doe","dc3exc Street",3,5,0);
    Insert into employees values (default,12348,2,2,"Ryan","Doe","re2da Street",2,5,0);
    Insert into employees values (default,12349,5,1,"lori","Doe","asdda Street",5,5,0);
    Insert into employees values (default,16000,7,2,"Matthew","Doe","kew Street",7,5,0);
    Insert into employees values (default,12351,6,1,"Anne","Doe","lane Street",6,5,0);
    Insert into employees values (default,12352,4,2,"Nicholas","Doe","wdaC Street",4,5,0);
    Insert into employees values (default,17000,1,1,"Tom","Doe","sdsda Street",1,5,0);

    Insert into customer values (default,1,"John","Doe","ABC Street",9850136815,"doe@john.com");
    Insert into customer values (default,2,"Jane","Doe","XYZ Street",9850136815,"doe@jane.com");
    Insert into customer values (default,3,"James","Fox","PQR Street",9850136815,"fox@james.com");
    Insert into customer values (default,4,"Amanda","Doe","nwq Street",9850136815,"doe@aman");
    Insert into customer values (default,5,"Kelly","Doe","wdadad Street",9850136815,"edioasd");
    Insert into customer values (default,6,"Andrea","Doe","ed3wd Street",9850136815,"wdadad");
    Insert into customer values (default,7,"Craig","Doe","dc3exc Street",9850136815,"wdadad");
    Insert into customer values (default,8,"Ryan","Doe","re2da Street",9850136815,"wdadad");
    Insert into customer values (default,1,"lori","Doe","asdda Street",9850136815,"wdadad");
    Insert into customer values (default,2,"Matthew","Doe","kew Street",9850136815,"wdadad");
    Insert into customer values (default,3,"Anne","Doe","lane Street",9850136815,"wdadad");
    Insert into customer values (default,4,"Nicholas","Doe","wdaC Street",9850136815,"wdadad");
    Insert into customer values (default,5,"Tom","Doe","sdsda Street",9850136815,"wdadad");

    Insert into Vehicles values(default,1,1,2,DATE('2019-01-01'),0,1);
    Insert into Vehicles values(default,2,3,3,DATE('2019-01-01'),0,4);
    Insert into Vehicles values(default,3,5,4,DATE('2019-01-01'),0,10);
    Insert into Vehicles values(default,4,9,5,DATE('2019-01-01'),0,3);
    Insert into Vehicles values(default,5,11,1,DATE('2019-01-01'),0,2);
    Insert into Vehicles values(default,6,13,1,DATE('2019-01-01'),0,2);
    Insert into Vehicles values(default,7,1,3,DATE('2019-01-01'),0,4);
    Insert into Vehicles values(default,1,3,4,DATE('2019-01-01'),0,10);
    Insert into Vehicles values(default,8,5,5,DATE('2019-01-01'),0,3);
    Insert into Vehicles values(default,2,9,2,DATE('2019-01-01'),0,1);

    Insert into Routes values (default,1,6, 1,2,3000);
    Insert into Routes values (default,2,8, 2,3,12000);
    Insert into Routes values (default,3,9, 3,4,15000);
    Insert into Routes values (default,1,1, 4,4,100);
    Insert into Routes values (default,3,4, 5,6,1000);
    Insert into Routes values (default,1,7, 6,7,500);
    Insert into Routes values (default,1,10, 7,8,400);
    Insert into Routes values (default,2,3, 8,1,10000);
    Insert into Routes values (default,3,4, 7,2,7000);
    Insert into Routes values (default,1,2, 2,4,2000);

    /*fill packages*/
    Insert into packages values(default,0,"Leather Boots",1,20);
      Insert into packages values(default,0,"Leather Jacket",1,30);
      Insert into packages values(default,0,"Leather Gloves",1,10);
      Insert into packages values(default,0,"Leather Belt",1,5);
      Insert into packages values(default,0,"Leather Wallet",1,2);
      Insert into packages values(default,0,"Leather Shoes",1,15);
      Insert into packages values(default,0,"Leather Hat",1,5);
      Insert into packages values(default,0,"Leather Pants",1,20);
      Insert into packages values(default,0,"Leather Socks",1,5);
      Insert into packages values(default,0,"Leather Shorts",1,10);
      Insert into packages values(default,1 , "Smart Tablet", 2, 20);
      Insert into packages values(default,1 , "Smart Phone", 2, 30);
      Insert into packages values(default,1 , "Smart Watch", 2, 10);
      Insert into packages values(default,1 , "Smart Glasses", 2, 5);
      Insert into packages values(default,1 , "Smart TV", 2, 2);
      Insert into packages values(default,1 , "Smart Speaker", 2, 15);
      Insert into packages values(default,1 , "Smart Camera", 2, 5);
      Insert into packages values(default,1 , "Smart Keyboard", 2, 20);
      Insert into packages values(default,1 , "Smart Mouse", 2, 5);
      Insert into packages values(default,1 , "Smart Headphones", 2, 10);
      Insert into packages values(default,0 , "Clothes", 3, 20);
      Insert into packages values(default,0 , "Shoes", 3, 30);
      Insert into packages values(default,0 , "Accessories", 3, 10);
      Insert into packages values(default,0 , "Jewelry", 3, 5);
      Insert into packages values(default,1 , "Toys", 3, 2);
      Insert into packages values(default,0 , "Books", 3, 15);
      Insert into packages values(default,1 , "Electronics", 3, 5);
      Insert into packages values(default,0 , "Furniture", 3, 20);
      Insert into packages values(default,1 , "Food", 4, 5);
      Insert into packages values(default,1 , "Drinks", 4, 10);
      Insert into packages values(default,1 , "Snacks", 4, 20);
      Insert into packages values(default,1 , "Candy", 4, 30);
      Insert into packages values(default,1 , "Chips", 4, 10);
      Insert into packages values(default,1 , "Cookies", 4, 5);
      Insert into packages values(default,1 , "Bread", 4, 2);
      Insert into packages values(default,1 , "Milk", 4, 15);
      Insert into packages values(default,1 , "Cheese", 4, 5);
      Insert into packages values(default,1 , "Eggs", 4, 20);
      Insert into packages values(default,1 , "Meat", 4, 5);
      Insert into packages values(default,1 , "Vegetables", 4, 10);
      Insert into packages values(default,1 , "Fruits", 4, 20);
      Insert into packages values(default,1 , "Beverages", 4, 30);
      Insert into packages values(default,1 , "Soda", 4, 10);
      Insert into packages values(default,1 , "Juice", 4, 5);
      Insert into packages values(default,1 , "Water", 4, 2);
      Insert into packages values(default,1 , "Coffee", 4, 15);
      Insert into packages values(default,1 , "Tea", 4, 5);
      Insert into packages values(default,1 , "Wine", 4, 20);
      Insert into packages values(default,1 , "Beer", 4, 5);
      Insert into packages values(default,1 , "Liquor", 4, 10);
      Insert into packages values(default,1 , "Cigarettes", 4, 20);
      Insert into pacakges values(default,0 , "Sofa", 5, 10);
      Insert into packages values(default,0 , "Chair", 5, 5);
      Insert into packages values(default,0 , "Table", 5, 2);
      Insert into packages values(default,0 , "Bed", 5, 15);
      Insert into packages values(default,0 , "Couch", 5, 5);
      Insert into packages values(default,0 , "Desk", 5, 20);
      Insert into packages values(default,0 , "Dresser", 5, 5);
      Insert into packages values(default,0 , "Cabinet", 5, 10);
      Insert into packages values(default,0 , "Bookshelf", 5, 20);
      Insert into packages values(default,0 , "Nightstand", 5, 30);
      Insert into packages values(default,0 , "Lamp", 5, 10);
      Insert into packages values(default,0 , "Rug", 5, 5);
      Insert into packages values(default,0 , "Curtains", 5, 2);
      Insert into packages values(default,0 , "Blinds", 5, 15);
      Insert into packages values(default,0 , "Clock", 5, 5);
      Insert into packages values(default,0 , "Picture", 5, 20);
      Insert into packages values(default,0 , "Mirror", 5, 5);
      Insert into packages values(default,0 , "Vase", 5, 10);
      Insert into packages values(default,0 , "Statue", 5, 20);
      Insert into packages values(default,0 , "Plant", 5, 30);
      Insert into packages values(default,0 , "Bowl", 5, 10);
      Insert into packages values(default,0 , "Bottle", 5, 5);
      Insert into packages values(default,0 , "Cup", 5, 2);
      Insert into packages values(default,0 , "Plate", 5, 15);
      Insert into packages values(default,0 , "Fork", 5, 5);
      Insert into packages values(default,0 , "Knife", 5, 20);
      Insert into packages values(default,0 , "Spoon", 5, 5);
      Insert into packages values(default,0 , "Baseball bat", 6, 10);
      Insert into packages values(default,0 , "Baseball glove", 6, 5);
      Insert into packages values(default,0 , "Basketball", 6, 2);
      Insert into packages values(default,0 , "Football", 6, 15);
      Insert into packages values(default,0 , "Soccer ball", 6, 5);
      Insert into packages values(default,0 , "Tennis ball", 6, 20);
      Insert into packages values(default,0 , "Golf ball", 6, 5);
      Insert into packages values(default,0 , "Golf club", 6, 10);
      Insert into packages values(default,0 , "Hockey stick", 6, 20);
      Insert into packages values(default,0 , "Hockey puck", 6, 30);
      Insert into packages values(default,0 , "Bowling ball", 6, 10);
      Insert into packages values(default,0 , "Bowling pin", 6, 5);
      Insert into packages values(default,0 , "Dart", 6, 2);
      Insert into packages values(default,0 , "Pool cue", 6, 15);
      Insert into packages values(default,0 , "Billiard ball", 6, 5);
      Insert into packages values(default,0 , "Racquet", 6, 20);
      Insert into packages values(default,0 , "Skateboard", 6, 5);
      Insert into packages values(default,0 , "Skate", 6, 10);
      Insert into packages values(default,0 , "Scooter", 6, 20);
      Insert into packages values(default,0 , "Bicycle", 6, 30);
      Insert into packages values(default,0 , "Helmet", 6, 10);
      Insert into packages values(default,0 , "Goggles", 6, 5);
      Insert into packages values(default,0 , "Knee pads", 6, 2);
      Insert into packages values(default,0 , "Elbow pads", 6, 15);
      Insert into packages values(default,0 , "Wrist guards", 6, 5);
      Insert into packages values(default,0 , "Ankle guards", 6, 20);
      Insert into packages values(default,0 , "Gloves", 6, 5);
      Insert into packages values(default,0 , "Shin guards", 6, 10);
      Insert into packages values(default,0 , "Bat", 6, 20);
      Insert into packages values(default,0, "Diamonds", 7, 30);
      Insert into packages values(default,0, "Gold", 7, 10);
      Insert into packages values(default,0, "Silver", 7, 5);
      Insert into packages values(default,0, "Platinum", 7, 2);
      Insert into packages values(default,0, "Copper", 7, 15);
      Insert into packages values(default,0, "Bronze", 7, 5);
      Insert into packages values(default,0, "Iron", 7, 20);
      Insert into packages values(default,0, "Steel", 7, 5);
      Insert into packages values(default,0, "Tin", 7, 10);
      Insert into packages values(default,0, "Aluminum", 7, 20);
      Insert into packages values(default,0, "Zinc", 7, 30);
      Insert into packages values(default,0, "Lead", 7, 10);
      Insert into packages values(default,0, "Nickel", 7, 5);
      Insert into packages values(default,0, "Cobalt", 7, 2);
      Insert into packages values(default,0, "Chromium", 7, 15);
      Insert into packages values(default,0, "Manganese", 7, 5);
      Insert into packages values(default,0, "Iron", 7, 20);
      Insert into packages values(default,0, "Honda Scooter", 8, 5);
      Insert into packages values(default,0, "Honda Car", 8, 10);
      Insert into packages values(default,0, "Honda Truck", 8, 20);
      Insert into packages values(default,0, "Honda Van", 8, 30);
      Insert into packages values(default,0, "Honda Motorcycle", 8, 10);
      Insert into packages values(default,0, "Honda Boat", 8, 5);
      Insert into packages values(default,0, "Honda Plane", 8, 2);
      Insert into packages values(default,0, "Honda Helicopter", 8, 15);




   /*procedure for ordering items */
    delimiter // 
    create procedure OrderItem( IN  package_contents_in varchar(20), IN delivery_type_in int, IN customer_id int )
    BEGIN

      declare order_date date ; 
      declare package_id_F int;
      declare order_id_F int  ;
      declare cus_region_id  int ;
      declare pac_region_id int ;
      declare veh_id int ;
      declare emp_id_F int ; 
      declare vehi_mul int ; 
      declare delivery_cost int default 0 ;
      declare emp_id_for_rating INT ; 
      declare deli_type_mul int ;
      declare route_id_F int;
      declare kiloms_run int; 
      declare current_kiloms_run int; 
      declare vehicle_type_id_F int ; 
      declare distance_kiloms_F int; 
      declare allowed_kiloms_before_maint int ;
      declare maint_date  DATE; 
      SET order_date = CURRENT_DATE() ; 
      SET package_id_F = (select package_id from packages where package_contents_in = package_contents);
      update packages set quantity = quantity - 1 where package_id = package_id_F;
      Insert into Orders values (default, customer_id, package_id_F, delivery_type_in, order_date, 0 ,0, package_contents_in);
      SET order_id_F = (SELECT MAX(order_id) FROM Orders);
      Insert into active_orders values (customer_id, order_id_F ) ;
      Insert into order_history values (customer_id, order_id_F ) ;
      delete from active_orders where customer_id = customer_id and order_id = order_id_F;
      SET cus_region_id = (select region_id from customer where cus_id = customer_id);
      SET pac_region_id = (select region_id from packages NATURAL JOIN warehouses where package_id_F = package_id);
      SET route_id_F = (select route_id from routes where end_region_id = cus_region_id and start_region_id = pac_region_id);
      Insert into transport_logistics values (customer_id,order_id_F,route_id_F);
      SET veh_id = (select vehicle_id from routes where route_id = route_id_F);
      SET emp_id_F = (select emp_id from vehicles where vehicle_id = veh_id);

      SET vehicle_type_id_F = (select vehicle_type_id from vehicles where vehicle_id = veh_id);
      SET vehi_mul = (select vehicle_multiplier from vehicles where vehicle_id = veh_id);
      SET maint_date = (select last_maintenance_date from vehicles where vehicle_id = veh_id);
      SET deli_type_mul = (select delivery_cost_multiplier from delivery_type where delivery_type_id = delivery_type_in);
      SET distance_kiloms_F = (select distance_kiloms from routes where route_id = route_id_F);
      SET current_kiloms_run = (select kiloms_from_last_maint from vehicles where vehicle_id = veh_id) + distance_kiloms_F;
      SET vehicle_type_id_F = (select vehicle_type_id from vehicles where vehicle_id = veh_id);
      SET allowed_kiloms_before_maint = (select maint_kiloms from vehicle_type where vehicle_type_id = vehicle_type_id_F);
      IF current_kiloms_run > allowed_kiloms_before_maint THEN
      SET current_kiloms_run = 0;
      SET maint_date = order_date ;
      update vehicles set last_maintenance_date = maint_date where vehicle_id = veh_id;
      END IF;
      update vehicles set kiloms_from_last_maint = current_kiloms_run where vehicle_id = veh_id;
      SET delivery_cost = distance_kiloms_F * vehi_mul * deli_type_mul * 0.005;
      insert into Involved values ( emp_id_F,order_id_F);
      update Orders set delivery_price = delivery_cost,completed = 1 where order_id = order_id_F;
      SET emp_id_for_rating = emp_id_F;
      select emp_id_for_rating as EMPFRATING, delivery_cost as PRICE, package_id_F, order_id_F, veh_id, vehicle_type_id_F, vehi_mul, deli_type_mul, route_id_F, distance_kiloms_F, current_kiloms_run, vehicle_type_id_F, allowed_kiloms_before_maint, maint_date;
    END //
      delimiter ;
   /*procedure for rating employee */
    create procedure rate_Employee(IN new_rating int, IN emp_id_for_rating int)
    BEGIN 
      declare emp_total_handles int default 0;
      declare new_overall_rating int default 0;
      SET new_overall_rating = (select cumulative_rating from employees where emp_id = emp_id_for_rating) + new_rating;
      SET emp_total_handles = (select total_handles from employees where emp_id = emp_id_for_rating) + 1;
      update employees set cumulative_rating = new_overall_rating, total_handles = emp_total_handles where emp_id = emp_id_for_rating;
      END //
     delimiter ; 


   /*Support queries*/



