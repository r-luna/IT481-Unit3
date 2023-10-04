// ORDERS

const template = {
  'OrderID':'',
  'CustomerID':'',
  'EmployeeID':'',
  'OrderDate':'',
  'RequiredDate':'',
  'ShippedDate':'',
  'ShipVia':'',
  'Freight':'',
  'ShipName':'',
  'ShipAddress':'',
  'ShipCity':'',
  'ShipRegion':'',
  'ShipPostalCode':'',
  'ShipCountry':''
};

const content = [
  [10248,'VINET',5,'7/4/1996','8/1/1996','7/16/1996',3,32.38,
    'Vins et alcools Chevalier',"59 rue de l'Abbaye",'Reims',
    null,'51100','France'],

  [10249,'TOMSP',6,'7/5/1996','8/16/1996','7/10/1996',1,11.61,
    'Toms Spezialitäten','Luisenstr. 48','Münster',
    null,'44087','Germany'],

  [10250,'HANAR',4,'7/8/1996','8/5/1996','7/12/1996',2,65.83,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10251,'VICTE',3,'7/8/1996','8/5/1996','7/15/1996',1,41.34,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10252,'SUPRD',4,'7/9/1996','8/6/1996','7/11/1996',2,51.30,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10253,'HANAR',3,'7/10/1996','7/24/1996','7/16/1996',2,58.17,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10254,'CHOPS',5,'7/11/1996','8/8/1996','7/23/1996',2,22.98,
    'Chop-suey Chinese','Hauptstr. 31','Bern',
    null,'3012','Switzerland'],

  [10255,'RICSU',9,'7/12/1996','8/9/1996','7/15/1996',3,148.33,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [10256,'WELLI',3,'7/15/1996','8/12/1996','7/17/1996',2,13.97,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10257,'HILAA',4,'7/16/1996','8/13/1996','7/22/1996',3,81.91,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10258,'ERNSH',1,'7/17/1996','8/14/1996','7/23/1996',1,140.51,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10259,'CENTC',4,'7/18/1996','8/15/1996','7/25/1996',3,3.25,
    'Centro comercial Moctezuma','Sierras de Granada 9993','México D.F.',
    null,'05022','Mexico'],

  [10260,'OTTIK',4,'7/19/1996','8/16/1996','7/29/1996',1,55.09,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [10261,'QUEDE',4,'7/19/1996','8/16/1996','7/30/1996',2,3.05,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10262,'RATTC',8,'7/22/1996','8/19/1996','7/25/1996',3,48.29,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10263,'ERNSH',9,'7/23/1996','8/20/1996','7/31/1996',3,146.06,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10264,'FOLKO',6,'7/24/1996','8/21/1996','8/23/1996',3,3.67,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10265,'BLONP',2,'7/25/1996','8/22/1996','8/12/1996',1,55.28,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10266,'WARTH',3,'7/26/1996','9/6/1996','7/31/1996',3,25.73,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10267,'FRANK',4,'7/29/1996','8/26/1996','8/6/1996',1,208.58,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10268,'GROSR',8,'7/30/1996','8/27/1996','8/2/1996',3,66.29,
    'GROSELLA-Restaurante','5ª Ave. Los Palos Grandes','Caracas',
    'DF','1081','Venezuela'],

  [10269,'WHITC',5,'7/31/1996','8/14/1996','8/9/1996',1,4.56,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10270,'WARTH',1,'8/1/1996','8/29/1996','8/2/1996',1,136.54,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10271,'SPLIR',6,'8/1/1996','8/29/1996','8/30/1996',2,4.54,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10272,'RATTC',6,'8/2/1996','8/30/1996','8/6/1996',2,98.03,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10273,'QUICK',3,'8/5/1996','9/2/1996','8/12/1996',3,76.07,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10274,'VINET',6,'8/6/1996','9/3/1996','8/16/1996',1,6.01,
    'Vins et alcools Chevalier',"59 rue de l'Abbaye",'Reims',
    null,'51100','France'],

  [10275,'MAGAA',1,'8/7/1996','9/4/1996','8/9/1996',1,26.93,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10276,'TORTU',8,'8/8/1996','8/22/1996','8/14/1996',3,13.84,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10277,'MORGK',2,'8/9/1996','9/6/1996','8/13/1996',3,125.77,
    'Morgenstern Gesundkost','Heerstr. 22','Leipzig',
    null,'04179','Germany'],

  [10278,'BERGS',8,'8/12/1996','9/9/1996','8/16/1996',2,92.69,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10279,'LEHMS',8,'8/13/1996','9/10/1996','8/16/1996',2,25.83,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10280,'BERGS',2,'8/14/1996','9/11/1996','9/12/1996',1,8.98,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10281,'ROMEY',4,'8/14/1996','8/28/1996','8/21/1996',1,2.94,
    'Romero y tomillo','Gran Vía, 1','Madrid',
    null,'28001','Spain'],

  [10282,'ROMEY',4,'8/15/1996','9/12/1996','8/21/1996',1,12.69,
    'Romero y tomillo','Gran Vía, 1','Madrid',
    null,'28001','Spain'],

  [10283,'LILAS',3,'8/16/1996','9/13/1996','8/23/1996',3,84.81,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10284,'LEHMS',4,'8/19/1996','9/16/1996','8/27/1996',1,76.56,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10285,'QUICK',1,'8/20/1996','9/17/1996','8/26/1996',2,76.83,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10286,'QUICK',8,'8/21/1996','9/18/1996','8/30/1996',3,229.24,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10287,'RICAR',8,'8/22/1996','9/19/1996','8/28/1996',3,12.76,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10288,'REGGC',4,'8/23/1996','9/20/1996','9/3/1996',1,7.45,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10289,'BSBEV',7,'8/26/1996','9/23/1996','8/28/1996',3,22.77,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10290,'COMMI',8,'8/27/1996','9/24/1996','9/3/1996',1,79.70,
    'Comércio Mineiro','Av. dos Lusíadas, 23','Sao Paulo',
    'SP','05432-043','Brazil'],

  [10291,'QUEDE',6,'8/27/1996','9/24/1996','9/4/1996',2,6.40,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10292,'TRADH',1,'8/28/1996','9/25/1996','9/2/1996',2,1.35,
    'Tradiçao Hipermercados','Av. Inês de Castro, 414','Sao Paulo',
    'SP','05634-030','Brazil'],

  [10293,'TORTU',1,'8/29/1996','9/26/1996','9/11/1996',3,21.18,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10294,'RATTC',4,'8/30/1996','9/27/1996','9/5/1996',2,147.26,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10295,'VINET',2,'9/2/1996','9/30/1996','9/10/1996',2,1.15,
    'Vins et alcools Chevalier',"59 rue de l'Abbaye",'Reims',
    null,'51100','France'],

  [10296,'LILAS',6,'9/3/1996','10/1/1996','9/11/1996',1,0.12,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10297,'BLONP',5,'9/4/1996','10/16/1996','9/10/1996',2,5.74,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10298,'HUNGO',6,'9/5/1996','10/3/1996','9/11/1996',2,168.22,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10299,'RICAR',4,'9/6/1996','10/4/1996','9/13/1996',2,29.76,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10300,'MAGAA',2,'9/9/1996','10/7/1996','9/18/1996',2,17.68,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10301,'WANDK',8,'9/9/1996','10/7/1996','9/17/1996',2,45.08,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10302,'SUPRD',4,'9/10/1996','10/8/1996','10/9/1996',2,6.27,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10303,'GODOS',7,'9/11/1996','10/9/1996','9/18/1996',2,107.83,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [10304,'TORTU',1,'9/12/1996','10/10/1996','9/17/1996',2,63.79,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10305,'OLDWO',8,'9/13/1996','10/11/1996','10/9/1996',3,257.62,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10306,'ROMEY',1,'9/16/1996','10/14/1996','9/23/1996',3,7.56,
    'Romero y tomillo','Gran Vía, 1','Madrid',
    null,'28001','Spain'],

  [10307,'LONEP',2,'9/17/1996','10/15/1996','9/25/1996',2,0.56,
    'Lonesome Pine Restaurant','89 Chiaroscuro Rd.','Portland',
    'OR','97219','USA'],

  [10308,'ANATR',7,'9/18/1996','10/16/1996','9/24/1996',3,1.61,
    'Ana Trujillo Emparedados y helados','Avda. de la Constitución 2222','México D.F.',
    null,'05021','Mexico'],

  [10309,'HUNGO',3,'9/19/1996','10/17/1996','10/23/1996',1,47.30,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10310,'THEBI',8,'9/20/1996','10/18/1996','9/27/1996',2,17.52,
    'The Big Cheese','89 Jefferson Way Suite 2','Portland',
    'OR','97201','USA'],

  [10311,'DUMO',1,'9/20/1996','10/4/1996','9/26/1996',3,24.69,
    'Du monde entier','67, rue des Cinquante Otages','Nantes',
    null,'44000','France'],

  [10312,'WANDK',2,'9/23/1996','10/21/1996','10/3/1996',2,40.26,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10313,'QUICK',2,'9/24/1996','10/22/1996','10/4/1996',2,1.96,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10314,'RATTC',1,'9/25/1996','10/23/1996','10/4/1996',2,74.16,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10315,'ISLAT',4,'9/26/1996','10/24/1996','10/3/1996',2,41.76,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10316,'RATTC',1,'9/27/1996','10/25/1996','10/8/1996',3,150.15,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10317,'LONEP',6,'9/30/1996','10/28/1996','10/10/1996',1,12.69,
    'Lonesome Pine Restaurant','89 Chiaroscuro Rd.','Portland',
    'OR','97219','USA'],

  [10318,'ISLAT',8,'10/1/1996','10/29/1996','10/4/1996',2,4.73,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10319,'TORTU',7,'10/2/1996','10/30/1996','10/11/1996',3,64.50,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10320,'WARTH',5,'10/3/1996','10/17/1996','10/18/1996',3,34.57,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10321,'ISLAT',3,'10/3/1996','10/31/1996','10/11/1996',2,3.43,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10322,'PERIC',7,'10/4/1996','11/1/1996','10/23/1996',3,0.40,
    'Pericles Comidas clásicas','Calle Dr. Jorge Cash 321','México D.F.',
    null,'05033','Mexico'],

  [10323,'KOENE',4,'10/7/1996','11/4/1996','10/14/1996',1,4.88,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10324,'SAVEA',9,'10/8/1996','11/5/1996','10/10/1996',1,214.27,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10325,'KOENE',1,'10/9/1996','10/23/1996','10/14/1996',3,64.86,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10326,'BOLID',4,'10/10/1996','11/7/1996','10/14/1996',2,77.92,
    'Bólido Comidas preparadas','C/ Araquil, 67','Madrid',
    null,'28023','Spain'],

  [10327,'FOLKO',2,'10/11/1996','11/8/1996','10/14/1996',1,63.36,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10328,'FURIB',4,'10/14/1996','11/11/1996','10/17/1996',3,87.03,
    'Furia Bacalhau e Frutos do Mar','Jardim das rosas n. 32','Lisboa',
    null,'1675','Portugal'],

  [10329,'SPLIR',4,'10/15/1996','11/26/1996','10/23/1996',2,191.67,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10330,'LILAS',3,'10/16/1996','11/13/1996','10/28/1996',1,12.75,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10331,'BONAP',9,'10/16/1996','11/27/1996','10/21/1996',1,10.19,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10332,'MEREP',3,'10/17/1996','11/28/1996','10/21/1996',2,52.84,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10333,'WARTH',5,'10/18/1996','11/15/1996','10/25/1996',3,0.59,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10334,'VICTE',8,'10/21/1996','11/18/1996','10/28/1996',2,8.56,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10335,'HUNGO',7,'10/22/1996','11/19/1996','10/24/1996',2,42.11,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10336,'PRINI',7,'10/23/1996','11/20/1996','10/25/1996',2,15.51,
    'Princesa Isabel Vinhos','Estrada da saúde n. 58','Lisboa',
    null,'1756','Portugal'],

  [10337,'FRANK',4,'10/24/1996','11/21/1996','10/29/1996',3,108.26,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10338,'OLDWO',4,'10/25/1996','11/22/1996','10/29/1996',3,84.21,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10339,'MEREP',2,'10/28/1996','11/25/1996','11/4/1996',2,15.66,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10340,'BONAP',1,'10/29/1996','11/26/1996','11/8/1996',3,166.31,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10341,'SIMOB',7,'10/29/1996','11/26/1996','11/5/1996',3,26.78,
    'Simons bistro','Vinbæltet 34','Kobenhavn',
    null,'1734','Denmark'],

  [10342,'FRANK',4,'10/30/1996','11/13/1996','11/4/1996',2,54.83,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10343,'LEHMS',4,'10/31/1996','11/28/1996','11/6/1996',1,110.37,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10344,'WHITC',4,'11/1/1996','11/29/1996','11/5/1996',2,23.29,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10345,'QUICK',2,'11/4/1996','12/2/1996','11/11/1996',2,249.06,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10346,'RATTC',3,'11/5/1996','12/17/1996','11/8/1996',3,142.08,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10347,'FAMIA',4,'11/6/1996','12/4/1996','11/8/1996',3,3.10,
    'Familia Arquibaldo','Rua Orós, 92','Sao Paulo',
    'SP','05442-030','Brazil'],

  [10348,'WANDK',4,'11/7/1996','12/5/1996','11/15/1996',2,0.78,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10349,'SPLIR',7,'11/8/1996','12/6/1996','11/15/1996',1,8.63,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10350,'LAMAI',6,'11/11/1996','12/9/1996','12/3/1996',2,64.19,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10351,'ERNSH',1,'11/11/1996','12/9/1996','11/20/1996',1,162.33,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10352,'FURIB',3,'11/12/1996','11/26/1996','11/18/1996',3,1.30,
    'Furia Bacalhau e Frutos do Mar','Jardim das rosas n. 32','Lisboa',
    null,'1675','Portugal'],

  [10353,'PICCO',7,'11/13/1996','12/11/1996','11/25/1996',3,360.63,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10354,'PERIC',8,'11/14/1996','12/12/1996','11/20/1996',3,53.80,
    'Pericles Comidas clásicas','Calle Dr. Jorge Cash 321','México D.F.',
    null,'05033','Mexico'],

  [10355,'AROUT',6,'11/15/1996','12/13/1996','11/20/1996',1,41.95,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10356,'WANDK',6,'11/18/1996','12/16/1996','11/27/1996',2,36.71,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10357,'LILAS',1,'11/19/1996','12/17/1996','12/2/1996',3,34.88,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10358,'LAMAI',5,'11/20/1996','12/18/1996','11/27/1996',1,19.64,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10359,'SEVES',5,'11/21/1996','12/19/1996','11/26/1996',3,288.43,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10360,'BLONP',4,'11/22/1996','12/20/1996','12/2/1996',3,131.70,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10361,'QUICK',1,'11/22/1996','12/20/1996','12/3/1996',2,183.17,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10362,'BONAP',3,'11/25/1996','12/23/1996','11/28/1996',1,96.04,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10363,'DRACD',4,'11/26/1996','12/24/1996','12/4/1996',3,30.54,
    'Drachenblut Delikatessen','Walserweg 21','Aachen',
    null,'52066','Germany'],

  [10364,'EASTC',1,'11/26/1996','1/7/1997','12/4/1996',1,71.97,
    'Eastern Connection','35 King George','London',
    null,'WX3 6FW','UK'],

  [10365,'ANTO',3,'11/27/1996','12/25/1996','12/2/1996',2,22.00,
    'Antonio Moreno Taquería','Mataderos  2312','México D.F.',
    null,'05023','Mexico'],

  [10366,'GALED',8,'11/28/1996','1/9/1997','12/30/1996',2,10.14,
    'Galería del gastronómo','Rambla de Cataluña, 23','Barcelona',
    null,'8022','Spain'],

  [10367,'VAFFE',7,'11/28/1996','12/26/1996','12/2/1996',3,13.55,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10368,'ERNSH',2,'11/29/1996','12/27/1996','12/2/1996',2,101.95,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10369,'SPLIR',8,'12/2/1996','12/30/1996','12/9/1996',2,195.68,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10370,'CHOPS',6,'12/3/1996','12/31/1996','12/27/1996',2,1.17,
    'Chop-suey Chinese','Hauptstr. 31','Bern',
    null,'3012','Switzerland'],

  [10371,'LAMAI',1,'12/3/1996','12/31/1996','12/24/1996',1,0.45,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10372,'QUEE',5,'12/4/1996','1/1/1997','12/9/1996',2,890.78,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10373,'HUNGO',4,'12/5/1996','1/2/1997','12/11/1996',3,124.12,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10374,'WOLZA',1,'12/5/1996','1/2/1997','12/9/1996',3,3.94,
    'Wolski Zajazd','ul. Filtrowa 68','Warszawa',
    null,'01-012','Poland'],

  [10375,'HUNGC',3,'12/6/1996','1/3/1997','12/9/1996',2,20.12,
    'Hungry Coyote Import Store','City Center Plaza 516 Main St.','Elgin',
    'OR','97827','USA'],

  [10376,'MEREP',1,'12/9/1996','1/6/1997','12/13/1996',2,20.39,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10377,'SEVES',1,'12/9/1996','1/6/1997','12/13/1996',3,22.21,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10378,'FOLKO',5,'12/10/1996','1/7/1997','12/19/1996',3,5.44,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10379,'QUEDE',2,'12/11/1996','1/8/1997','12/13/1996',1,45.03,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10380,'HUNGO',8,'12/12/1996','1/9/1997','1/16/1997',3,35.03,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10381,'LILAS',3,'12/12/1996','1/9/1997','12/13/1996',3,7.99,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10382,'ERNSH',4,'12/13/1996','1/10/1997','12/16/1996',1,94.77,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10383,'AROUT',8,'12/16/1996','1/13/1997','12/18/1996',3,34.24,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10384,'BERGS',3,'12/16/1996','1/13/1997','12/20/1996',3,168.64,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10385,'SPLIR',1,'12/17/1996','1/14/1997','12/23/1996',2,30.96,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10386,'FAMIA',9,'12/18/1996','1/1/1997','12/25/1996',3,13.99,
    'Familia Arquibaldo','Rua Orós, 92','Sao Paulo',
    'SP','05442-030','Brazil'],

  [10387,'SANTG',1,'12/18/1996','1/15/1997','12/20/1996',2,93.63,
    'Santé Gourmet','Erling Skakkes gate 78','Stavern',
    null,'4110','Norway'],

  [10388,'SEVES',2,'12/19/1996','1/16/1997','12/20/1996',1,34.86,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10389,'BOTTM',4,'12/20/1996','1/17/1997','12/24/1996',2,47.42,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10390,'ERNSH',6,'12/23/1996','1/20/1997','12/26/1996',1,126.38,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10391,'DRACD',3,'12/23/1996','1/20/1997','12/31/1996',3,5.45,
    'Drachenblut Delikatessen','Walserweg 21','Aachen',
    null,'52066','Germany'],

  [10392,'PICCO',2,'12/24/1996','1/21/1997','1/1/1997',3,122.46,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10393,'SAVEA',1,'12/25/1996','1/22/1997','1/3/1997',3,126.56,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10394,'HUNGC',1,'12/25/1996','1/22/1997','1/3/1997',3,30.34,
    'Hungry Coyote Import Store','City Center Plaza 516 Main St.','Elgin',
    'OR','97827','USA'],

  [10395,'HILAA',6,'12/26/1996','1/23/1997','1/3/1997',1,184.41,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10396,'FRANK',1,'12/27/1996','1/10/1997','1/6/1997',3,135.35,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10397,'PRINI',5,'12/27/1996','1/24/1997','1/2/1997',1,60.26,
    'Princesa Isabel Vinhos','Estrada da saúde n. 58','Lisboa',
    null,'1756','Portugal'],

  [10398,'SAVEA',2,'12/30/1996','1/27/1997','1/9/1997',3,89.16,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10399,'VAFFE',8,'12/31/1996','1/14/1997','1/8/1997',3,27.36,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10400,'EASTC',1,'1/1/1997','1/29/1997','1/16/1997',3,83.93,
    'Eastern Connection','35 King George','London',
    null,'WX3 6FW','UK'],

  [10401,'RATTC',1,'1/1/1997','1/29/1997','1/10/1997',1,12.51,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10402,'ERNSH',8,'1/2/1997','2/13/1997','1/10/1997',2,67.88,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10403,'ERNSH',4,'1/3/1997','1/31/1997','1/9/1997',3,73.79,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10404,'MAGAA',2,'1/3/1997','1/31/1997','1/8/1997',1,155.97,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10405,'LINOD',1,'1/6/1997','2/3/1997','1/22/1997',1,34.82,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10406,'QUEE',7,'1/7/1997','2/18/1997','1/13/1997',1,108.04,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10407,'OTTIK',2,'1/7/1997','2/4/1997','1/30/1997',2,91.48,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [10408,'FOLIG',8,'1/8/1997','2/5/1997','1/14/1997',1,11.26,
    'Folies gourmandes','184, chaussée de Tournai','Lille',
    null,'59000','France'],

  [10409,'OCEA',3,'1/9/1997','2/6/1997','1/14/1997',1,29.83,
    'Océano Atlántico Ltda.','Ing. Gustavo Moncada 8585 Piso 20-A','Buenos Aires',
    null,'1010','Argentina'],

  [10410,'BOTTM',3,'1/10/1997','2/7/1997','1/15/1997',3,2.40,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10411,'BOTTM',9,'1/10/1997','2/7/1997','1/21/1997',3,23.65,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10412,'WARTH',8,'1/13/1997','2/10/1997','1/15/1997',2,3.77,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10413,'LAMAI',3,'1/14/1997','2/11/1997','1/16/1997',2,95.66,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10414,'FAMIA',2,'1/14/1997','2/11/1997','1/17/1997',3,21.48,
    'Familia Arquibaldo','Rua Orós, 92','Sao Paulo',
    'SP','05442-030','Brazil'],

  [10415,'HUNGC',3,'1/15/1997','2/12/1997','1/24/1997',1,0.20,
    'Hungry Coyote Import Store','City Center Plaza 516 Main St.','Elgin',
    'OR','97827','USA'],

  [10416,'WARTH',8,'1/16/1997','2/13/1997','1/27/1997',3,22.72,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10417,'SIMOB',4,'1/16/1997','2/13/1997','1/28/1997',3,70.29,
    'Simons bistro','Vinbæltet 34','Kobenhavn',
    null,'1734','Denmark'],

  [10418,'QUICK',4,'1/17/1997','2/14/1997','1/24/1997',1,17.55,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10419,'RICSU',4,'1/20/1997','2/17/1997','1/30/1997',2,137.35,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [10420,'WELLI',3,'1/21/1997','2/18/1997','1/27/1997',1,44.12,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10421,'QUEDE',8,'1/21/1997','3/4/1997','1/27/1997',1,99.23,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10422,'FRANS',2,'1/22/1997','2/19/1997','1/31/1997',1,3.02,
    'Franchi S.p.A.','Via Monte Bianco 34','Torino',
    null,'10100','Italy'],

  [10423,'GOURL',6,'1/23/1997','2/6/1997','2/24/1997',3,24.50,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [10424,'MEREP',7,'1/23/1997','2/20/1997','1/27/1997',2,370.61,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10425,'LAMAI',6,'1/24/1997','2/21/1997','2/14/1997',2,7.93,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10426,'GALED',4,'1/27/1997','2/24/1997','2/6/1997',1,18.69,
    'Galería del gastronómo','Rambla de Cataluña, 23','Barcelona',
    null,'8022','Spain'],

  [10427,'PICCO',4,'1/27/1997','2/24/1997','3/3/1997',2,31.29,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10428,'REGGC',7,'1/28/1997','2/25/1997','2/4/1997',1,11.09,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10429,'HUNGO',3,'1/29/1997','3/12/1997','2/7/1997',2,56.63,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10430,'ERNSH',4,'1/30/1997','2/13/1997','2/3/1997',1,458.78,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10431,'BOTTM',4,'1/30/1997','2/13/1997','2/7/1997',2,44.17,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10432,'SPLIR',3,'1/31/1997','2/14/1997','2/7/1997',2,4.34,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10433,'PRINI',3,'2/3/1997','3/3/1997','3/4/1997',3,73.83,
    'Princesa Isabel Vinhos','Estrada da saúde n. 58','Lisboa',
    null,'1756','Portugal'],

  [10434,'FOLKO',3,'2/3/1997','3/3/1997','2/13/1997',2,17.92,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10435,'CONSH',8,'2/4/1997','3/18/1997','2/7/1997',2,9.21,
    'Consolidated Holdings','Berkeley Gardens 12  Brewery','London',
    null,'WX1 6LT','UK'],

  [10436,'BLONP',3,'2/5/1997','3/5/1997','2/11/1997',2,156.66,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10437,'WARTH',8,'2/5/1997','3/5/1997','2/12/1997',1,19.97,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10438,'TOMSP',3,'2/6/1997','3/6/1997','2/14/1997',2,8.24,
    'Toms Spezialitäten','Luisenstr. 48','Münster',
    null,'44087','Germany'],

  [10439,'MEREP',6,'2/7/1997','3/7/1997','2/10/1997',3,4.07,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10440,'SAVEA',4,'2/10/1997','3/10/1997','2/28/1997',2,86.53,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10441,'OLDWO',3,'2/10/1997','3/24/1997','3/14/1997',2,73.02,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10442,'ERNSH',3,'2/11/1997','3/11/1997','2/18/1997',2,47.94,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10443,'REGGC',8,'2/12/1997','3/12/1997','2/14/1997',1,13.95,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10444,'BERGS',3,'2/12/1997','3/12/1997','2/21/1997',3,3.50,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10445,'BERGS',3,'2/13/1997','3/13/1997','2/20/1997',1,9.30,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10446,'TOMSP',6,'2/14/1997','3/14/1997','2/19/1997',1,14.68,
    'Toms Spezialitäten','Luisenstr. 48','Münster',
    null,'44087','Germany'],

  [10447,'RICAR',4,'2/14/1997','3/14/1997','3/7/1997',2,68.66,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10448,'RANCH',4,'2/17/1997','3/17/1997','2/24/1997',2,38.82,
    'Rancho grande','Av. del Libertador 900','Buenos Aires',
    null,'1010','Argentina'],

  [10449,'BLONP',3,'2/18/1997','3/18/1997','2/27/1997',2,53.30,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10450,'VICTE',8,'2/19/1997','3/19/1997','3/11/1997',2,7.23,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10451,'QUICK',4,'2/19/1997','3/5/1997','3/12/1997',3,189.09,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10452,'SAVEA',8,'2/20/1997','3/20/1997','2/26/1997',1,140.26,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10453,'AROUT',1,'2/21/1997','3/21/1997','2/26/1997',2,25.36,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10454,'LAMAI',4,'2/21/1997','3/21/1997','2/25/1997',3,2.74,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10455,'WARTH',8,'2/24/1997','4/7/1997','3/3/1997',2,180.45,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10456,'KOENE',8,'2/25/1997','4/8/1997','2/28/1997',2,8.12,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10457,'KOENE',2,'2/25/1997','3/25/1997','3/3/1997',1,11.57,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10458,'SUPRD',7,'2/26/1997','3/26/1997','3/4/1997',3,147.06,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10459,'VICTE',4,'2/27/1997','3/27/1997','2/28/1997',2,25.09,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10460,'FOLKO',8,'2/28/1997','3/28/1997','3/3/1997',1,16.27,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10461,'LILAS',1,'2/28/1997','3/28/1997','3/5/1997',3,148.61,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10462,'CONSH',2,'3/3/1997','3/31/1997','3/18/1997',1,6.17,
    'Consolidated Holdings','Berkeley Gardens 12  Brewery','London',
    null,'WX1 6LT','UK'],

  [10463,'SUPRD',5,'3/4/1997','4/1/1997','3/6/1997',3,14.78,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10464,'FURIB',4,'3/4/1997','4/1/1997','3/14/1997',2,89.00,
    'Furia Bacalhau e Frutos do Mar','Jardim das rosas n. 32','Lisboa',
    null,'1675','Portugal'],

  [10465,'VAFFE',1,'3/5/1997','4/2/1997','3/14/1997',3,145.04,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10466,'COMMI',4,'3/6/1997','4/3/1997','3/13/1997',1,11.93,
    'Comércio Mineiro','Av. dos Lusíadas, 23','Sao Paulo',
    'SP','05432-043','Brazil'],

  [10467,'MAGAA',8,'3/6/1997','4/3/1997','3/11/1997',2,4.93,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10468,'KOENE',3,'3/7/1997','4/4/1997','3/12/1997',3,44.12,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10469,'WHITC',1,'3/10/1997','4/7/1997','3/14/1997',1,60.18,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10470,'BONAP',4,'3/11/1997','4/8/1997','3/14/1997',2,64.56,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10471,'BSBEV',2,'3/11/1997','4/8/1997','3/18/1997',3,45.59,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10472,'SEVES',8,'3/12/1997','4/9/1997','3/19/1997',1,4.20,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10473,'ISLAT',1,'3/13/1997','3/27/1997','3/21/1997',3,16.37,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10474,'PERIC',5,'3/13/1997','4/10/1997','3/21/1997',2,83.49,
    'Pericles Comidas clásicas','Calle Dr. Jorge Cash 321','México D.F.',
    null,'05033','Mexico'],

  [10475,'SUPRD',9,'3/14/1997','4/11/1997','4/4/1997',1,68.52,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10476,'HILAA',8,'3/17/1997','4/14/1997','3/24/1997',3,4.41,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10477,'PRINI',5,'3/17/1997','4/14/1997','3/25/1997',2,13.02,
    'Princesa Isabel Vinhos','Estrada da saúde n. 58','Lisboa',
    null,'1756','Portugal'],

  [10478,'VICTE',2,'3/18/1997','4/1/1997','3/26/1997',3,4.81,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10479,'RATTC',3,'3/19/1997','4/16/1997','3/21/1997',3,708.95,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10480,'FOLIG',6,'3/20/1997','4/17/1997','3/24/1997',2,1.35,
    'Folies gourmandes','184, chaussée de Tournai','Lille',
    null,'59000','France'],

  [10481,'RICAR',8,'3/20/1997','4/17/1997','3/25/1997',2,64.33,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10482,'LAZYK',1,'3/21/1997','4/18/1997','4/10/1997',3,7.48,
    'Lazy K Kountry Store','12 Orchestra Terrace','Walla Walla',
    'WA','99362','USA'],

  [10483,'WHITC',7,'3/24/1997','4/21/1997','4/25/1997',2,15.28,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10484,'BSBEV',3,'3/24/1997','4/21/1997','4/1/1997',3,6.88,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10485,'LINOD',4,'3/25/1997','4/8/1997','3/31/1997',2,64.45,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10486,'HILAA',1,'3/26/1997','4/23/1997','4/2/1997',2,30.53,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10487,'QUEE',2,'3/26/1997','4/23/1997','3/28/1997',2,71.07,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10488,'FRANK',8,'3/27/1997','4/24/1997','4/2/1997',2,4.93,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10489,'PICCO',6,'3/28/1997','4/25/1997','4/9/1997',2,5.29,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10490,'HILAA',7,'3/31/1997','4/28/1997','4/3/1997',2,210.19,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10491,'FURIB',8,'3/31/1997','4/28/1997','4/8/1997',3,16.96,
    'Furia Bacalhau e Frutos do Mar','Jardim das rosas n. 32','Lisboa',
    null,'1675','Portugal'],

  [10492,'BOTTM',3,'4/1/1997','4/29/1997','4/11/1997',1,62.89,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10493,'LAMAI',4,'4/2/1997','4/30/1997','4/10/1997',3,10.64,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10494,'COMMI',4,'4/2/1997','4/30/1997','4/9/1997',2,65.99,
    'Comércio Mineiro','Av. dos Lusíadas, 23','Sao Paulo',
    'SP','05432-043','Brazil'],

  [10495,'LAUGB',3,'4/3/1997','5/1/1997','4/11/1997',3,4.65,
    'Laughing Bacchus Wine Cellars','2319 Elm St.','Vancouver',
    'BC','V3F 2K1','Canada'],

  [10496,'TRADH',7,'4/4/1997','5/2/1997','4/7/1997',2,46.77,
    'Tradiçao Hipermercados','Av. Inês de Castro, 414','Sao Paulo',
    'SP','05634-030','Brazil'],

  [10497,'LEHMS',7,'4/4/1997','5/2/1997','4/7/1997',1,36.21,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10498,'HILAA',8,'4/7/1997','5/5/1997','4/11/1997',2,29.75,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10499,'LILAS',4,'4/8/1997','5/6/1997','4/16/1997',2,102.02,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10500,'LAMAI',6,'4/9/1997','5/7/1997','4/17/1997',1,42.68,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10501,'BLAUS',9,'4/9/1997','5/7/1997','4/16/1997',3,8.85,
    'Blauer See Delikatessen','Forsterstr. 57','Mannheim',
    null,'68306','Germany'],

  [10502,'PERIC',2,'4/10/1997','5/8/1997','4/29/1997',1,69.32,
    'Pericles Comidas clásicas','Calle Dr. Jorge Cash 321','México D.F.',
    null,'05033','Mexico'],

  [10503,'HUNGO',6,'4/11/1997','5/9/1997','4/16/1997',2,16.74,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10504,'WHITC',4,'4/11/1997','5/9/1997','4/18/1997',3,59.13,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10505,'MEREP',3,'4/14/1997','5/12/1997','4/21/1997',3,7.13,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10506,'KOENE',9,'4/15/1997','5/13/1997','5/2/1997',2,21.19,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10507,'ANTO',7,'4/15/1997','5/13/1997','4/22/1997',1,47.45,
    'Antonio Moreno Taquería','Mataderos  2312','México D.F.',
    null,'05023','Mexico'],

  [10508,'OTTIK',1,'4/16/1997','5/14/1997','5/13/1997',2,4.99,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [10509,'BLAUS',4,'4/17/1997','5/15/1997','4/29/1997',1,0.15,
    'Blauer See Delikatessen','Forsterstr. 57','Mannheim',
    null,'68306','Germany'],

  [10510,'SAVEA',6,'4/18/1997','5/16/1997','4/28/1997',3,367.63,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10511,'BONAP',4,'4/18/1997','5/16/1997','4/21/1997',3,350.64,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10512,'FAMIA',7,'4/21/1997','5/19/1997','4/24/1997',2,3.53,
    'Familia Arquibaldo','Rua Orós, 92','Sao Paulo',
    'SP','05442-030','Brazil'],

  [10513,'WANDK',7,'4/22/1997','6/3/1997','4/28/1997',1,105.65,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10514,'ERNSH',3,'4/22/1997','5/20/1997','5/16/1997',2,789.95,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10515,'QUICK',2,'4/23/1997','5/7/1997','5/23/1997',1,204.47,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10516,'HUNGO',2,'4/24/1997','5/22/1997','5/1/1997',3,62.78,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10517,'NORTS',3,'4/24/1997','5/22/1997','4/29/1997',3,32.07,
    'North/South','South House 300 Queensbridge','London',
    null,'SW7 1RZ','UK'],

  [10518,'TORTU',4,'4/25/1997','5/9/1997','5/5/1997',2,218.15,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10519,'CHOPS',6,'4/28/1997','5/26/1997','5/1/1997',3,91.76,
    'Chop-suey Chinese','Hauptstr. 31','Bern',
    null,'3012','Switzerland'],

  [10520,'SANTG',7,'4/29/1997','5/27/1997','5/1/1997',1,13.37,
    'Santé Gourmet','Erling Skakkes gate 78','Stavern',
    null,'4110','Norway'],

  [10521,'CACTU',8,'4/29/1997','5/27/1997','5/2/1997',2,17.22,
    'Cactus Comidas para llevar','Cerrito 333','Buenos Aires',
    null,'1010','Argentina'],

  [10522,'LEHMS',4,'4/30/1997','5/28/1997','5/6/1997',1,45.33,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10523,'SEVES',7,'5/1/1997','5/29/1997','5/30/1997',2,77.63,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10524,'BERGS',1,'5/1/1997','5/29/1997','5/7/1997',2,244.79,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10525,'BONAP',1,'5/2/1997','5/30/1997','5/23/1997',2,11.06,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10526,'WARTH',4,'5/5/1997','6/2/1997','5/15/1997',2,58.59,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10527,'QUICK',7,'5/5/1997','6/2/1997','5/7/1997',1,41.90,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10528,'GREAL',6,'5/6/1997','5/20/1997','5/9/1997',2,3.35,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [10529,'MAISD',5,'5/7/1997','6/4/1997','5/9/1997',2,66.69,
    'Maison Dewey','Rue Joseph-Bens 532','Bruxelles',
    null,'B-1180','Belgium'],

  [10530,'PICCO',3,'5/8/1997','6/5/1997','5/12/1997',2,339.22,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10531,'OCEA',7,'5/8/1997','6/5/1997','5/19/1997',1,8.12,
    'Océano Atlántico Ltda.','Ing. Gustavo Moncada 8585 Piso 20-A','Buenos Aires',
    null,'1010','Argentina'],

  [10532,'EASTC',7,'5/9/1997','6/6/1997','5/12/1997',3,74.46,
    'Eastern Connection','35 King George','London',
    null,'WX3 6FW','UK'],

  [10533,'FOLKO',8,'5/12/1997','6/9/1997','5/22/1997',1,188.04,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10534,'LEHMS',8,'5/12/1997','6/9/1997','5/14/1997',2,27.94,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10535,'ANTO',4,'5/13/1997','6/10/1997','5/21/1997',1,15.64,
    'Antonio Moreno Taquería','Mataderos  2312','México D.F.',
    null,'05023','Mexico'],

  [10536,'LEHMS',3,'5/14/1997','6/11/1997','6/6/1997',2,58.88,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10537,'RICSU',1,'5/14/1997','5/28/1997','5/19/1997',1,78.85,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [10538,'BSBEV',9,'5/15/1997','6/12/1997','5/16/1997',3,4.87,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10539,'BSBEV',6,'5/16/1997','6/13/1997','5/23/1997',3,12.36,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10540,'QUICK',3,'5/19/1997','6/16/1997','6/13/1997',3,1007.64,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10541,'HANAR',2,'5/19/1997','6/16/1997','5/29/1997',1,68.65,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10542,'KOENE',1,'5/20/1997','6/17/1997','5/26/1997',3,10.95,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10543,'LILAS',8,'5/21/1997','6/18/1997','5/23/1997',2,48.17,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10544,'LONEP',4,'5/21/1997','6/18/1997','5/30/1997',1,24.91,
    'Lonesome Pine Restaurant','89 Chiaroscuro Rd.','Portland',
    'OR','97219','USA'],

  [10545,'LAZYK',8,'5/22/1997','6/19/1997','6/26/1997',2,11.92,
    'Lazy K Kountry Store','12 Orchestra Terrace','Walla Walla',
    'WA','99362','USA'],

  [10546,'VICTE',1,'5/23/1997','6/20/1997','5/27/1997',3,194.72,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10547,'SEVES',3,'5/23/1997','6/20/1997','6/2/1997',2,178.43,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10548,'TOMSP',3,'5/26/1997','6/23/1997','6/2/1997',2,1.43,
    'Toms Spezialitäten','Luisenstr. 48','Münster',
    null,'44087','Germany'],

  [10549,'QUICK',5,'5/27/1997','6/10/1997','5/30/1997',1,171.24,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10550,'GODOS',7,'5/28/1997','6/25/1997','6/6/1997',3,4.32,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [10551,'FURIB',4,'5/28/1997','7/9/1997','6/6/1997',3,72.95,
    'Furia Bacalhau e Frutos do Mar','Jardim das rosas n. 32','Lisboa',
    null,'1675','Portugal'],

  [10552,'HILAA',2,'5/29/1997','6/26/1997','6/5/1997',1,83.22,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10553,'WARTH',2,'5/30/1997','6/27/1997','6/3/1997',2,149.49,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10554,'OTTIK',4,'5/30/1997','6/27/1997','6/5/1997',3,120.97,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [10555,'SAVEA',6,'6/2/1997','6/30/1997','6/4/1997',3,252.49,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10556,'SIMOB',2,'6/3/1997','7/15/1997','6/13/1997',1,9.80,
    'Simons bistro','Vinbæltet 34','Kobenhavn',
    null,'1734','Denmark'],

  [10557,'LEHMS',9,'6/3/1997','6/17/1997','6/6/1997',2,96.72,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10558,'AROUT',1,'6/4/1997','7/2/1997','6/10/1997',2,72.97,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10559,'BLONP',6,'6/5/1997','7/3/1997','6/13/1997',1,8.05,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10560,'FRANK',8,'6/6/1997','7/4/1997','6/9/1997',1,36.65,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10561,'FOLKO',2,'6/6/1997','7/4/1997','6/9/1997',2,242.21,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10562,'REGGC',1,'6/9/1997','7/7/1997','6/12/1997',1,22.95,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10563,'RICAR',2,'6/10/1997','7/22/1997','6/24/1997',2,60.43,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10564,'RATTC',4,'6/10/1997','7/8/1997','6/16/1997',3,13.75,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10565,'MEREP',8,'6/11/1997','7/9/1997','6/18/1997',2,7.15,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10566,'BLONP',9,'6/12/1997','7/10/1997','6/18/1997',1,88.40,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10567,'HUNGO',1,'6/12/1997','7/10/1997','6/17/1997',1,33.97,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10568,'GALED',3,'6/13/1997','7/11/1997','7/9/1997',3,6.54,
    'Galería del gastronómo','Rambla de Cataluña, 23','Barcelona',
    null,'8022','Spain'],

  [10569,'RATTC',5,'6/16/1997','7/14/1997','7/11/1997',1,58.98,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10570,'MEREP',3,'6/17/1997','7/15/1997','6/19/1997',3,188.99,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10571,'ERNSH',8,'6/17/1997','7/29/1997','7/4/1997',3,26.06,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10572,'BERGS',3,'6/18/1997','7/16/1997','6/25/1997',2,116.43,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10573,'ANTO',7,'6/19/1997','7/17/1997','6/20/1997',3,84.84,
    'Antonio Moreno Taquería','Mataderos  2312','México D.F.',
    null,'05023','Mexico'],

  [10574,'TRAIH',4,'6/19/1997','7/17/1997','6/30/1997',2,37.60,
    "Trail's Head Gourmet Provisioners",'722 DaVinci Blvd.','Kirkland',
    'WA','98034','USA'],

  [10575,'MORGK',5,'6/20/1997','7/4/1997','6/30/1997',1,127.34,
    'Morgenstern Gesundkost','Heerstr. 22','Leipzig',
    null,'04179','Germany'],

  [10576,'TORTU',3,'6/23/1997','7/7/1997','6/30/1997',3,18.56,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10577,'TRAIH',9,'6/23/1997','8/4/1997','6/30/1997',2,25.41,
    "Trail's Head Gourmet Provisioners",'722 DaVinci Blvd.','Kirkland',
    'WA','98034','USA'],

  [10578,'BSBEV',4,'6/24/1997','7/22/1997','7/25/1997',3,29.60,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10579,'LETSS',1,'6/25/1997','7/23/1997','7/4/1997',2,13.73,
    "Let's Stop N Shop",'87 Polk St. Suite 5','San Francisco',
    'CA','94117','USA'],

  [10580,'OTTIK',4,'6/26/1997','7/24/1997','7/1/1997',3,75.89,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [10581,'FAMIA',3,'6/26/1997','7/24/1997','7/2/1997',1,3.01,
    'Familia Arquibaldo','Rua Orós, 92','Sao Paulo',
    'SP','05442-030','Brazil'],

  [10582,'BLAUS',3,'6/27/1997','7/25/1997','7/14/1997',2,27.71,
    'Blauer See Delikatessen','Forsterstr. 57','Mannheim',
    null,'68306','Germany'],

  [10583,'WARTH',2,'6/30/1997','7/28/1997','7/4/1997',2,7.28,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10584,'BLONP',4,'6/30/1997','7/28/1997','7/4/1997',1,59.14,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10585,'WELLI',7,'7/1/1997','7/29/1997','7/10/1997',1,13.41,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10586,'REGGC',9,'7/2/1997','7/30/1997','7/9/1997',1,0.48,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10587,'QUEDE',1,'7/2/1997','7/30/1997','7/9/1997',1,62.52,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10588,'QUICK',2,'7/3/1997','7/31/1997','7/10/1997',3,194.67,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10589,'GREAL',8,'7/4/1997','8/1/1997','7/14/1997',2,4.42,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [10590,'MEREP',4,'7/7/1997','8/4/1997','7/14/1997',3,44.77,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10591,'VAFFE',1,'7/7/1997','7/21/1997','7/16/1997',1,55.92,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10592,'LEHMS',3,'7/8/1997','8/5/1997','7/16/1997',1,32.10,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10593,'LEHMS',7,'7/9/1997','8/6/1997','8/13/1997',2,174.20,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10594,'OLDWO',3,'7/9/1997','8/6/1997','7/16/1997',2,5.24,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10595,'ERNSH',2,'7/10/1997','8/7/1997','7/14/1997',1,96.78,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10596,'WHITC',8,'7/11/1997','8/8/1997','8/12/1997',1,16.34,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10597,'PICCO',7,'7/11/1997','8/8/1997','7/18/1997',3,35.12,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10598,'RATTC',1,'7/14/1997','8/11/1997','7/18/1997',3,44.42,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10599,'BSBEV',6,'7/15/1997','8/26/1997','7/21/1997',3,29.98,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10600,'HUNGC',4,'7/16/1997','8/13/1997','7/21/1997',1,45.13,
    'Hungry Coyote Import Store','City Center Plaza 516 Main St.','Elgin',
    'OR','97827','USA'],

  [10601,'HILAA',7,'7/16/1997','8/27/1997','7/22/1997',1,58.30,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10602,'VAFFE',8,'7/17/1997','8/14/1997','7/22/1997',2,2.92,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10603,'SAVEA',8,'7/18/1997','8/15/1997','8/8/1997',2,48.77,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10604,'FURIB',1,'7/18/1997','8/15/1997','7/29/1997',1,7.46,
    'Furia Bacalhau e Frutos do Mar','Jardim das rosas n. 32','Lisboa',
    null,'1675','Portugal'],

  [10605,'MEREP',1,'7/21/1997','8/18/1997','7/29/1997',2,379.13,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10606,'TRADH',4,'7/22/1997','8/19/1997','7/31/1997',3,79.40,
    'Tradiçao Hipermercados','Av. Inês de Castro, 414','Sao Paulo',
    'SP','05634-030','Brazil'],

  [10607,'SAVEA',5,'7/22/1997','8/19/1997','7/25/1997',1,200.24,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10608,'TOMSP',4,'7/23/1997','8/20/1997','8/1/1997',2,27.79,
    'Toms Spezialitäten','Luisenstr. 48','Münster',
    null,'44087','Germany'],

  [10609,'DUMO',7,'7/24/1997','8/21/1997','7/30/1997',2,1.85,
    'Du monde entier','67, rue des Cinquante Otages','Nantes',
    null,'44000','France'],

  [10610,'LAMAI',8,'7/25/1997','8/22/1997','8/6/1997',1,26.78,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10611,'WOLZA',6,'7/25/1997','8/22/1997','8/1/1997',2,80.65,
    'Wolski Zajazd','ul. Filtrowa 68','Warszawa',
    null,'01-012','Poland'],

  [10612,'SAVEA',1,'7/28/1997','8/25/1997','8/1/1997',2,544.08,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10613,'HILAA',4,'7/29/1997','8/26/1997','8/1/1997',2,8.11,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10614,'BLAUS',8,'7/29/1997','8/26/1997','8/1/1997',3,1.93,
    'Blauer See Delikatessen','Forsterstr. 57','Mannheim',
    null,'68306','Germany'],

  [10615,'WILMK',2,'7/30/1997','8/27/1997','8/6/1997',3,0.75,
    'Wilman Kala','Keskuskatu 45','Helsinki',
    null,'21240','Finland'],

  [10616,'GREAL',1,'7/31/1997','8/28/1997','8/5/1997',2,116.53,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [10617,'GREAL',4,'7/31/1997','8/28/1997','8/4/1997',2,18.53,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [10618,'MEREP',1,'8/1/1997','9/12/1997','8/8/1997',1,154.68,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10619,'MEREP',3,'8/4/1997','9/1/1997','8/7/1997',3,91.05,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10620,'LAUGB',2,'8/5/1997','9/2/1997','8/14/1997',3,0.94,
    'Laughing Bacchus Wine Cellars','2319 Elm St.','Vancouver',
    'BC','V3F 2K1','Canada'],

  [10621,'ISLAT',4,'8/5/1997','9/2/1997','8/11/1997',2,23.73,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10622,'RICAR',4,'8/6/1997','9/3/1997','8/11/1997',3,50.97,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10623,'FRANK',8,'8/7/1997','9/4/1997','8/12/1997',2,97.18,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10624,'THECR',4,'8/7/1997','9/4/1997','8/19/1997',2,94.80,
    'The Cracker Box','55 Grizzly Peak Rd.','Butte',
    'MT','59801','USA'],

  [10625,'ANATR',3,'8/8/1997','9/5/1997','8/14/1997',1,43.90,
    'Ana Trujillo Emparedados y helados','Avda. de la Constitución 2222','México D.F.',
    null,'05021','Mexico'],

  [10626,'BERGS',1,'8/11/1997','9/8/1997','8/20/1997',2,138.69,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10627,'SAVEA',8,'8/11/1997','9/22/1997','8/21/1997',3,107.46,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10628,'BLONP',4,'8/12/1997','9/9/1997','8/20/1997',3,30.36,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10629,'GODOS',4,'8/12/1997','9/9/1997','8/20/1997',3,85.46,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [10630,'KOENE',1,'8/13/1997','9/10/1997','8/19/1997',2,32.35,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10631,'LAMAI',8,'8/14/1997','9/11/1997','8/15/1997',1,0.87,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10632,'WANDK',8,'8/14/1997','9/11/1997','8/19/1997',1,41.38,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10633,'ERNSH',7,'8/15/1997','9/12/1997','8/18/1997',3,477.90,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10634,'FOLIG',4,'8/15/1997','9/12/1997','8/21/1997',3,487.38,
    'Folies gourmandes','184, chaussée de Tournai','Lille',
    null,'59000','France'],

  [10635,'MAGAA',8,'8/18/1997','9/15/1997','8/21/1997',3,47.46,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10636,'WARTH',4,'8/19/1997','9/16/1997','8/26/1997',1,1.15,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10637,'QUEE',6,'8/19/1997','9/16/1997','8/26/1997',1,201.29,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10638,'LINOD',3,'8/20/1997','9/17/1997','9/1/1997',1,158.44,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10639,'SANTG',7,'8/20/1997','9/17/1997','8/27/1997',3,38.64,
    'Santé Gourmet','Erling Skakkes gate 78','Stavern',
    null,'4110','Norway'],

  [10640,'WANDK',4,'8/21/1997','9/18/1997','8/28/1997',1,23.55,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10641,'HILAA',4,'8/22/1997','9/19/1997','8/26/1997',2,179.61,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10642,'SIMOB',7,'8/22/1997','9/19/1997','9/5/1997',3,41.89,
    'Simons bistro','Vinbæltet 34','Kobenhavn',
    null,'1734','Denmark'],

  [10643,'ALFKI',6,'8/25/1997','9/22/1997','9/2/1997',1,29.46,
    'Alfreds Futterkiste','Obere Str. 57','Berlin',
    null,'12209','Germany'],

  [10644,'WELLI',3,'8/25/1997','9/22/1997','9/1/1997',2,0.14,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10645,'HANAR',4,'8/26/1997','9/23/1997','9/2/1997',1,12.41,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10646,'HUNGO',9,'8/27/1997','10/8/1997','9/3/1997',3,142.33,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10647,'QUEDE',4,'8/27/1997','9/10/1997','9/3/1997',2,45.54,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10648,'RICAR',5,'8/28/1997','10/9/1997','9/9/1997',2,14.25,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10649,'MAISD',5,'8/28/1997','9/25/1997','8/29/1997',3,6.20,
    'Maison Dewey','Rue Joseph-Bens 532','Bruxelles',
    null,'B-1180','Belgium'],

  [10650,'FAMIA',5,'8/29/1997','9/26/1997','9/3/1997',3,176.81,
    'Familia Arquibaldo','Rua Orós, 92','Sao Paulo',
    'SP','05442-030','Brazil'],

  [10651,'WANDK',8,'9/1/1997','9/29/1997','9/11/1997',2,20.60,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10652,'GOURL',4,'9/1/1997','9/29/1997','9/8/1997',2,7.14,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [10653,'FRANK',1,'9/2/1997','9/30/1997','9/19/1997',1,93.25,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10654,'BERGS',5,'9/2/1997','9/30/1997','9/11/1997',1,55.26,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10655,'REGGC',1,'9/3/1997','10/1/1997','9/11/1997',2,4.41,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10656,'GREAL',6,'9/4/1997','10/2/1997','9/10/1997',1,57.15,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [10657,'SAVEA',2,'9/4/1997','10/2/1997','9/15/1997',2,352.69,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10658,'QUICK',4,'9/5/1997','10/3/1997','9/8/1997',1,364.15,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10659,'QUEE',7,'9/5/1997','10/3/1997','9/10/1997',2,105.81,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10660,'HUNGC',8,'9/8/1997','10/6/1997','10/15/1997',1,111.29,
    'Hungry Coyote Import Store','City Center Plaza 516 Main St.','Elgin',
    'OR','97827','USA'],

  [10661,'HUNGO',7,'9/9/1997','10/7/1997','9/15/1997',3,17.55,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10662,'LONEP',3,'9/9/1997','10/7/1997','9/18/1997',2,1.28,
    'Lonesome Pine Restaurant','89 Chiaroscuro Rd.','Portland',
    'OR','97219','USA'],

  [10663,'BONAP',2,'9/10/1997','9/24/1997','10/3/1997',2,113.15,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10664,'FURIB',1,'9/10/1997','10/8/1997','9/19/1997',3,1.27,
    'Furia Bacalhau e Frutos do Mar','Jardim das rosas n. 32','Lisboa',
    null,'1675','Portugal'],

  [10665,'LONEP',1,'9/11/1997','10/9/1997','9/17/1997',2,26.31,
    'Lonesome Pine Restaurant','89 Chiaroscuro Rd.','Portland',
    'OR','97219','USA'],

  [10666,'RICSU',7,'9/12/1997','10/10/1997','9/22/1997',2,232.42,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [10667,'ERNSH',7,'9/12/1997','10/10/1997','9/19/1997',1,78.09,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10668,'WANDK',1,'9/15/1997','10/13/1997','9/23/1997',2,47.22,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [10669,'SIMOB',2,'9/15/1997','10/13/1997','9/22/1997',1,24.39,
    'Simons bistro','Vinbæltet 34','Kobenhavn',
    null,'1734','Denmark'],

  [10670,'FRANK',4,'9/16/1997','10/14/1997','9/18/1997',1,203.48,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10671,'FRANR',1,'9/17/1997','10/15/1997','9/24/1997',1,30.34,
    'France restauration','54, rue Royale','Nantes',
    null,'44000','France'],

  [10672,'BERGS',9,'9/17/1997','10/1/1997','9/26/1997',2,95.75,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10673,'WILMK',2,'9/18/1997','10/16/1997','9/19/1997',1,22.76,
    'Wilman Kala','Keskuskatu 45','Helsinki',
    null,'21240','Finland'],

  [10674,'ISLAT',4,'9/18/1997','10/16/1997','9/30/1997',2,0.90,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10675,'FRANK',5,'9/19/1997','10/17/1997','9/23/1997',2,31.85,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10676,'TORTU',2,'9/22/1997','10/20/1997','9/29/1997',2,2.01,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10677,'ANTO',1,'9/22/1997','10/20/1997','9/26/1997',3,4.03,
    'Antonio Moreno Taquería','Mataderos  2312','México D.F.',
    null,'05023','Mexico'],

  [10678,'SAVEA',7,'9/23/1997','10/21/1997','10/16/1997',3,388.98,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10679,'BLONP',8,'9/23/1997','10/21/1997','9/30/1997',3,27.94,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10680,'OLDWO',1,'9/24/1997','10/22/1997','9/26/1997',1,26.61,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10681,'GREAL',3,'9/25/1997','10/23/1997','9/30/1997',3,76.13,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [10682,'ANTO',3,'9/25/1997','10/23/1997','10/1/1997',2,36.13,
    'Antonio Moreno Taquería','Mataderos  2312','México D.F.',
    null,'05023','Mexico'],

  [10683,'DUMO',2,'9/26/1997','10/24/1997','10/1/1997',1,4.40,
    'Du monde entier','67, rue des Cinquante Otages','Nantes',
    null,'44000','France'],

  [10684,'OTTIK',3,'9/26/1997','10/24/1997','9/30/1997',1,145.63,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [10685,'GOURL',4,'9/29/1997','10/13/1997','10/3/1997',2,33.75,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [10686,'PICCO',2,'9/30/1997','10/28/1997','10/8/1997',1,96.50,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10687,'HUNGO',9,'9/30/1997','10/28/1997','10/30/1997',2,296.43,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10688,'VAFFE',4,'10/1/1997','10/15/1997','10/7/1997',2,299.09,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10689,'BERGS',1,'10/1/1997','10/29/1997','10/7/1997',2,13.42,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10690,'HANAR',1,'10/2/1997','10/30/1997','10/3/1997',1,15.80,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10691,'QUICK',2,'10/3/1997','11/14/1997','10/22/1997',2,810.05,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10692,'ALFKI',4,'10/3/1997','10/31/1997','10/13/1997',2,61.02,
    "Alfred's Futterkiste",'Obere Str. 57','Berlin',
    null,'12209','Germany'],

  [10693,'WHITC',3,'10/6/1997','10/20/1997','10/10/1997',3,139.34,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10694,'QUICK',8,'10/6/1997','11/3/1997','10/9/1997',3,398.36,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10695,'WILMK',7,'10/7/1997','11/18/1997','10/14/1997',1,16.72,
    'Wilman Kala','Keskuskatu 45','Helsinki',
    null,'21240','Finland'],

  [10696,'WHITC',8,'10/8/1997','11/19/1997','10/14/1997',3,102.55,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10697,'LINOD',3,'10/8/1997','11/5/1997','10/14/1997',1,45.52,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10698,'ERNSH',4,'10/9/1997','11/6/1997','10/17/1997',1,272.47,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10699,'MORGK',3,'10/9/1997','11/6/1997','10/13/1997',3,0.58,
    'Morgenstern Gesundkost','Heerstr. 22','Leipzig',
    null,'04179','Germany'],

  [10700,'SAVEA',3,'10/10/1997','11/7/1997','10/16/1997',1,65.10,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10701,'HUNGO',6,'10/13/1997','10/27/1997','10/15/1997',3,220.31,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10702,'ALFKI',4,'10/13/1997','11/24/1997','10/21/1997',1,23.94,
    "Alfred's Futterkiste",'Obere Str. 57','Berlin',
    null,'12209','Germany'],

  [10703,'FOLKO',6,'10/14/1997','11/11/1997','10/20/1997',2,152.30,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10704,'QUEE',6,'10/14/1997','11/11/1997','11/7/1997',1,4.78,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10705,'HILAA',9,'10/15/1997','11/12/1997','11/18/1997',2,3.52,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10706,'OLDWO',8,'10/16/1997','11/13/1997','10/21/1997',3,135.63,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10707,'AROUT',4,'10/16/1997','10/30/1997','10/23/1997',3,21.74,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10708,'THEBI',6,'10/17/1997','11/28/1997','11/5/1997',2,2.96,
    'The Big Cheese','89 Jefferson Way Suite 2','Portland',
    'OR','97201','USA'],

  [10709,'GOURL',1,'10/17/1997','11/14/1997','11/20/1997',3,210.80,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [10710,'FRANS',1,'10/20/1997','11/17/1997','10/23/1997',1,4.98,
    'Franchi S.p.A.','Via Monte Bianco 34','Torino',
    null,'10100','Italy'],

  [10711,'SAVEA',5,'10/21/1997','12/2/1997','10/29/1997',2,52.41,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10712,'HUNGO',3,'10/21/1997','11/18/1997','10/31/1997',1,89.93,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10713,'SAVEA',1,'10/22/1997','11/19/1997','10/24/1997',1,167.05,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10714,'SAVEA',5,'10/22/1997','11/19/1997','10/27/1997',3,24.49,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10715,'BONAP',3,'10/23/1997','11/6/1997','10/29/1997',1,63.20,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10716,'RANCH',4,'10/24/1997','11/21/1997','10/27/1997',2,22.57,
    'Rancho grande','Av. del Libertador 900','Buenos Aires',
    null,'1010','Argentina'],

  [10717,'FRANK',1,'10/24/1997','11/21/1997','10/29/1997',2,59.25,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10718,'KOENE',1,'10/27/1997','11/24/1997','10/29/1997',3,170.88,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10719,'LETSS',8,'10/27/1997','11/24/1997','11/5/1997',2,51.44,
    "Let's Stop N Shop",'87 Polk St. Suite 5','San Francisco',
    'CA','94117','USA'],

  [10720,'QUEDE',8,'10/28/1997','11/11/1997','11/5/1997',2,9.53,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10721,'QUICK',5,'10/29/1997','11/26/1997','10/31/1997',3,48.92,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10722,'SAVEA',8,'10/29/1997','12/10/1997','11/4/1997',1,74.58,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10723,'WHITC',3,'10/30/1997','11/27/1997','11/25/1997',1,21.72,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10724,'MEREP',8,'10/30/1997','12/11/1997','11/5/1997',2,57.75,
    'Mère Paillarde','43 rue St. Laurent','Montréal',
    'Québec','H1J 1C3','Canada'],

  [10725,'FAMIA',4,'10/31/1997','11/28/1997','11/5/1997',3,10.83,
    'Familia Arquibaldo','Rua Orós, 92','Sao Paulo',
    'SP','05442-030','Brazil'],

  [10726,'EASTC',4,'11/3/1997','11/17/1997','12/5/1997',1,16.56,
    'Eastern Connection','35 King George','London',
    null,'WX3 6FW','UK'],

  [10727,'REGGC',2,'11/3/1997','12/1/1997','12/5/1997',1,89.90,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10728,'QUEE',4,'11/4/1997','12/2/1997','11/11/1997',2,58.33,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10729,'LINOD',8,'11/4/1997','12/16/1997','11/14/1997',3,141.06,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10730,'BONAP',5,'11/5/1997','12/3/1997','11/14/1997',1,20.12,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10731,'CHOPS',7,'11/6/1997','12/4/1997','11/14/1997',1,96.65,
    'Chop-suey Chinese','Hauptstr. 31','Bern',
    null,'3012','Switzerland'],

  [10732,'BONAP',3,'11/6/1997','12/4/1997','11/7/1997',1,16.97,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10733,'BERGS',1,'11/7/1997','12/5/1997','11/10/1997',3,110.11,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10734,'GOURL',2,'11/7/1997','12/5/1997','11/12/1997',3,1.63,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [10735,'LETSS',6,'11/10/1997','12/8/1997','11/21/1997',2,45.97,
    "Let's Stop N Shop",'87 Polk St. Suite 5','San Francisco',
    'CA','94117','USA'],

  [10736,'HUNGO',9,'11/11/1997','12/9/1997','11/21/1997',2,44.10,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10737,'VINET',2,'11/11/1997','12/9/1997','11/18/1997',2,7.79,
    'Vins et alcools Chevalier',"59 rue de l'Abbaye",'Reims',
    null,'51100','France'],

  [10738,'SPECD',2,'11/12/1997','12/10/1997','11/18/1997',1,2.91,
    'Spécialités du monde','25, rue Lauriston','Paris',
    null,'75016','France'],

  [10739,'VINET',3,'11/12/1997','12/10/1997','11/17/1997',3,11.08,
    'Vins et alcools Chevalier',"59 rue de l'Abbaye",'Reims',
    null,'51100','France'],

  [10740,'WHITC',4,'11/13/1997','12/11/1997','11/25/1997',2,81.88,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10741,'AROUT',4,'11/14/1997','11/28/1997','11/18/1997',3,10.96,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10742,'BOTTM',3,'11/14/1997','12/12/1997','11/18/1997',3,243.73,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10743,'AROUT',1,'11/17/1997','12/15/1997','11/21/1997',2,23.72,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10744,'VAFFE',6,'11/17/1997','12/15/1997','11/24/1997',1,69.19,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10745,'QUICK',9,'11/18/1997','12/16/1997','11/27/1997',1,3.52,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10746,'CHOPS',1,'11/19/1997','12/17/1997','11/21/1997',3,31.43,
    'Chop-suey Chinese','Hauptstr. 31','Bern',
    null,'3012','Switzerland'],

  [10747,'PICCO',6,'11/19/1997','12/17/1997','11/26/1997',1,117.33,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10748,'SAVEA',3,'11/20/1997','12/18/1997','11/28/1997',1,232.55,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10749,'ISLAT',4,'11/20/1997','12/18/1997','12/19/1997',2,61.53,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10750,'WARTH',9,'11/21/1997','12/19/1997','11/24/1997',1,79.30,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10751,'RICSU',3,'11/24/1997','12/22/1997','12/3/1997',3,130.79,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [10752,'NORTS',2,'11/24/1997','12/22/1997','11/28/1997',3,1.39,
    'North/South','South House 300 Queensbridge','London',
    null,'SW7 1RZ','UK'],

  [10753,'FRANS',3,'11/25/1997','12/23/1997','11/27/1997',1,7.70,
    'Franchi S.p.A.','Via Monte Bianco 34','Torino',
    null,'10100','Italy'],

  [10754,'MAGAA',6,'11/25/1997','12/23/1997','11/27/1997',3,2.38,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10755,'BONAP',4,'11/26/1997','12/24/1997','11/28/1997',2,16.71,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10756,'SPLIR',8,'11/27/1997','12/25/1997','12/2/1997',2,73.21,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10757,'SAVEA',6,'11/27/1997','12/25/1997','12/15/1997',1,8.19,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10758,'RICSU',3,'11/28/1997','12/26/1997','12/4/1997',3,138.17,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [10759,'ANATR',3,'11/28/1997','12/26/1997','12/12/1997',3,11.99,
    'Ana Trujillo Emparedados y helados','Avda. de la Constitución 2222','México D.F.',
    null,'05021','Mexico'],

  [10760,'MAISD',4,'12/1/1997','12/29/1997','12/10/1997',1,155.64,
    'Maison Dewey','Rue Joseph-Bens 532','Bruxelles',
    null,'B-1180','Belgium'],

  [10761,'RATTC',5,'12/2/1997','12/30/1997','12/8/1997',2,18.66,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10762,'FOLKO',3,'12/2/1997','12/30/1997','12/9/1997',1,328.74,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10763,'FOLIG',3,'12/3/1997','12/31/1997','12/8/1997',3,37.35,
    'Folies gourmandes','184, chaussée de Tournai','Lille',
    null,'59000','France'],

  [10764,'ERNSH',6,'12/3/1997','12/31/1997','12/8/1997',3,145.45,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10765,'QUICK',3,'12/4/1997','1/1/1998','12/9/1997',3,42.74,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10766,'OTTIK',4,'12/5/1997','1/2/1998','12/9/1997',1,157.55,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [10767,'SUPRD',4,'12/5/1997','1/2/1998','12/15/1997',3,1.59,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10768,'AROUT',3,'12/8/1997','1/5/1998','12/15/1997',2,146.32,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10769,'VAFFE',3,'12/8/1997','1/5/1998','12/12/1997',1,65.06,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10770,'HANAR',8,'12/9/1997','1/6/1998','12/17/1997',3,5.32,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10771,'ERNSH',9,'12/10/1997','1/7/1998','1/2/1998',2,11.19,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10772,'LEHMS',3,'12/10/1997','1/7/1998','12/19/1997',2,91.28,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10773,'ERNSH',1,'12/11/1997','1/8/1998','12/16/1997',3,96.43,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10774,'FOLKO',4,'12/11/1997','12/25/1997','12/12/1997',1,48.20,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10775,'THECR',7,'12/12/1997','1/9/1998','12/26/1997',1,20.25,
    'The Cracker Box','55 Grizzly Peak Rd.','Butte',
    'MT','59801','USA'],

  [10776,'ERNSH',1,'12/15/1997','1/12/1998','12/18/1997',3,351.53,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10777,'GOURL',7,'12/15/1997','12/29/1997','1/21/1998',2,3.01,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [10778,'BERGS',3,'12/16/1997','1/13/1998','12/24/1997',1,6.79,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10779,'MORGK',3,'12/16/1997','1/13/1998','1/14/1998',2,58.13,
    'Morgenstern Gesundkost','Heerstr. 22','Leipzig',
    null,'04179','Germany'],

  [10780,'LILAS',2,'12/16/1997','12/30/1997','12/25/1997',1,42.13,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10781,'WARTH',2,'12/17/1997','1/14/1998','12/19/1997',3,73.16,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [10782,'CACTU',9,'12/17/1997','1/14/1998','12/22/1997',3,1.10,
    'Cactus Comidas para llevar','Cerrito 333','Buenos Aires',
    null,'1010','Argentina'],

  [10783,'HANAR',4,'12/18/1997','1/15/1998','12/19/1997',2,124.98,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10784,'MAGAA',4,'12/18/1997','1/15/1998','12/22/1997',3,70.09,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10785,'GROSR',1,'12/18/1997','1/15/1998','12/24/1997',3,1.51,
    'GROSELLA-Restaurante','5ª Ave. Los Palos Grandes','Caracas',
    'DF','1081','Venezuela'],

  [10786,'QUEE',8,'12/19/1997','1/16/1998','12/23/1997',1,110.87,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10787,'LAMAI',2,'12/19/1997','1/2/1998','12/26/1997',1,249.93,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10788,'QUICK',1,'12/22/1997','1/19/1998','1/19/1998',2,42.70,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10789,'FOLIG',1,'12/22/1997','1/19/1998','12/31/1997',2,100.60,
    'Folies gourmandes','184, chaussée de Tournai','Lille',
    null,'59000','France'],

  [10790,'GOURL',6,'12/22/1997','1/19/1998','12/26/1997',1,28.23,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [10791,'FRANK',6,'12/23/1997','1/20/1998','1/1/1998',2,16.85,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10792,'WOLZA',1,'12/23/1997','1/20/1998','12/31/1997',3,23.79,
    'Wolski Zajazd','ul. Filtrowa 68','Warszawa',
    null,'01-012','Poland'],

  [10793,'AROUT',3,'12/24/1997','1/21/1998','1/8/1998',3,4.52,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10794,'QUEDE',6,'12/24/1997','1/21/1998','1/2/1998',1,21.49,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10795,'ERNSH',8,'12/24/1997','1/21/1998','1/20/1998',2,126.66,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10796,'HILAA',3,'12/25/1997','1/22/1998','1/14/1998',1,26.52,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10797,'DRACD',7,'12/25/1997','1/22/1998','1/5/1998',2,33.35,
    'Drachenblut Delikatessen','Walserweg 21','Aachen',
    null,'52066','Germany'],

  [10798,'ISLAT',2,'12/26/1997','1/23/1998','1/5/1998',1,2.33,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10799,'KOENE',9,'12/26/1997','2/6/1998','1/5/1998',3,30.76,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10800,'SEVES',1,'12/26/1997','1/23/1998','1/5/1998',3,137.44,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10801,'BOLID',4,'12/29/1997','1/26/1998','12/31/1997',2,97.09,
    'Bólido Comidas preparadas','C/ Araquil, 67','Madrid',
    null,'28023','Spain'],

  [10802,'SIMOB',4,'12/29/1997','1/26/1998','1/2/1998',2,257.26,
    'Simons bistro','Vinbæltet 34','Kobenhavn',
    null,'1734','Denmark'],

  [10803,'WELLI',4,'12/30/1997','1/27/1998','1/6/1998',1,55.23,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10804,'SEVES',6,'12/30/1997','1/27/1998','1/7/1998',2,27.33,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10805,'THEBI',2,'12/30/1997','1/27/1998','1/9/1998',3,237.34,
    'The Big Cheese','89 Jefferson Way Suite 2','Portland',
    'OR','97201','USA'],

  [10806,'VICTE',3,'12/31/1997','1/28/1998','1/5/1998',2,22.11,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10807,'FRANS',4,'12/31/1997','1/28/1998','1/30/1998',1,1.36,
    'Franchi S.p.A.','Via Monte Bianco 34','Torino',
    null,'10100','Italy'],

  [10808,'OLDWO',2,'1/1/1998','1/29/1998','1/9/1998',3,45.53,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10809,'WELLI',7,'1/1/1998','1/29/1998','1/7/1998',1,4.87,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10810,'LAUGB',2,'1/1/1998','1/29/1998','1/7/1998',3,4.33,
    'Laughing Bacchus Wine Cellars','2319 Elm St.','Vancouver',
    'BC','V3F 2K1','Canada'],

  [10811,'LINOD',8,'1/2/1998','1/30/1998','1/8/1998',1,31.22,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10812,'REGGC',5,'1/2/1998','1/30/1998','1/12/1998',1,59.78,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10813,'RICAR',1,'1/5/1998','2/2/1998','1/9/1998',1,47.38,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10814,'VICTE',3,'1/5/1998','2/2/1998','1/14/1998',3,130.94,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10815,'SAVEA',2,'1/5/1998','2/2/1998','1/14/1998',3,14.62,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10816,'GREAL',4,'1/6/1998','2/3/1998','2/4/1998',2,719.78,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [10817,'KOENE',3,'1/6/1998','1/20/1998','1/13/1998',2,306.07,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10818,'MAGAA',7,'1/7/1998','2/4/1998','1/12/1998',3,65.48,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10819,'CACTU',2,'1/7/1998','2/4/1998','1/16/1998',3,19.76,
    'Cactus Comidas para llevar','Cerrito 333','Buenos Aires',
    null,'1010','Argentina'],

  [10820,'RATTC',3,'1/7/1998','2/4/1998','1/13/1998',2,37.52,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10821,'SPLIR',1,'1/8/1998','2/5/1998','1/15/1998',1,36.68,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10822,'TRAIH',6,'1/8/1998','2/5/1998','1/16/1998',3,7.00,
    "Trail's Head Gourmet Provisioners",'722 DaVinci Blvd.','Kirkland',
    'WA','98034','USA'],

  [10823,'LILAS',5,'1/9/1998','2/6/1998','1/13/1998',2,163.97,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10824,'FOLKO',8,'1/9/1998','2/6/1998','1/30/1998',1,1.23,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10825,'DRACD',1,'1/9/1998','2/6/1998','1/14/1998',1,79.25,
    'Drachenblut Delikatessen','Walserweg 21','Aachen',
    null,'52066','Germany'],

  [10826,'BLONP',6,'1/12/1998','2/9/1998','2/6/1998',1,7.09,
    'Blondel père et fils','24, place Kléber','Strasbourg',
    null,'67000','France'],

  [10827,'BONAP',1,'1/12/1998','1/26/1998','2/6/1998',2,63.54,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10828,'RANCH',9,'1/13/1998','1/27/1998','2/4/1998',1,90.85,
    'Rancho grande','Av. del Libertador 900','Buenos Aires',
    null,'1010','Argentina'],

  [10829,'ISLAT',9,'1/13/1998','2/10/1998','1/23/1998',1,154.72,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10830,'TRADH',4,'1/13/1998','2/24/1998','1/21/1998',2,81.83,
    'Tradiçao Hipermercados','Av. Inês de Castro, 414','Sao Paulo',
    'SP','05634-030','Brazil'],

  [10831,'SANTG',3,'1/14/1998','2/11/1998','1/23/1998',2,72.19,
    'Santé Gourmet','Erling Skakkes gate 78','Stavern',
    null,'4110','Norway'],

  [10832,'LAMAI',2,'1/14/1998','2/11/1998','1/19/1998',2,43.26,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10833,'OTTIK',6,'1/15/1998','2/12/1998','1/23/1998',2,71.49,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [10834,'TRADH',1,'1/15/1998','2/12/1998','1/19/1998',3,29.78,
    'Tradiçao Hipermercados','Av. Inês de Castro, 414','Sao Paulo',
    'SP','05634-030','Brazil'],

  [10835,'ALFKI',1,'1/15/1998','2/12/1998','1/21/1998',3,69.53,
    "Alfred's Futterkiste",'Obere Str. 57','Berlin',
    null,'12209','Germany'],

  [10836,'ERNSH',7,'1/16/1998','2/13/1998','1/21/1998',1,411.88,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10837,'BERGS',9,'1/16/1998','2/13/1998','1/23/1998',3,13.32,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10838,'LINOD',3,'1/19/1998','2/16/1998','1/23/1998',3,59.28,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10839,'TRADH',3,'1/19/1998','2/16/1998','1/22/1998',3,35.43,
    'Tradiçao Hipermercados','Av. Inês de Castro, 414','Sao Paulo',
    'SP','05634-030','Brazil'],

  [10840,'LINOD',4,'1/19/1998','3/2/1998','2/16/1998',2,2.71,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10841,'SUPRD',5,'1/20/1998','2/17/1998','1/29/1998',2,424.30,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10842,'TORTU',1,'1/20/1998','2/17/1998','1/29/1998',3,54.42,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10843,'VICTE',4,'1/21/1998','2/18/1998','1/26/1998',2,9.26,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10844,'PICCO',8,'1/21/1998','2/18/1998','1/26/1998',2,25.22,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [10845,'QUICK',8,'1/21/1998','2/4/1998','1/30/1998',1,212.98,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10846,'SUPRD',2,'1/22/1998','3/5/1998','1/23/1998',3,56.46,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10847,'SAVEA',4,'1/22/1998','2/5/1998','2/10/1998',3,487.57,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10848,'CONSH',7,'1/23/1998','2/20/1998','1/29/1998',2,38.24,
    'Consolidated Holdings','Berkeley Gardens 12  Brewery','London',
    null,'WX1 6LT','UK'],

  [10849,'KOENE',9,'1/23/1998','2/20/1998','1/30/1998',2,0.56,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10850,'VICTE',1,'1/23/1998','3/6/1998','1/30/1998',1,49.19,
    'Victuailles en stock','2, rue du Commerce','Lyon',
    null,'69004','France'],

  [10851,'RICAR',5,'1/26/1998','2/23/1998','2/2/1998',1,160.55,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10852,'RATTC',8,'1/26/1998','2/9/1998','1/30/1998',1,174.05,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10853,'BLAUS',9,'1/27/1998','2/24/1998','2/3/1998',2,53.83,
    'Blauer See Delikatessen','Forsterstr. 57','Mannheim',
    null,'68306','Germany'],

  [10854,'ERNSH',3,'1/27/1998','2/24/1998','2/5/1998',2,100.22,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10855,'OLDWO',3,'1/27/1998','2/24/1998','2/4/1998',1,170.97,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10856,'ANTO',3,'1/28/1998','2/25/1998','2/10/1998',2,58.43,
    'Antonio Moreno Taquería','Mataderos  2312','México D.F.',
    null,'05023','Mexico'],

  [10857,'BERGS',8,'1/28/1998','2/25/1998','2/6/1998',2,188.85,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10858,'LACOR',2,'1/29/1998','2/26/1998','2/3/1998',1,52.51,
    "La corne d'abondance","67, avenue de l'Europe",'Versailles',
    null,'78000','France'],

  [10859,'FRANK',1,'1/29/1998','2/26/1998','2/2/1998',2,76.10,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10860,'FRANR',3,'1/29/1998','2/26/1998','2/4/1998',3,19.26,
    'France restauration','54, rue Royale','Nantes',
    null,'44000','France'],

  [10861,'WHITC',4,'1/30/1998','2/27/1998','2/17/1998',2,14.93,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10862,'LEHMS',8,'1/30/1998','3/13/1998','2/2/1998',2,53.23,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10863,'HILAA',4,'2/2/1998','3/2/1998','2/17/1998',2,30.26,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10864,'AROUT',4,'2/2/1998','3/2/1998','2/9/1998',2,3.04,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10865,'QUICK',2,'2/2/1998','2/16/1998','2/12/1998',1,348.14,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10866,'BERGS',5,'2/3/1998','3/3/1998','2/12/1998',1,109.11,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10867,'LONEP',6,'2/3/1998','3/17/1998','2/11/1998',1,1.93,
    'Lonesome Pine Restaurant','89 Chiaroscuro Rd.','Portland',
    'OR','97219','USA'],

  [10868,'QUEE',7,'2/4/1998','3/4/1998','2/23/1998',2,191.27,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10869,'SEVES',5,'2/4/1998','3/4/1998','2/9/1998',1,143.28,
    'Seven Seas Imports','90 Wadhurst Rd.','London',
    null,'OX15 4NB','UK'],

  [10870,'WOLZA',5,'2/4/1998','3/4/1998','2/13/1998',3,12.04,
    'Wolski Zajazd','ul. Filtrowa 68','Warszawa',
    null,'01-012','Poland'],

  [10871,'BONAP',9,'2/5/1998','3/5/1998','2/10/1998',2,112.27,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10872,'GODOS',5,'2/5/1998','3/5/1998','2/9/1998',2,175.32,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [10873,'WILMK',4,'2/6/1998','3/6/1998','2/9/1998',1,0.82,
    'Wilman Kala','Keskuskatu 45','Helsinki',
    null,'21240','Finland'],

  [10874,'GODOS',5,'2/6/1998','3/6/1998','2/11/1998',2,19.58,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [10875,'BERGS',4,'2/6/1998','3/6/1998','3/3/1998',2,32.37,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10876,'BONAP',7,'2/9/1998','3/9/1998','2/12/1998',3,60.42,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10877,'RICAR',1,'2/9/1998','3/9/1998','2/19/1998',1,38.06,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [10878,'QUICK',4,'2/10/1998','3/10/1998','2/12/1998',1,46.69,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10879,'WILMK',3,'2/10/1998','3/10/1998','2/12/1998',3,8.50,
    'Wilman Kala','Keskuskatu 45','Helsinki',
    null,'21240','Finland'],

  [10880,'FOLKO',7,'2/10/1998','3/24/1998','2/18/1998',1,88.01,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10881,'CACTU',4,'2/11/1998','3/11/1998','2/18/1998',1,2.84,
    'Cactus Comidas para llevar','Cerrito 333','Buenos Aires',
    null,'1010','Argentina'],

  [10882,'SAVEA',4,'2/11/1998','3/11/1998','2/20/1998',3,23.10,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10883,'LONEP',8,'2/12/1998','3/12/1998','2/20/1998',3,0.53,
    'Lonesome Pine Restaurant','89 Chiaroscuro Rd.','Portland',
    'OR','97219','USA'],

  [10884,'LETSS',4,'2/12/1998','3/12/1998','2/13/1998',2,90.97,
    "Let's Stop N Shop",'87 Polk St. Suite 5','San Francisco',
    'CA','94117','USA'],

  [10885,'SUPRD',6,'2/12/1998','3/12/1998','2/18/1998',3,5.64,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10886,'HANAR',1,'2/13/1998','3/13/1998','3/2/1998',1,4.99,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10887,'GALED',8,'2/13/1998','3/13/1998','2/16/1998',3,1.25,
    'Galería del gastronómo','Rambla de Cataluña, 23','Barcelona',
    null,'8022','Spain'],

  [10888,'GODOS',1,'2/16/1998','3/16/1998','2/23/1998',2,51.87,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [10889,'RATTC',9,'2/16/1998','3/16/1998','2/23/1998',3,280.61,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10890,'DUMO',7,'2/16/1998','3/16/1998','2/18/1998',1,32.76,
    'Du monde entier','67, rue des Cinquante Otages','Nantes',
    null,'44000','France'],

  [10891,'LEHMS',7,'2/17/1998','3/17/1998','2/19/1998',2,20.37,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10892,'MAISD',4,'2/17/1998','3/17/1998','2/19/1998',2,120.27,
    'Maison Dewey','Rue Joseph-Bens 532','Bruxelles',
    null,'B-1180','Belgium'],

  [10893,'KOENE',9,'2/18/1998','3/18/1998','2/20/1998',2,77.78,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [10894,'SAVEA',1,'2/18/1998','3/18/1998','2/20/1998',1,116.13,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10895,'ERNSH',3,'2/18/1998','3/18/1998','2/23/1998',1,162.75,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10896,'MAISD',7,'2/19/1998','3/19/1998','2/27/1998',3,32.45,
    'Maison Dewey','Rue Joseph-Bens 532','Bruxelles',
    null,'B-1180','Belgium'],

  [10897,'HUNGO',3,'2/19/1998','3/19/1998','2/25/1998',2,603.54,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10898,'OCEA',4,'2/20/1998','3/20/1998','3/6/1998',2,1.27,
    'Océano Atlántico Ltda.','Ing. Gustavo Moncada 8585 Piso 20-A','Buenos Aires',
    null,'1010','Argentina'],

  [10899,'LILAS',5,'2/20/1998','3/20/1998','2/26/1998',3,1.21,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10900,'WELLI',1,'2/20/1998','3/20/1998','3/4/1998',2,1.66,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10901,'HILAA',4,'2/23/1998','3/23/1998','2/26/1998',1,62.09,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10902,'FOLKO',1,'2/23/1998','3/23/1998','3/3/1998',1,44.15,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10903,'HANAR',3,'2/24/1998','3/24/1998','3/4/1998',3,36.71,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10904,'WHITC',3,'2/24/1998','3/24/1998','2/27/1998',3,162.95,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [10905,'WELLI',9,'2/24/1998','3/24/1998','3/6/1998',2,13.72,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10906,'WOLZA',4,'2/25/1998','3/11/1998','3/3/1998',3,26.29,
    'Wolski Zajazd','ul. Filtrowa 68','Warszawa',
    null,'01-012','Poland'],

  [10907,'SPECD',6,'2/25/1998','3/25/1998','2/27/1998',3,9.19,
    'Spécialités du monde','25, rue Lauriston','Paris',
    null,'75016','France'],

  [10908,'REGGC',4,'2/26/1998','3/26/1998','3/6/1998',2,32.96,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10909,'SANTG',1,'2/26/1998','3/26/1998','3/10/1998',2,53.05,
    'Santé Gourmet','Erling Skakkes gate 78','Stavern',
    null,'4110','Norway'],

  [10910,'WILMK',1,'2/26/1998','3/26/1998','3/4/1998',3,38.11,
    'Wilman Kala','Keskuskatu 45','Helsinki',
    null,'21240','Finland'],

  [10911,'GODOS',3,'2/26/1998','3/26/1998','3/5/1998',1,38.19,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [10912,'HUNGO',2,'2/26/1998','3/26/1998','3/18/1998',2,580.91,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10913,'QUEE',4,'2/26/1998','3/26/1998','3/4/1998',1,33.05,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10914,'QUEE',6,'2/27/1998','3/27/1998','3/2/1998',1,21.19,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10915,'TORTU',2,'2/27/1998','3/27/1998','3/2/1998',2,3.51,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [10916,'RANCH',1,'2/27/1998','3/27/1998','3/9/1998',2,63.77,
    'Rancho grande','Av. del Libertador 900','Buenos Aires',
    null,'1010','Argentina'],

  [10917,'ROMEY',4,'3/2/1998','3/30/1998','3/11/1998',2,8.29,
    'Romero y tomillo','Gran Vía, 1','Madrid',
    null,'28001','Spain'],

  [10918,'BOTTM',3,'3/2/1998','3/30/1998','3/11/1998',3,48.83,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10919,'LINOD',2,'3/2/1998','3/30/1998','3/4/1998',2,19.80,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10920,'AROUT',4,'3/3/1998','3/31/1998','3/9/1998',2,29.61,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10921,'VAFFE',1,'3/3/1998','4/14/1998','3/9/1998',1,176.48,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10922,'HANAR',5,'3/3/1998','3/31/1998','3/5/1998',3,62.74,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10923,'LAMAI',7,'3/3/1998','4/14/1998','3/13/1998',3,68.26,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [10924,'BERGS',3,'3/4/1998','4/1/1998','4/8/1998',2,151.52,
    'Berglunds snabbköp','Berguvsvägen  8','Luleå',
    null,'S-958 22','Sweden'],

  [10925,'HANAR',3,'3/4/1998','4/1/1998','3/13/1998',1,2.27,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10926,'ANATR',4,'3/4/1998','4/1/1998','3/11/1998',3,39.92,
    'Ana Trujillo Emparedados y helados','Avda. de la Constitución 2222','México D.F.',
    null,'05021','Mexico'],

  [10927,'LACOR',4,'3/5/1998','4/2/1998','4/8/1998',1,19.79,
    "La corne d'abondance","67, avenue de l'Europe",'Versailles',
    null,'78000','France'],

  [10928,'GALED',1,'3/5/1998','4/2/1998','3/18/1998',1,1.36,
    'Galería del gastronómo','Rambla de Cataluña, 23','Barcelona',
    null,'8022','Spain'],

  [10929,'FRANK',6,'3/5/1998','4/2/1998','3/12/1998',1,33.93,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [10930,'SUPRD',4,'3/6/1998','4/17/1998','3/18/1998',3,15.55,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [10931,'RICSU',4,'3/6/1998','3/20/1998','3/19/1998',2,13.60,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [10932,'BONAP',8,'3/6/1998','4/3/1998','3/24/1998',1,134.64,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10933,'ISLAT',6,'3/6/1998','4/3/1998','3/16/1998',3,54.15,
    'Island Trading','Garden House Crowther Way','Cowes',
    'Isle of Wight','PO31 7PJ','UK'],

  [10934,'LEHMS',3,'3/9/1998','4/6/1998','3/12/1998',3,32.01,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [10935,'WELLI',4,'3/9/1998','4/6/1998','3/18/1998',3,47.59,
    'Wellington Importadora','Rua do Mercado, 12','Resende',
    'SP','08737-363','Brazil'],

  [10936,'GREAL',3,'3/9/1998','4/6/1998','3/18/1998',2,33.68,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [10937,'CACTU',7,'3/10/1998','3/24/1998','3/13/1998',3,31.51,
    'Cactus Comidas para llevar','Cerrito 333','Buenos Aires',
    null,'1010','Argentina'],

  [10938,'QUICK',3,'3/10/1998','4/7/1998','3/16/1998',2,31.89,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10939,'MAGAA',2,'3/10/1998','4/7/1998','3/13/1998',2,76.33,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10940,'BONAP',8,'3/11/1998','4/8/1998','3/23/1998',3,19.77,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [10941,'SAVEA',7,'3/11/1998','4/8/1998','3/20/1998',2,400.81,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10942,'REGGC',9,'3/11/1998','4/8/1998','3/18/1998',3,17.95,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [10943,'BSBEV',4,'3/11/1998','4/8/1998','3/19/1998',2,2.17,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10944,'BOTTM',6,'3/12/1998','3/26/1998','3/13/1998',3,52.92,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10945,'MORGK',4,'3/12/1998','4/9/1998','3/18/1998',1,10.22,
    'Morgenstern Gesundkost','Heerstr. 22','Leipzig',
    null,'04179','Germany'],

  [10946,'VAFFE',1,'3/12/1998','4/9/1998','3/19/1998',2,27.20,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10947,'BSBEV',3,'3/13/1998','4/10/1998','3/16/1998',2,3.26,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [10948,'GODOS',3,'3/13/1998','4/10/1998','3/19/1998',3,23.39,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [10949,'BOTTM',2,'3/13/1998','4/10/1998','3/17/1998',3,74.44,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10950,'MAGAA',1,'3/16/1998','4/13/1998','3/23/1998',2,2.50,
    'Magazzini Alimentari Riuniti','Via Ludovico il Moro 22','Bergamo',
    null,'24100','Italy'],

  [10951,'RICSU',9,'3/16/1998','4/27/1998','4/7/1998',2,30.85,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [10952,'ALFKI',1,'3/16/1998','4/27/1998','3/24/1998',1,40.42,
    "Alfred's Futterkiste",'Obere Str. 57','Berlin',
    null,'12209','Germany'],

  [10953,'AROUT',9,'3/16/1998','3/30/1998','3/25/1998',2,23.72,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [10954,'LINOD',5,'3/17/1998','4/28/1998','3/20/1998',1,27.91,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [10955,'FOLKO',8,'3/17/1998','4/14/1998','3/20/1998',2,3.26,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10956,'BLAUS',6,'3/17/1998','4/28/1998','3/20/1998',2,44.65,
    'Blauer See Delikatessen','Forsterstr. 57','Mannheim',
    null,'68306','Germany'],

  [10957,'HILAA',8,'3/18/1998','4/15/1998','3/27/1998',3,105.36,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10958,'OCEA',7,'3/18/1998','4/15/1998','3/27/1998',2,49.56,
    'Océano Atlántico Ltda.','Ing. Gustavo Moncada 8585 Piso 20-A','Buenos Aires',
    null,'1010','Argentina'],

  [10959,'GOURL',6,'3/18/1998','4/29/1998','3/23/1998',2,4.98,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [10960,'HILAA',3,'3/19/1998','4/2/1998','4/8/1998',1,2.08,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10961,'QUEE',8,'3/19/1998','4/16/1998','3/30/1998',1,104.47,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [10962,'QUICK',8,'3/19/1998','4/16/1998','3/23/1998',2,275.79,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10963,'FURIB',9,'3/19/1998','4/16/1998','3/26/1998',3,2.70,
    'Furia Bacalhau e Frutos do Mar','Jardim das rosas n. 32','Lisboa',
    null,'1675','Portugal'],

  [10964,'SPECD',3,'3/20/1998','4/17/1998','3/24/1998',2,87.38,
    'Spécialités du monde','25, rue Lauriston','Paris',
    null,'75016','France'],

  [10965,'OLDWO',6,'3/20/1998','4/17/1998','3/30/1998',3,144.38,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [10966,'CHOPS',4,'3/20/1998','4/17/1998','4/8/1998',1,27.19,
    'Chop-suey Chinese','Hauptstr. 31','Bern',
    null,'3012','Switzerland'],

  [10967,'TOMSP',2,'3/23/1998','4/20/1998','4/2/1998',2,62.22,
    'Toms Spezialitäten','Luisenstr. 48','Münster',
    null,'44087','Germany'],

  [10968,'ERNSH',1,'3/23/1998','4/20/1998','4/1/1998',3,74.60,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10969,'COMMI',1,'3/23/1998','4/20/1998','3/30/1998',2,0.21,
    'Comércio Mineiro','Av. dos Lusíadas, 23','Sao Paulo',
    'SP','05432-043','Brazil'],

  [10970,'BOLID',9,'3/24/1998','4/7/1998','4/24/1998',1,16.16,
    'Bólido Comidas preparadas','C/ Araquil, 67','Madrid',
    null,'28023','Spain'],

  [10971,'FRANR',2,'3/24/1998','4/21/1998','4/2/1998',2,121.82,
    'France restauration','54, rue Royale','Nantes',
    null,'44000','France'],

  [10972,'LACOR',4,'3/24/1998','4/21/1998','3/26/1998',2,0.02,
    "La corne d'abondance","67, avenue de l'Europe",'Versailles',
    null,'78000','France'],

  [10973,'LACOR',6,'3/24/1998','4/21/1998','3/27/1998',2,15.17,
    "La corne d'abondance","67, avenue de l'Europe",'Versailles',
    null,'78000','France'],

  [10974,'SPLIR',3,'3/25/1998','4/8/1998','4/3/1998',3,12.96,
    'Split Rail Beer & Ale','P.O. Box 555','Lander',
    'WY','82520','USA'],

  [10975,'BOTTM',1,'3/25/1998','4/22/1998','3/27/1998',3,32.27,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10976,'HILAA',1,'3/25/1998','5/6/1998','4/3/1998',1,37.97,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [10977,'FOLKO',8,'3/26/1998','4/23/1998','4/10/1998',3,208.50,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10978,'MAISD',9,'3/26/1998','4/23/1998','4/23/1998',2,32.82,
    'Maison Dewey','Rue Joseph-Bens 532','Bruxelles',
    null,'B-1180','Belgium'],

  [10979,'ERNSH',8,'3/26/1998','4/23/1998','3/31/1998',2,353.07,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10980,'FOLKO',4,'3/27/1998','5/8/1998','4/17/1998',1,1.26,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10981,'HANAR',1,'3/27/1998','4/24/1998','4/2/1998',2,193.37,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [10982,'BOTTM',2,'3/27/1998','4/24/1998','4/8/1998',1,14.01,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [10983,'SAVEA',2,'3/27/1998','4/24/1998','4/6/1998',2,657.54,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10984,'SAVEA',1,'3/30/1998','4/27/1998','4/3/1998',3,211.22,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [10985,'HUNGO',2,'3/30/1998','4/27/1998','4/2/1998',1,91.51,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [10986,'OCEA',8,'3/30/1998','4/27/1998','4/21/1998',2,217.86,
    'Océano Atlántico Ltda.','Ing. Gustavo Moncada 8585 Piso 20-A','Buenos Aires',
    null,'1010','Argentina'],

  [10987,'EASTC',8,'3/31/1998','4/28/1998','4/6/1998',1,185.48,
    'Eastern Connection','35 King George','London',
    null,'WX3 6FW','UK'],

  [10988,'RATTC',3,'3/31/1998','4/28/1998','4/10/1998',2,61.14,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [10989,'QUEDE',2,'3/31/1998','4/28/1998','4/2/1998',1,34.76,
    'Que Delícia','Rua da Panificadora, 12','Rio de Janeiro',
    'RJ','02389-673','Brazil'],

  [10990,'ERNSH',2,'4/1/1998','5/13/1998','4/7/1998',3,117.61,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [10991,'QUICK',1,'4/1/1998','4/29/1998','4/7/1998',1,38.51,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10992,'THEBI',1,'4/1/1998','4/29/1998','4/3/1998',3,4.27,
    'The Big Cheese','89 Jefferson Way Suite 2','Portland',
    'OR','97201','USA'],

  [10993,'FOLKO',7,'4/1/1998','4/29/1998','4/10/1998',3,8.81,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [10994,'VAFFE',2,'4/2/1998','4/16/1998','4/9/1998',3,65.53,
    'Vaffeljernet','Smagsloget 45','Århus',
    null,'8200','Denmark'],

  [10995,'PERIC',1,'4/2/1998','4/30/1998','4/6/1998',3,46.00,
    'Pericles Comidas clásicas','Calle Dr. Jorge Cash 321','México D.F.',
    null,'05033','Mexico'],

  [10996,'QUICK',4,'4/2/1998','4/30/1998','4/10/1998',2,1.12,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [10997,'LILAS',8,'4/3/1998','5/15/1998','4/13/1998',2,73.91,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [10998,'WOLZA',8,'4/3/1998','4/17/1998','4/17/1998',2,20.31,
    'Wolski Zajazd','ul. Filtrowa 68','Warszawa',
    null,'01-012','Poland'],

  [10999,'OTTIK',6,'4/3/1998','5/1/1998','4/10/1998',2,96.35,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [11000,'RATTC',2,'4/6/1998','5/4/1998','4/14/1998',3,55.12,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA'],

  [11001,'FOLKO',2,'4/6/1998','5/4/1998','4/14/1998',2,197.30,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [11002,'SAVEA',4,'4/6/1998','5/4/1998','4/16/1998',1,141.16,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [11003,'THECR',3,'4/6/1998','5/4/1998','4/8/1998',3,14.91,
    'The Cracker Box','55 Grizzly Peak Rd.','Butte',
    'MT','59801','USA'],

  [11004,'MAISD',3,'4/7/1998','5/5/1998','4/20/1998',1,44.84,
    'Maison Dewey','Rue Joseph-Bens 532','Bruxelles',
    null,'B-1180','Belgium'],

  [11005,'WILMK',2,'4/7/1998','5/5/1998','4/10/1998',1,0.75,
    'Wilman Kala','Keskuskatu 45','Helsinki',
    null,'21240','Finland'],

  [11006,'GREAL',3,'4/7/1998','5/5/1998','4/15/1998',2,25.19,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [11007,'PRINI',8,'4/8/1998','5/6/1998','4/13/1998',2,202.24,
    'Princesa Isabel Vinhos','Estrada da saúde n. 58','Lisboa',
    null,'1756','Portugal'],

  [11008,'ERNSH',7,'4/8/1998','5/6/1998',null,3,79.46,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [11009,'GODOS',2,'4/8/1998','5/6/1998','4/10/1998',1,59.11,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [11010,'REGGC',2,'4/9/1998','5/7/1998','4/21/1998',2,28.71,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [11011,'ALFKI',3,'4/9/1998','5/7/1998','4/13/1998',1,1.21,
    "Alfred's Futterkiste",'Obere Str. 57','Berlin',
    null,'12209','Germany'],

  [11012,'FRANK',1,'4/9/1998','4/23/1998','4/17/1998',3,242.95,
    'Frankenversand','Berliner Platz 43','München',
    null,'80805','Germany'],

  [11013,'ROMEY',2,'4/9/1998','5/7/1998','4/10/1998',1,32.99,
    'Romero y tomillo','Gran Vía, 1','Madrid',
    null,'28001','Spain'],

  [11014,'LINOD',2,'4/10/1998','5/8/1998','4/15/1998',3,23.60,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [11015,'SANTG',2,'4/10/1998','4/24/1998','4/20/1998',2,4.62,
    'Santé Gourmet','Erling Skakkes gate 78','Stavern',
    null,'4110','Norway'],

  [11016,'AROUT',9,'4/10/1998','5/8/1998','4/13/1998',2,33.80,
    'Around the Horn','Brook Farm Stratford St. Mary','Colchester',
    'Essex','CO7 6JX','UK'],

  [11017,'ERNSH',9,'4/13/1998','5/11/1998','4/20/1998',2,754.26,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [11018,'LONEP',4,'4/13/1998','5/11/1998','4/16/1998',2,11.65,
    'Lonesome Pine Restaurant','89 Chiaroscuro Rd.','Portland',
    'OR','97219','USA'],

  [11019,'RANCH',6,'4/13/1998','5/11/1998',null,3,3.17,
    'Rancho grande','Av. del Libertador 900','Buenos Aires',
    null,'1010','Argentina'],

  [11020,'OTTIK',2,'4/14/1998','5/12/1998','4/16/1998',2,43.30,
    'Ottilies Käseladen','Mehrheimerstr. 369','Köln',
    null,'50739','Germany'],

  [11021,'QUICK',3,'4/14/1998','5/12/1998','4/21/1998',1,297.18,
    'QUICK-Stop','Taucherstraße 10','Cunewalde',
    null,'01307','Germany'],

  [11022,'HANAR',9,'4/14/1998','5/12/1998','5/4/1998',2,6.27,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [11023,'BSBEV',1,'4/14/1998','4/28/1998','4/24/1998',2,123.83,
    "B's Beverages",'Fauntleroy Circus','London',
    null,'EC2 5NT','UK'],

  [11024,'EASTC',4,'4/15/1998','5/13/1998','4/20/1998',1,74.36,
    'Eastern Connection','35 King George','London',
    null,'WX3 6FW','UK'],

  [11025,'WARTH',6,'4/15/1998','5/13/1998','4/24/1998',3,29.17,
    'Wartian Herkku','Torikatu 38','Oulu',
    null,'90110','Finland'],

  [11026,'FRANS',4,'4/15/1998','5/13/1998','4/28/1998',1,47.09,
    'Franchi S.p.A.','Via Monte Bianco 34','Torino',
    null,'10100','Italy'],

  [11027,'BOTTM',1,'4/16/1998','5/14/1998','4/20/1998',1,52.52,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [11028,'KOENE',2,'4/16/1998','5/14/1998','4/22/1998',1,29.59,
    'Königlich Essen','Maubelstr. 90','Brandenburg',
    null,'14776','Germany'],

  [11029,'CHOPS',4,'4/16/1998','5/14/1998','4/27/1998',1,47.84,
    'Chop-suey Chinese','Hauptstr. 31','Bern',
    null,'3012','Switzerland'],

  [11030,'SAVEA',7,'4/17/1998','5/15/1998','4/27/1998',2,830.75,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [11031,'SAVEA',6,'4/17/1998','5/15/1998','4/24/1998',2,227.22,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [11032,'WHITC',2,'4/17/1998','5/15/1998','4/23/1998',3,606.19,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [11033,'RICSU',7,'4/17/1998','5/15/1998','4/23/1998',3,84.74,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [11034,'OLDWO',8,'4/20/1998','6/1/1998','4/27/1998',1,40.32,
    'Old World Delicatessen','2743 Bering St.','Anchorage',
    'AK','99508','USA'],

  [11035,'SUPRD',2,'4/20/1998','5/18/1998','4/24/1998',2,0.17,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [11036,'DRACD',8,'4/20/1998','5/18/1998','4/22/1998',3,149.47,
    'Drachenblut Delikatessen','Walserweg 21','Aachen',
    null,'52066','Germany'],

  [11037,'GODOS',7,'4/21/1998','5/19/1998','4/27/1998',1,3.20,
    'Godos Cocina Típica','C/ Romero, 33','Sevilla',
    null,'41101','Spain'],

  [11038,'SUPRD',1,'4/21/1998','5/19/1998','4/30/1998',2,29.59,
    'Suprêmes délices','Boulevard Tirou, 255','Charleroi',
    null,'B-6000','Belgium'],

  [11039,'LINOD',1,'4/21/1998','5/19/1998',null,2,65.00,
    'LINO-Delicateses','Ave. 5 de Mayo Porlamar','I. de Margarita',
    'Nueva Esparta','4980','Venezuela'],

  [11040,'GREAL',4,'4/22/1998','5/20/1998',null,3,18.84,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [11041,'CHOPS',3,'4/22/1998','5/20/1998','4/28/1998',2,48.22,
    'Chop-suey Chinese','Hauptstr. 31','Bern',
    null,'3012','Switzerland'],

  [11042,'COMMI',2,'4/22/1998','5/6/1998','5/1/1998',1,29.99,
    'Comércio Mineiro','Av. dos Lusíadas, 23','Sao Paulo',
    'SP','05432-043','Brazil'],

  [11043,'SPECD',5,'4/22/1998','5/20/1998','4/29/1998',2,8.80,
    'Spécialités du monde','25, rue Lauriston','Paris',
    null,'75016','France'],

  [11044,'WOLZA',4,'4/23/1998','5/21/1998','5/1/1998',1,8.72,
    'Wolski Zajazd','ul. Filtrowa 68','Warszawa',
    null,'01-012','Poland'],

  [11045,'BOTTM',6,'4/23/1998','5/21/1998',null,2,70.58,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [11046,'WANDK',8,'4/23/1998','5/21/1998','4/24/1998',2,71.64,
    'Die Wandernde Kuh','Adenauerallee 900','Stuttgart',
    null,'70563','Germany'],

  [11047,'EASTC',7,'4/24/1998','5/22/1998','5/1/1998',3,46.62,
    'Eastern Connection','35 King George','London',
    null,'WX3 6FW','UK'],

  [11048,'BOTTM',7,'4/24/1998','5/22/1998','4/30/1998',3,24.12,
    'Bottom-Dollar Markets','23 Tsawassen Blvd.','Tsawassen',
    'BC','T2F 8M4','Canada'],

  [11049,'GOURL',3,'4/24/1998','5/22/1998','5/4/1998',1,8.34,
    'Gourmet Lanchonetes','Av. Brasil, 442','Campinas',
    'SP','04876-786','Brazil'],

  [11050,'FOLKO',8,'4/27/1998','5/25/1998','5/5/1998',2,59.41,
    'Folk och fä HB','Åkergatan 24','Bräcke',
    null,'S-844 67','Sweden'],

  [11051,'LAMAI',7,'4/27/1998','5/25/1998',null,3,2.79,
    "La maison d'Asie",'1 rue Alsace-Lorraine','Toulouse',
    null,'31000','France'],

  [11052,'HANAR',3,'4/27/1998','5/25/1998','5/1/1998',1,67.26,
    'Hanari Carnes','Rua do Paço, 67','Rio de Janeiro',
    'RJ','05454-876','Brazil'],

  [11053,'PICCO',2,'4/27/1998','5/25/1998','4/29/1998',2,53.05,
    'Piccolo und mehr','Geislweg 14','Salzburg',
    null,'5020','Austria'],

  [11054,'CACTU',8,'4/28/1998','5/26/1998',null,1,0.33,
    'Cactus Comidas para llevar','Cerrito 333','Buenos Aires',
    null,'1010','Argentina'],

  [11055,'HILAA',7,'4/28/1998','5/26/1998','5/5/1998',2,120.92,
    'HILARION-Abastos','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal',
    'Táchira','5022','Venezuela'],

  [11056,'EASTC',8,'4/28/1998','5/12/1998','5/1/1998',2,278.96,
    'Eastern Connection','35 King George','London',
    null,'WX3 6FW','UK'],

  [11057,'NORTS',3,'4/29/1998','5/27/1998','5/1/1998',3,4.13,
    'North/South','South House 300 Queensbridge','London',
    null,'SW7 1RZ','UK'],

  [11058,'BLAUS',9,'4/29/1998','5/27/1998',null,3,31.14,
    'Blauer See Delikatessen','Forsterstr. 57','Mannheim',
    null,'68306','Germany'],

  [11059,'RICAR',2,'4/29/1998','6/10/1998',null,2,85.80,
    'Ricardo Adocicados','Av. Copacabana, 267','Rio de Janeiro',
    'RJ','02389-890','Brazil'],

  [11060,'FRANS',2,'4/30/1998','5/28/1998','5/4/1998',2,10.98,
    'Franchi S.p.A.','Via Monte Bianco 34','Torino',
    null,'10100','Italy'],

  [11061,'GREAL',4,'4/30/1998','6/11/1998',null,3,14.01,
    'Great Lakes Food Market','2732 Baker Blvd.','Eugene',
    'OR','97403','USA'],

  [11062,'REGGC',4,'4/30/1998','5/28/1998',null,2,29.93,
    'Reggiani Caseifici','Strada Provinciale 124','Reggio Emilia',
    null,'42100','Italy'],

  [11063,'HUNGO',3,'4/30/1998','5/28/1998','5/6/1998',2,81.73,
    'Hungry Owl All-Night Grocers','8 Johnstown Road','Cork',
    'Co. Cork',null,'Ireland'],

  [11064,'SAVEA',1,'5/1/1998','5/29/1998','5/4/1998',1,30.09,
    'Save-a-lot Markets','187 Suffolk Ln.','Boise',
    'ID','83720','USA'],

  [11065,'LILAS',8,'5/1/1998','5/29/1998',null,1,12.91,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [11066,'WHITC',7,'5/1/1998','5/29/1998','5/4/1998',2,44.72,
    'White Clover Markets','1029 - 12th Ave. S.','Seattle',
    'WA','98124','USA'],

  [11067,'DRACD',1,'5/4/1998','5/18/1998','5/6/1998',2,7.98,
    'Drachenblut Delikatessen','Walserweg 21','Aachen',
    null,'52066','Germany'],

  [11068,'QUEE',8,'5/4/1998','6/1/1998',null,2,81.75,
    'Queen Cozinha','Alameda dos Canàrios, 891','Sao Paulo',
    'SP','05487-020','Brazil'],

  [11069,'TORTU',1,'5/4/1998','6/1/1998','5/6/1998',2,15.67,
    'Tortuga Restaurante','Avda. Azteca 123','México D.F.',
    null,'05033','Mexico'],

  [11070,'LEHMS',2,'5/5/1998','6/2/1998',null,1,136.00,
    'Lehmanns Marktstand','Magazinweg 7','Frankfurt a.M.',
    null,'60528','Germany'],

  [11071,'LILAS',1,'5/5/1998','6/2/1998',null,1,0.93,
    'LILA-Supermercado','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto',
    'Lara','3508','Venezuela'],

  [11072,'ERNSH',4,'5/5/1998','6/2/1998',null,2,258.64,
    'Ernst Handel','Kirchgasse 6','Graz',
    null,'8010','Austria'],

  [11073,'PERIC',2,'5/5/1998','6/2/1998',null,2,24.95,
    'Pericles Comidas clásicas','Calle Dr. Jorge Cash 321','México D.F.',
    null,'05033','Mexico'],

  [11074,'SIMOB',7,'5/6/1998','6/3/1998',null,2,18.44,
    'Simons bistro','Vinbæltet 34','Kobenhavn',
    null,'1734','Denmark'],

  [11075,'RICSU',8,'5/6/1998','6/3/1998',null,2,6.19,
    'Richter Supermarkt','Starenweg 5','Genève',
    null,'1204','Switzerland'],

  [11076,'BONAP',4,'5/6/1998','6/3/1998',null,2,38.28,
    'Bon app','12, rue des Bouchers','Marseille',
    null,'13008','France'],

  [11077,'RATTC',1,'5/6/1998','6/3/1998',null,2,8.53,
    'Rattlesnake Canyon Grocery','2817 Milton Dr.','Albuquerque',
    'NM','87110','USA']
];

const newArray = content.map((row) => {
  const newObj = {};
  for (let key in template) {
    newObj[key] = row.shift() || template[key];
  }
  return newObj;
});

console.log(JSON.stringify(newArray));