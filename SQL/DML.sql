 
 /*Setting regions*/
 Insert into region values (default,"East India");
 Insert into region values (default,"West India");
 Insert into region values (default,"USA");
 Insert into region values (default,"North India");
 Insert into region values (default,"Japan");
 Insert into region values (default,"China");
 Insert into region values (default,"West Europe");
 Insert into region values (default,"East Europe");

 Insert into delivery_type values (1,"One-Day Delivery",10);
 Insert into delivery_type values (2,"Standard Delivery",3);
 Insert into delivery_type values (3,"Prime Delivery",5);

 Insert into vehicle_type values (1,"Truck");
 Insert into vehicle_type values (2,"Van");
 Insert into vehicle_type values (3,"Train");
 Insert into vehicle_type values (4,"Plane");
 Insert into vehicle_type values (5,"Ship");

 Insert into route_type values (1,"Land");
 Insert into route_type values (2,"Air");
 Insert into route_type values (3,"Sea");

    Insert into work_type values (1,"Driver");
    Insert into work_type values (2,"Warehouse Manager");
 
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
    /*build logical routes later*/
    Insert into Routes values (default,1,1,1,2,100);
    Insert into Routes values (default,2,2,2,3,100);
    Insert into Routes values (default,3,3,3,4,100);
    Insert into Routes values (default,4,1,4,5,100);
    Insert into Routes values (default,5,2,5,6,100);
    Insert into Routes values (default,6,3,6,7,100);
    Insert into Routes values (default,7,1,7,8,400);
    Insert into Routes values (default,8,4,8,1,10000);
    Insert into Routes values (default,9,4,7,2,7000);
    Insert into Routes values (default,10,1,2,4,2000);

    /*fill packages*/



