
(1,'Beverages','Soft drinks, coffees, teas, beers, and ales')
(2,'Condiments','Sweet and savory sauces, relishes, spreads, and seasonings')
(3,'Confections','Desserts, candies, and sweet breads')
(4,'Dairy Products','Cheeses')
(5,'Grains/Cereals','Breads, crackers, pasta, and cereal')
(6,'Meat/Poultry','Prepared meats')
(7,'Produce','Dried fruit and bean curd')
(8,'Seafood','Seaweed and fish')

      table.increments('CustomerID');
      ('CompanyName', 40).notnullable();
      ('ContactName', 30).notnullable();
      ('ContactTitle', 30).notnullable();
      ('Address', 60).notnullable();
      ('City', 15).notnullable();
      ('Region', 15).notnullable();
      ('PostalCode', 10).notnullable();
      ('Country', 15).notnullable();
      ('Phone', 24).notnullable();
      ('Fax', 24).notnullable();
CUSTOMERS
[
  {'CustomerID':'ALFKI',
    'CompanyName':'Alfreds Futterkiste',
    'ContactName':'Maria Anders',
    'ContactTitle':'Sales Representative',
    'Address':'Obere Str. 57',
    'City':'Berlin',
    'Region':null,
    'PostalCode':'12209',
    'Country':'Germany',
    'Phone':'030-0074321',
    'Fax':'030-0076545'},
  {'CustomerID':'ANATR',
    'CompanyName':'Ana Trujillo Emparedados y helados',
    'ContactName':'Ana Trujillo',
    'ContactTitle':'Owner',
    'Address':'Avda. de la Constitución 2222',
    'City':'México D.F.',
    'Region':null,
    'PostalCode':'05021',
    'Country':'Mexico',
    'Phone':'(5) 555-4729',
    'Fax':'(5) 555-3745'},
  {'CustomerID':'ANTON',
    'CompanyName':'Antonio Moreno Taquería',
    'ContactName':'Antonio Moreno',
    'ContactTitle':'Owner',
    'Address':'Mataderos  2312',
    'City':'México D.F.',
    'Region':null,
    'PostalCode':'05023',
    'Country':'Mexico',
    'Phone':'(5) 555-3932',
    'Fax':null},
  {'CustomerID':'AROUT',
    'CompanyName':'Around the Horn',
    'ContactName':'Thomas Hardy',
    'ContactTitle':'Sales Representative',
    'Address':'120 Hanover Sq.',
    'City':'London',
    'Region':null,
    'PostalCode':'WA1 1DP',
    'Country':'UK',
    'Phone':'(171) 555-7788',
    'Fax':'(171) 555-6750'},
  {'CustomerID':'BERGS',
    'CompanyName':'Berglunds snabbköp',
    'ContactName':'Christina Berglund',
    'ContactTitle':'Order Administrator',
    'Address':'Berguvsvägen  8',
    'City':'Luleå',
    'Region':null,
    'PostalCode':'S-958 22',
    'Country':'Sweden',
    'Phone':'0921-12 34 65',
    'Fax':'0921-12 34 67'},
  {'CustomerID':'BLAUS',
    'CompanyName':'Blauer See Delikatessen',
    'ContactName':'Hanna Moos',
    'ContactTitle':'Sales Representative',
    'Address':'Forsterstr. 57',
    'City':'Mannheim',
    'Region':null,
    'PostalCode':'68306',
    'Country':'Germany',
    'Phone':'0621-08460',
    'Fax':'0621-08924'},
  {'CustomerID':'BLONP',
    'CompanyName':'Blondesddsl père et fils',
    'ContactName':'Frédérique Citeaux',
    'ContactTitle':'Marketing Manager',
    'Address':'24, place Kléber',
    'City':'Strasbourg',
    'Region':null,
    'PostalCode':'67000',
    'Country':'France',
    'Phone':'88.60.15.31',
    'Fax':'88.60.15.32'},
  {'CustomerID':'BOLID',
    'CompanyName':'Bólido Comidas preparadas',
    'ContactName':'Martín Sommer',
    'ContactTitle':'Owner',
    'Address':'C/ Araquil, 67',
    'City':'Madrid',
    'Region':null,
    'PostalCode':'28023',
    'Country':'Spain',
    'Phone':'(91) 555 22 82',
    'Fax':'(91) 555 91 99'},
  {'CustomerID':'BONAP',
    'CompanyName':'Bon app',
    'ContactName':'Laurence Lebihan',
    'ContactTitle':'Owner',
    'Address':'12, rue des Bouchers',
    'City':'Marseille',
    'Region':null,
    'PostalCode':'13008',
    'Country':'France',
    'Phone':'91.24.45.40',
    'Fax':'91.24.45.41'},
  {'CustomerID':'BOTTM',
    'CompanyName':'Bottom-Dollar Markets',
    'ContactName':'Elizabeth Lincoln',
    'ContactTitle':'Accounting Manager',
    'Address':'23 Tsawassen Blvd.',
    'City':'Tsawassen',
    'Region':'BC',
    'PostalCode':'T2F 8M4',
    'Country':'Canada',
    'Phone':'(604) 555-4729',
    'Fax':'(604) 555-3745'},
  {'CustomerID':'BSBEV',
    'CompanyName':"B's Beverages",
    'ContactName':'Victoria Ashworth',
    'ContactTitle':'Sales Representative',
    'Address':'Fauntleroy Circus',
    'City':'London',
    'Region':null,
    'PostalCode':'EC2 5NT',
    'Country':'UK',
    'Phone':'(171) 555-1212',
    'Fax':null},
  {'CustomerID':'CACTU',
    'CompanyName':'Cactus Comidas para llevar',
    'ContactName':'Patricio Simpson',
    'ContactTitle':'Sales Agent',
    'Address':'Cerrito 333',
    'City':'Buenos Aires',
    'Region':null,
    'PostalCode':'1010',
    'Country':'Argentina',
    'Phone':'(1) 135-5555',
    'Fax':'(1) 135-4892'},
  {'CustomerID':'CENTC',
    'CompanyName':'Centro comercial Moctezuma',
    'ContactName':'Francisco Chang',
    'ContactTitle':'Marketing Manager',
    'Address':'Sierras de Granada 9993',
    'City':'México D.F.',
    'Region':null,
    'PostalCode':'05022',
    'Country':'Mexico',
    'Phone':'(5) 555-3392',
    'Fax':'(5) 555-7293'},
  {'CustomerID':'CHOPS',
    'CompanyName':'Chop-suey Chinese',
    'ContactName':'Yang Wang',
    'ContactTitle':'Owner',
    'Address':'Hauptstr. 29',
    'City':'Bern',
    'Region':null,
    'PostalCode':'3012',
    'Country':'Switzerland',
    'Phone':'0452-076545',
    'Fax':null},
  {'CustomerID':'COMMI',
    'CompanyName':'Comércio Mineiro',
    'ContactName':'Pedro Afonso',
    'ContactTitle':'Sales Associate',
    'Address':'Av. dos Lusíadas, 23',
    'City':'Sao Paulo',
    'Region':'SP',
    'PostalCode':'05432-043',
    'Country':'Brazil',
    'Phone':'(11) 555-7647',
    'Fax':null},
  {'CustomerID':'CONSH',
    'CompanyName':'Consolidated Holdings',
    'ContactName':'Elizabeth Brown',
    'ContactTitle':'Sales Representative',
    'Address':'Berkeley Gardens 12  Brewery',
    'City':'London',
    'Region':null,
    'PostalCode':'WX1 6LT',
    'Country':'UK',
    'Phone':'(171) 555-2282',
    'Fax':'(171) 555-9199'},
  {'CustomerID':'DRACD',
    'CompanyName':'Drachenblut Delikatessen',
    'ContactName':'Sven Ottlieb',
    'ContactTitle':'Order Administrator',
    'Address':'Walserweg 21',
    'City':'Aachen',
    'Region':null,
    'PostalCode':'52066',
    'Country':'Germany',
    'Phone':'0241-039123',
    'Fax':'0241-059428'},
  {'CustomerID':'DUMON',
    'CompanyName':'Du monde entier',
    'ContactName':'Janine Labrune',
    'ContactTitle':'Owner',
    'Address':'67, rue des Cinquante Otages',
    'City':'Nantes',
    'Region':null,
    'PostalCode':'44000',
    'Country':'France',
    'Phone':'40.67.88.88',
    'Fax':'40.67.89.89'},
  {'CustomerID':'EASTC',
    'CompanyName':'Eastern Connection',
    'ContactName':'Ann Devon',
    'ContactTitle':'Sales Agent',
    'Address':'35 King George',
    'City':'London',
    'Region':null,
    'PostalCode':'WX3 6FW',
    'Country':'UK',
    'Phone':'(171) 555-0297',
    'Fax':'(171) 555-3373'},
  {'CustomerID':'ERNSH',
    'CompanyName':'Ernst Handel',
    'ContactName':'Roland Mendel',
    'ContactTitle':'Sales Manager',
    'Address':'Kirchgasse 6',
    'City':'Graz',
    'Region':null,
    'PostalCode':'8010',
    'Country':'Austria',
    'Phone':'7675-3425',
    'Fax':'7675-3426'},
  {'CustomerID':'FAMIA',
    'CompanyName':'Familia Arquibaldo',
    'ContactName':'Aria Cruz',
    'ContactTitle':'Marketing Assistant',
    'Address':'Rua Orós, 92',
    'City':'Sao Paulo',
    'Region':'SP',
    'PostalCode':'05442-030',
    'Country':'Brazil',
    'Phone':'(11) 555-9857',
    'Fax':null},
  {'CustomerID':'FISSA',
    'CompanyName':'FISSA Fabrica Inter. Salchichas S.A.',
    'ContactName':'Diego Roel',
    'ContactTitle':'Accounting Manager',
    'Address':'C/ Moralzarzal, 86',
    'City':'Madrid',
    'Region':null,
    'PostalCode':'28034',
    'Country':'Spain',
    'Phone':'(91) 555 94 44',
    'Fax':'(91) 555 55 93'},
  {'CustomerID':'FOLIG',
    'CompanyName':'Folies gourmandes',
    'ContactName':'Martine Rancé',
    'ContactTitle':'Assistant Sales Agent',
    'Address':'184, chaussée de Tournai',
    'City':'Lille',
    'Region':null,
    'PostalCode':'59000',
    'Country':'France',
    'Phone':'20.16.10.16',
    'Fax':'20.16.10.17'},
  {'CustomerID':'FOLKO',
    'CompanyName':'Folk och fä HB',
    'ContactName':'Maria Larsson',
    'ContactTitle':'Owner',
    'Address':'Åkergatan 24',
    'City':'Bräcke',
    'Region':null,
    'PostalCode':'S-844 67',
    'Country':'Sweden',
    'Phone':'0695-34 67 21',
    'Fax':null},
  {'CustomerID':'FRANK',
    'CompanyName':'Frankenversand',
    'ContactName':'Peter Franken',
    'ContactTitle':'Marketing Manager',
    'Address':'Berliner Platz 43',
    'City':'München',
    'Region':null,
    'PostalCode':'80805',
    'Country':'Germany',
    'Phone':'089-0877310',
    'Fax':'089-0877451'},
  {'CustomerID':'FRANR',
    'CompanyName':'France restauration',
    'ContactName':'Carine Schmitt',
    'ContactTitle':'Marketing Manager',
    'Address':'54, rue Royale',
    'City':'Nantes',
    'Region':null,
    'PostalCode':'44000',
    'Country':'France',
    'Phone':'40.32.21.21',
    'Fax':'40.32.21.20'},
  {'CustomerID':'FRANS',
    'CompanyName':'Franchi S.p.A.',
    'ContactName':'Paolo Accorti',
    'ContactTitle':'Sales Representative',
    'Address':'Via Monte Bianco 34',
    'City':'Torino',
    'Region':null,
    'PostalCode':'10100',
    'Country':'Italy',
    'Phone':'011-4988260',
    'Fax':'011-4988261'},
  {'CustomerID':'FURIB',
    'CompanyName':'Furia Bacalhau e Frutos do Mar',
    'ContactName':'Lino Rodriguez',
    'ContactTitle':'Sales Manager',
    'Address':'Jardim das rosas n. 32',
    'City':'Lisboa',
    'Region':null,
    'PostalCode':'1675',
    'Country':'Portugal',
    'Phone':'(1) 354-2534',
    'Fax':'(1) 354-2535'},
  {'CustomerID':'GALED',
    'CompanyName':'Galería del gastrónomo',
    'ContactName':'Eduardo Saavedra',
    'ContactTitle':'Marketing Manager',
    'Address':'Rambla de Cataluña, 23',
    'city':'Barcelona',
    'Region':null,
    'PostalCode':'08022',
    'Country':'Spain',
    'Phone':'(93) 203 4560',
    'Fax':'(93) 203 4561'},
  {'CustomerID':'GODOS',
    'CompanyName':'Godos Cocina Típica',
    'ContactName':'José Pedro Freyre',
    'ContactTitle':'Sales Manager',
    'Address':'C/ Romero, 33',
    'City':'Sevilla',
    'Region':null,
    'PostalCode':'41101',
    'Country':'Spain',
    'Phone':'(95) 555 82 82',
    'Fax':null},
  {'CustomerID':'GOURL',
    'CompanyName':'Gourmet Lanchonetes',
    'ContactName':'André Fonseca',
    'ContactTitle':'Sales Associate',
    'Address':'Av. Brasil, 442',
    'City':'Campinas',
    'Region':'SP',
    'PostalCode':'04876-786',
    'Country':'Brazil',
    'Phone':'(11) 555-9482',
    'Fax':null},
  {'CustomerID':'GREAL',
    'CompanyName':'Great Lakes Food Market',
    'ContactName':'Howard Snyder',
    'ContactTitle':'Marketing Manager',
    'Address':'2732 Baker Blvd.',
    'City':'Eugene',
    'Region':'OR',
    'PostalCode':'97403',
    'Country':'USA',
    'Phone':'(503) 555-7555',
    'Fax':null},
  {'CustomerID':'GROSR',
    'CompanyName':'GROSELLA-Restaurante',
    'ContactName':'Manuel Pereira',
    'ContactTitle':'Owner',
    'Address':'5ª Ave. Los Palos Grandes',
    'City':'Caracas',
    'Region':'DF',
    'PostalCode':'1081',
    'Country':'Venezuela',
    'Phone':'(2) 283-2951',
    'Fax':'(2) 283-3397'},
  {'CustomerID':'HANAR',
    'CompanyName':'Hanari Carnes',
    'ContactName':'Mario Pontes',
    'ContactTitle':'Accounting Manager',
    'Address':'Rua do Paço, 67',
    'City':'Rio de Janeiro',
    'Region':'RJ',
    'PostalCode':'05454-876',
    'Country':'Brazil',
    'Phone':'(21) 555-0091',
    'Fax':'(21) 555-8765'},
  {'CustomerID':'HILAA',
    'CompanyName':'HILARION-Abastos',
    'ContactName':'Carlos Hernández',
    'ContactTitle':'Sales Representative',
    'Address':'Carrera 22 con Ave. Carlos Soublette #8-35',
    'City':'San Cristóbal',
    'Region':'Táchira',
    'PostalCode':'5022',
    'Country':'Venezuela',
    'Phone':'(5) 555-1340',
    'Fax':'(5) 555-1948'},
  {'CustomerID':'HUNGC',
    'CompanyName':'Hungry Coyote Import Store',
    'ContactName':'Yoshi Latimer',
    'ContactTitle':'Sales Representative',
    'Address':'City Center Plaza 516 Main St.',
    'City':'Elgin',
    'Region':'OR',
    'PostalCode':'97827',
    'Country':'USA',
    'Phone':'(503) 555-6874',
    'Fax':'(503) 555-2376'},
  {'CustomerID':'HUNGO',
    'CompanyName':'Hungry Owl All-Night Grocers',
    'ContactName':'Patricia McKenna',
    'ContactTitle':'Sales Associate',
    'Address':'8 Johnstown Road',
    'City':'Cork',
    'Region':'Co. Cork',
    'PostalCode':null,
    'Country':'Ireland',
    'Phone':'2967 542',
    'Fax':'2967 3333'},
  {'CustomerID':'ISLAT',
    'CompanyName':'Island Trading',
    'ContactName':'Helen Bennett',
    'ContactTitle':'Marketing Manager',
    'Address':'Garden House Crowther Way',
    'City':'Cowes',
    'Region':'Isle of Wight',
    'PostalCode':'PO31 7PJ',
    'Country':'UK',
    'Phone':'(198) 555-8888',
    'Fax':null},
  {'CustomerID':'KOENE',
    'CompanyName':'Königlich Essen',
    'ContactName':'Philip Cramer',
    'ContactTitle':'Sales Associate',
    'Address':'Maubelstr. 90',
    'City':'Brandenburg',
    'Region':null,
    'PostalCode':'14776',
    'Country':'Germany',
    'Phone':'0555-09876',
    'Fax':null},
  {'CustomerID':'LACOR',
    'CompanyName':"La corne d'abondance",
    'ContactName':'Daniel Tonini',
    'ContactTitle':'Sales Representative',
    'Address':'67, avenue de l''Europe',
    'City':'Versailles',
    'Region':null,
    'PostalCode':'78000',
    'Country':'France',
    'Phone':'30.59.84.10',
    'Fax':'30.59.85.11'},
  {'CustomerID':'LAMAI',
    'CompanyName':"La maison d'Asie",
    'ContactName':'Annette Roulet',
    'ContactTitle':'Sales Manager',
    'Address':'1 rue Alsace-Lorraine',
    'City':'Toulouse',
    'Region':null,
    'PostalCode':'31000',
    'Country':'France',
    'Phone':'61.77.61.10',
    'Fax':'61.77.61.11'},
  {'CustomerID':'LAUGB',
    'CompanyName':'Laughing Bacchus Wine Cellars',
    'ContactName':'Yoshi Tannamuri',
    'ContactTitle':'Marketing Assistant',
    'Address':'1900 Oak St.',
    'City':'Vancouver',
    'Region':'BC',
    'PostalCode':'V3F 2K1',
    'Country':'Canada',
    'Phone':'(604) 555-3392',
    'Fax':'(604) 555-7293'},
  {'CustomerID':'LAZYK',
    'CompanyName':'Lazy K Kountry Store',
    'ContactName':'John Steel',
    'ContactTitle':'Marketing Manager',
    'Address':'12 Orchestra Terrace',
    'City':'Walla Walla',
    'Region':'WA',
    'PostalCode':'99362',
    'Country':'USA',
    'Phone':'(509) 555-7969',
    'Fax':'(509) 555-6221'},
  {'CustomerID':'LEHMS',
    'CompanyName':'Lehmanns Marktstand',
    'ContactName':'Renate Messner',
    'ContactTitle':'Sales Representative',
    'Address':'Magazinweg 7',
    'City':'Frankfurt a.M.',
    'Region':null,
    'PostalCode':'60528',
    'Country':'Germany',
    'Phone':'069-0245984',
    'Fax':'069-0245874'},
  {'CustomerID':'LETSS',
    'CompanyName':"Let's Stop N Shop",
    'ContactName':'Jaime Yorres',
    'ContactTitle':'Owner',
    'Address':'87 Polk St. Suite 5',
    'City':'San Francisco',
    'Region':'CA',
    'PostalCode':'94117',
    'Country':'USA',
    'Phone':'(415) 555-5938',
    'Fax':null},
  {'CustomerID':'LILAS',
    'CompanyName':'LILA-Supermercado',
    'ContactName':'Carlos González',
    'ContactTitle':'Accounting Manager',
    'Address':'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
    'City':'Barquisimeto',
    'Region':'Lara',
    'PostalCode':'3508',
    'Country':'Venezuela',
    'Phone':'(9) 331-6954',
    'Fax':'(9) 331-7256'},
  {'CustomerID':'LINOD',
    'CompanyName':'LINO-Delicateses',
    'ContactName':'Felipe Izquierdo',
    'ContactTitle':'Owner',
    'Address':'Ave. 5 de Mayo Porlamar',
    'City':'I. de Margarita',
    'Region':'Nueva Esparta',
    'PostalCode':'4980',
    'Country':'Venezuela',
    'Phone':'(8) 34-56-12',
    'Fax':'(8) 34-93-93'},
  {'CustomerID':'LONEP',
    'CompanyName':'Lonesome Pine Restaurant',
    'ContactName':'Fran Wilson',
    'ContactTitle':'Sales Manager',
    'Address':'89 Chiaroscuro Rd.',
    'City':'Portland',
    'Region':'OR',
    'PostalCode':'97219',
    'Country':'USA',
    'Phone':'(503) 555-9573',
    'Fax':'(503) 555-9646'},
  {'CustomerID':'MAGAA',
    'CompanyName':'Magazzini Alimentari Riuniti',
    'ContactName':'Giovanni Rovelli',
    'ContactTitle':'Marketing Manager',
    'Address':'Via Ludovico il Moro 22',
    'City':'Bergamo',
    'Region':null,
    'PostalCode':'24100',
    'Country':'Italy',
    'Phone':'035-640230',
    'Fax':'035-640231'},
  {'CustomerID':'MAISD',
    'CompanyName':'Maison Dewey',
    'ContactName':'Catherine Dewey',
    'ContactTitle':'Sales Agent',
    'Address':'Rue Joseph-Bens 532',
    'City':'Bruxelles',
    'Region':null,
    'PostalCode':'B-1180',
    'Country':'Belgium',
    'Phone':'(02) 201 24 67',
    'Fax':'(02) 201 24 68'},
  {'CustomerID':'MEREP',
    'CompanyName':'Mère Paillarde',
    'ContactName':'Jean Fresnière',
    'ContactTitle':'Marketing Assistant',
    'Address':'43 rue St. Laurent',
    'City':'Montréal',
    'Region':'Québec',
    'PostalCode':'H1J 1C3',
    'Country':'Canada',
    'Phone':'(514) 555-8054',
    'Fax':'(514) 555-8055'},
  {'CustomerID':'MORGK',
    'CompanyName':'Morgenstern Gesundkost',
    'ContactName':'Alexander Feuer',
    'ContactTitle':'Marketing Assistant',
    'Address':'Heerstr. 22',
    'City':'Leipzig',
    'Region':null,
    'PostalCode':'04179',
    'Country':'Germany',
    'Phone':'0342-023176',
    'Fax':null},
  {'CustomerID':'NORTS',
    'CompanyName':'North/South',
    'ContactName':'Simon Crowther',
    'ContactTitle':'Sales Associate',
    'Address':'South House 300 Queensbridge',
    'City':'London',
    'Region':null,
    'PostalCode':'SW7 1RZ',
    'Country':'UK',
    'Phone':'(171) 555-7733',
    'Fax':'(171) 555-2530'},
  {'CustomerID':'OCEAN',
    'CompanyName':'Océano Atlántico Ltda.',
    'ContactName':'Yvonne Moncada',
    'ContactTitle':'Sales Agent',
    'Address':'Ing. Gustavo Moncada 8585 Piso 20-A',
    'City':'Buenos Aires',
    'Region':null,
    'PostalCode':'1010',
    'Country':'Argentina',
    'Phone':'(1) 135-5333',
    'Fax':'(1) 135-5535'},
  {'CustomerID':'OLDWO',
    'CompanyName':'Old World Delicatessen',
    'ContactName':'Rene Phillips',
    'ContactTitle':'Sales Representative',
    'Address':'2743 Bering St.',
    'City':'Anchorage',
    'Region':'AK',
    'PostalCode':'99508',
    'Country':'USA',
    'Phone':'(907) 555-7584',
    'Fax':'(907) 555-2880'},
  {'CustomerID':'OTTIK',
    'CompanyName':'Ottilies Käseladen',
    'ContactName':'Henriette Pfalzheim',
    'ContactTitle':'Owner',
    'Address':'Mehrheimerstr. 369',
    'City':'Köln',
    'Region':null,
    'PostalCode':'50739',
    'Country':'Germany',
    'Phone':'0221-0644327',
    'Fax':'0221-0765721'},
  {'CustomerID':'PARIS',
    'CompanyName':'Paris spécialités',
    'ContactName':'Marie Bertrand',
    'ContactTitle':'Owner',
    'Address':'265, boulevard Charonne',
    'City':'Paris',
    'Region':null,
    'PostalCode':'75012',
    'Country':'France',
    'Phone':'(1) 42.34.22.66',
    'Fax':'(1) 42.34.22.77'},
  {'CustomerID':'PERIC',
    'CompanyName':'Pericles Comidas clásicas',
    'ContactName':'Guillermo Fernández',
    'ContactTitle':'Sales Representative',
    'Address':'Calle Dr. Jorge Cash 321',
    'City':'México D.F.',
    'Region':null,
    'PostalCode':'05033',
    'Country':'Mexico',
    'Phone':'(5) 552-3745',
    'Fax':'(5) 545-3745'},
  {'CustomerID':'PICCO',
    'CompanyName':'Piccolo und mehr',
    'ContactName':'Georg Pipps',
    'ContactTitle':'Sales Manager',
    'Address':'Geislweg 14',
    'City':'Salzburg',
    'Region':null,
    'PostalCode':'5020',
    'Country':'Austria',
    'Phone':'6562-9722',
    'Fax':'6562-9723'},
  {'CustomerID':'PRINI',
    'CompanyName':'Princesa Isabel Vinhos',
    'ContactName':'Isabel de Castro',
    'ContactTitle':'Sales Representative',
    'Address':'Estrada da saúde n. 58',
    'City':'Lisboa',
    'Region':null,
    'PostalCode':'1756',
    'Country':'Portugal',
    'Phone':'(1) 356-5634',
    'Fax':null},
  {'CustomerID':'QUEDE',
    'CompanyName':'Que Delícia',
    'ContactName':'Bernardo Batista',
    'ContactTitle':'Accounting Manager',
    'Address':'Rua da Panificadora, 12',
    'City':'Rio de Janeiro',
    'Region':'RJ',
    'PostalCode':'02389-673',
    'Country':'Brazil',
    'Phone':'(21) 555-4252',
    'Fax':'(21) 555-4545'},
  {'CustomerID':'QUEEN',
    'CompanyName':'Queen Cozinha',
    'ContactName':'Lúcia Carvalho',
    'ContactTitle':'Marketing Assistant',
    'Address':'Alameda dos Canàrios, 891',
    'City':'Sao Paulo',
    'Region':'SP',
    'PostalCode':'05487-020',
    'Country':'Brazil',
    'Phone':'(11) 555-1189',
    'Fax':null},
  {'CustomerID':'QUICK',
    'CompanyName':'QUICK-Stop',
    'ContactName':'Horst Kloss',
    'ContactTitle':'Accounting Manager',
    'Address':'Taucherstraße 10',
    'City':'Cunewalde',
    'Region':null,
    'PostalCode':'01307',
    'Country':'Germany',
    'Phone':'0372-035188',
    'Fax':null},
  {'CustomerID':'RANCH',
    'CompanyName':'Rancho grande',
    'ContactName':'Sergio Gutiérrez',
    'ContactTitle':'Sales Representative',
    'Address':'Av. del Libertador 900',
    'City':'Buenos Aires',
    'Region':null,
    'PostalCode':'1010',
    'Country':'Argentina',
    'Phone':'(1) 123-5555',
    'Fax':'(1) 123-5556'},
  {'CustomerID':'RATTC',
    'CompanyName':'Rattlesnake Canyon Grocery',
    'ContactName':'Paula Wilson',
    'ContactTitle':'Assistant Sales Representative',
    'Address':'2817 Milton Dr.',
    'City':'Albuquerque',
    'Region':'NM',
    'PostalCode':'87110',
    'Country':'USA',
    'Phone':'(505) 555-5939',
    'Fax':'(505) 555-3620'},
  {'CustomerID':'REGGC',
    'CompanyName':'Reggiani Caseifici',
    'ContactName':'Maurizio Moroni',
    'ContactTitle':'Sales Associate',
    'Address':'Strada Provinciale 124',
    'City':'Reggio Emilia',
    'Region':null,
    'PostalCode':'42100',
    'Country':'Italy',
    'Phone':'0522-556721',
    'Fax':'0522-556722'},
  {'CustomerID':'RICAR',
    'CompanyName':'Ricardo Adocicados',
    'ContactName':'Janete Limeira',
    'ContactTitle':'Assistant Sales Agent',
    'Address':'Av. Copacabana, 267',
    'City':'Rio de Janeiro',
    'Region':'RJ',
    'PostalCode':'02389-890',
    'Country':'Brazil',
    'Phone':'(21) 555-3412',
    'Fax':null},
  {'CustomerID':'RICSU',
    'CompanyName':'Richter Supermarkt',
    'ContactName':'Michael Holz',
    'ContactTitle':'Sales Manager',
    'Address':'Grenzacherweg 237',
    'City':'Genève',
    'Region':null,
    'PostalCode':'1203',
    'Country':'Switzerland',
    'Phone':'0897-034214',
    'Fax':null},
  {'CustomerID':'ROMEY',
    'CompanyName':'Romero y tomillo',
    'ContactName':'Alejandra Camino',
    'ContactTitle':'Accounting Manager',
    'Address':'Gran Vía, 1',
    'City':'Madrid',
    'Region':null,
    'PostalCode':'28001',
    'Country':'Spain',
    'Phone':'(91) 745 6200',
    'Fax':'(91) 745 6210'},
  {'CustomerID':'SANTG',
    'CompanyName':'Santé Gourmet',
    'ContactName':'Jonas Bergulfsen',
    'ContactTitle':'Owner',
    'Address':'Erling Skakkes gate 78',
    'City':'Stavern',
    'Region':null,
    'PostalCode':'4110',
    'Country':'Norway',
    'Phone':'07-98 92 35',
    'Fax':'07-98 92 47'},
  {'CustomerID':'SAVEA',
    'CompanyName':'Save-a-lot Markets',
    'ContactName':'Jose Pavarotti',
    'ContactTitle':'Sales Representative',
    'Address':'187 Suffolk Ln.',
    'City':'Boise',
    'Region':'ID',
    'PostalCode':'83720',
    'Country':'USA',
    'Phone':'(208) 555-8097',
    'Fax':null},
  {'CustomerID':'SEVES',
    'CompanyName':'Seven Seas Imports',
    'ContactName':'Hari Kumar',
    'ContactTitle':'Sales Manager',
    'Address':'90 Wadhurst Rd.',
    'City':'London',
    'Region':null,
    'PostalCode':'OX15 4NB',
    'Country':'UK',
    'Phone':'(171) 555-1717',
    'Fax':'(171) 555-5646'},
  {'CustomerID':'SIMOB',
    'CompanyName':'Simons bistro',
    'ContactName':'Jytte Petersen',
    'ContactTitle':'Owner',
    'Address':'Vinbæltet 34',
    'City':'Kobenhavn',
    'Region':null,
    'PostalCode':'1734',
    'Country':'Denmark',
    'Phone':'31 12 34 56',
    'Fax':'31 13 35 57'},
  {'CustomerID':'SPECD',
    'CompanyName':'Spécialités du monde',
    'ContactName':'Dominique Perrier',
    'ContactTitle':'Marketing Manager',
    'Address':'25, rue Lauriston',
    'City':'Paris',
    'Region':null,
    'PostalCode':'75016',
    'Country':'France',
    'Phone':'(1) 47.55.60.10',
    'Fax':'(1) 47.55.60.20'},
  {'CustomerID':'SPLIR',
    'CompanyName':'Split Rail Beer & Ale',
    'ContactName':'Art Braunschweiger',
    'ContactTitle':'Sales Manager',
    'Address':'P.O. Box 555',
    'City':'Lander',
    'Region':'WY',
    'PostalCode':'82520',
    'Country':'USA',
    'Phone':'(307) 555-4680',
    'Fax':'(307) 555-6525'},
  {'CustomerID':'SUPRD',
    'CompanyName':'Suprêmes délices',
    'ContactName':'Pascale Cartrain',
    'ContactTitle':'Accounting Manager',
    'Address':'Boulevard Tirou, 255',
    'City':'Charleroi',
    'Region':null,
    'PostalCode':'B-6000',
    'Country':'Belgium',
    'Phone':'(071) 23 67 22 20',
    'Fax':'(071) 23 67 22 21'},
  {'CustomerID':'THEBI',
    'CompanyName':'The Big Cheese',
    'ContactName':'Liz Nixon',
    'ContactTitle':'Marketing Manager',
    'Address':'89 Jefferson Way Suite 2',
    'City':'Portland',
    'Region':'OR',
    'PostalCode':'97201',
    'Country':'USA',
    'Phone':'(503) 555-3612',
    'Fax':null},
  {'CustomerID':'THECR',
    'CompanyName':'The Cracker Box',
    'ContactName':'Liu Wong',
    'ContactTitle':'Marketing Assistant',
    'Address':'55 Grizzly Peak Rd.',
    'City':'Butte',
    'Region':'MT',
    'PostalCode':'59801',
    'Country':'USA',
    'Phone':'(406) 555-5834',
    'Fax':'(406) 555-8083'},
  {'CustomerID':'TOMSP',
    'CompanyName':'Toms Spezialitäten',
    'ContactName':'Karin Josephs',
    'ContactTitle':'Marketing Manager',
    'Address':'Luisenstr. 48',
    'City':'Münster',
    'Region':null,
    'PostalCode':'44087',
    'Country':'Germany',
    'Phone':'0251-031259',
    'Fax':'0251-035695'},
  {'CustomerID':'TORTU',
    'CompanyName':'Tortuga Restaurante',
    'ContactName':'Miguel Angel Paolino',
    'ContactTitle':'Owner',
    'Address':'Avda. Azteca 123',
    'City':'México D.F.',
    'Region':null,
    'PostalCode':'05033',
    'Country':'Mexico',
    'Phone':'(5) 555-2933',
    'Fax':null},
  {'CustomerID':'TRADH',
    'CompanyName':'Tradição Hipermercados',
    'ContactName':'Anabela Domingues',
    'ContactTitle':'Sales Representative',
    'Address':'Av. Inês de Castro, 414',
    'City':'Sao Paulo',
    'Region':'SP',
    'PostalCode':'05634-030',
    'Country':'Brazil',
    'Phone':'(11) 555-2167',
    'Fax':'(11) 555-2168'},
  {'CustomerID':'TRAIH',
    'CompanyName':"Trail's Head Gourmet Provisioners",
    'ContactName':'Helvetius Nagy',
    'ContactTitle':'Sales Associate',
    'Address':'722 DaVinci Blvd.',
    'City':'Kirkland',
    'Region':'WA',
    'PostalCode':'98034',
    'Country':'USA',
    'Phone':'(206) 555-8257',
    'Fax':'(206) 555-2174'},
  {'CustomerID':'VAFFE',
    'CompanyName':'Vaffeljernet',
    'ContactName':'Palle Ibsen',
    'ContactTitle':'Sales Manager',
    'Address':'Smagsloget 45',
    'City':'Århus',
    'Region':null,
    'PostalCode':'8200',
    'Country':'Denmark',
    'Phone':'86 21 32 43',
    'Fax':'86 22 33 44'},
  {'CustomerID':'VICTE',
    'CompanyName':'Victuailles en stock',
    'ContactName':'Mary Saveley',
    'ContactTitle':'Sales Agent',
    'Address':'2, rue du Commerce',
    'City':'Lyon'
    'Region':,null,
    'PostalCode':'69004',
    'Country':'France',
    'Phone':'78.32.54.86',
    'Fax':'78.32.54.87'},
  {'CustomerID':'VINET',
    'CompanyName':'Vins et alcools Chevalier',
    'ContactName':'Paul Henriot',
    'ContactTitle':'Accounting Manager',
    'Address':"59 rue de l'Abbaye",
    'City':'Reims',
    'Region':null,
    'PostalCode':'51100',
    'Country':'France',
    'Phone':'26.47.15.10',
    'Fax':'26.47.15.11'},
  {'CustomerID':'WANDK',
    'CompanyName':'Die Wandernde Kuh',
    'ContactName':'Rita Müller',
    'ContactTitle':'Sales Representative',
    'Address':'Adenauerallee 900',
    'City':'Stuttgart',
    'Region':null,
    'PostalCode':'70563',
    'Country':'Germany',
    'Phone':'0711-020361',
    'Fax':'0711-035428'},
  {'CustomerID':'WARTH',
    'CompanyName':'Wartian Herkku',
    'ContactName':'Pirkko Koskitalo',
    'ContactTitle':'Accounting Manager',
    'Address':'Torikatu 38',
    'City':'Oulu',
    'Region':null,
    'PostalCode':'90110',
    'Country':'Finland',
    'Phone':'981-443655',
    'Fax':'981-443655'},
  {'CustomerID':'WELLI',
    'CompanyName':'Wellington Importadora',
    'ContactName':'Paula Parente',
    'ContactTitle':'Sales Manager',
    'Address':'Rua do Mercado, 12',
    'City':'Resende',
    'Region':'SP',
    'PostalCode':'08737-363',
    'Country':'Brazil',
    'Phone':'(14) 555-8122',
    'Fax':null},
  {'CustomerID':'WHITC',
    'CompanyName':'White Clover Markets',
    'ContactName':'Karl Jablonski',
    'ContactTitle':'Owner',
    'Address':'305 - 14th Ave. S. Suite 3B',
    'City':'Seattle',
    'Region':'WA',
    'PostalCode':'98128',
    'Country':'USA',
    'Phone':'(206) 555-4112',
    'Fax':'(206) 555-4115'},
  {'CustomerID':'WILMK',
    'CompanyName':'Wilman Kala',
    'ContactName':'Matti Karttunen',
    'ContactTitle':'Owner/Marketing Assistant',
    'Address':'Keskuskatu 45',
    'City':'Helsinki',
    'Region':null,
    'PostalCode':'21240',
    'Country':'Finland',
    'Phone':'90-224 8858',
    'Fax':'90-224 8858'},
  {'CustomerID':'WOLZA',
    'CompanyName':'Wolski Zajazd',
    'ContactName':'Zbyszek Piestrzeniewicz',
    'ContactTitle':'Owner',
    'Address':'ul. Filtrowa 68',
    'City':'Warszawa',
    'Region':null,
    'PostalCode':'01-012',
    'Country':'Poland',
    'Phone':'(26) 642-7012',
    'Fax':'(26) 642-7012'}
]

=============================



/* The following adds stored procedures */

if exists (select * from sysobjects where id = object_id{'dbo.CustOrdersDetail'))
    drop procedure dbo.CustOrdersDetail
GO

CREATE PROCEDURE CustOrdersDetail @OrderID int
AS
SELECT ProductName,
    UnitPrice=ROUND(Od.UnitPrice, 2),
    Quantity,
    Discount=CONVERT(int, Discount * 100), 
    ExtendedPrice=ROUND(CONVERT(money, Quantity * (1 - Discount) * Od.UnitPrice), 2)
FROM Products P, [Order Details] Od
WHERE Od.ProductID = P.ProductID and Od.OrderID = @OrderID
go


if exists (select * from sysobjects where id = object_id{'dbo.CustOrdersOrders'))
	drop procedure dbo.CustOrdersOrders
GO

CREATE PROCEDURE CustOrdersOrders @CustomerID nchar(5)
AS
SELECT OrderID, 
	OrderDate,
	RequiredDate,
	ShippedDate
FROM Orders
WHERE CustomerID = @CustomerID
ORDER BY OrderID
GO


if exists (select * from sysobjects where id = object_id{'dbo.CustOrderHist') and sysstat & 0xf = 4)
	drop procedure dbo.CustOrderHist
GO
CREATE PROCEDURE CustOrderHist @CustomerID nchar(5)
AS
SELECT ProductName, Total=SUM(Quantity)
FROM Products P, [Order Details] OD, Orders O, Customers C
WHERE C.CustomerID = @CustomerID
AND C.CustomerID = O.CustomerID AND O.OrderID = OD.OrderID AND OD.ProductID = P.ProductID
GROUP BY ProductName
GO

if exists (select * from sysobjects where id = object_id{'dbo.SalesByCategory') and sysstat & 0xf = 4)
	drop procedure dbo.SalesByCategory
GO
CREATE PROCEDURE SalesByCategory
    @CategoryName nvarchar(15), @OrdYear nvarchar(4) = '1998'
AS
IF @OrdYear != '1996' AND @OrdYear != '1997' AND @OrdYear != '1998' 
BEGIN
	SELECT @OrdYear = '1998'
END

SELECT ProductName,
	TotalPurchase=ROUND(SUM(CONVERT(decimal(14,2), OD.Quantity * (1-OD.Discount) * OD.UnitPrice)), 0)
FROM [Order Details] OD, Orders O, Products P, Categories C
WHERE OD.OrderID = O.OrderID 
	AND OD.ProductID = P.ProductID 
	AND P.CategoryID = C.CategoryID
	AND C.CategoryName = @CategoryName
	AND SUBSTRING(CONVERT(nvarchar(22), O.OrderDate, 111), 1, 4) = @OrdYear
GROUP BY ProductName
ORDER BY ProductName
GO


/* The follwing adds tables to the Northwind database */


CREATE TABLE [dbo].[CustomerCustomerDemo] 
	([CustomerID] nchar (5) NOT null,
	[CustomerTypeID] [nchar] (10) NOT null
) ON [PRIMARY] 
GO

CREATE TABLE [dbo].[CustomerDemographics] 
	([CustomerTypeID] [nchar] (10) NOT null ,
	[CustomerDesc] [ntext] null 
)  ON [PRIMARY] 
GO		
	
CREATE TABLE [dbo].[Region] 
	( [RegionID] [int] NOT null ,
	[RegionDescription] [nchar] (50) NOT null 
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Territories] 
	([TerritoryID] [nvarchar] (20) NOT null ,
	[TerritoryDescription] [nchar] (50) NOT null ,
        [RegionID] [int] NOT null
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[EmployeeTerritories] 
	([EmployeeID] [int] NOT null,
	[TerritoryID] [nvarchar] (20) NOT null 
) ON [PRIMARY]

-- The following adds data to the tables just created.

Insert Into Region Values (1,'Eastern')
Insert Into Region Values (2,'Western')
Insert Into Region Values (3,'Northern')
Insert Into Region Values (4,'Southern')
Go

Insert Into Territories Values {'01581','Westboro',1)
Insert Into Territories Values {'01730','Bedford',1)
Insert Into Territories Values {'01833','Georgetow',1)
Insert Into Territories Values {'02116','Boston',1)
Insert Into Territories Values {'02139','Cambridge',1)
Insert Into Territories Values {'02184','Braintree',1)
Insert Into Territories Values {'02903','Providence',1)
Insert Into Territories Values {'03049','Hollis',3)
Insert Into Territories Values {'03801','Portsmouth',3)
Insert Into Territories Values {'06897','Wilton',1)
Insert Into Territories Values {'07960','Morristown',1)
Insert Into Territories Values {'08837','Edison',1)
Insert Into Territories Values {'10019','New York',1)
Insert Into Territories Values {'10038','New York',1)
Insert Into Territories Values {'11747','Mellvile',1)
Insert Into Territories Values {'14450','Fairport',1)
Insert Into Territories Values {'19428','Philadelphia',3)
Insert Into Territories Values {'19713','Neward',1)
Insert Into Territories Values {'20852','Rockville',1)
Insert Into Territories Values {'27403','Greensboro',1)
Insert Into Territories Values {'27511','Cary',1)
Insert Into Territories Values {'29202','Columbia',4)
Insert Into Territories Values {'30346','Atlanta',4)
Insert Into Territories Values {'31406','Savannah',4)
Insert Into Territories Values {'32859','Orlando',4)
Insert Into Territories Values {'33607','Tampa',4)
Insert Into Territories Values {'40222','Louisville',1)
Insert Into Territories Values {'44122','Beachwood',3)
Insert Into Territories Values {'45839','Findlay',3)
Insert Into Territories Values {'48075','Southfield',3)
Insert Into Territories Values {'48084','Troy',3)
Insert Into Territories Values {'48304','Bloomfield Hills',3)
Insert Into Territories Values {'53404','Racine',3)
Insert Into Territories Values {'55113','Roseville',3)
Insert Into Territories Values {'55439','Minneapolis',3)
Insert Into Territories Values {'60179','Hoffman Estates',2)
Insert Into Territories Values {'60601','Chicago',2)
Insert Into Territories Values {'72716','Bentonville',4)
Insert Into Territories Values {'75234','Dallas',4)
Insert Into Territories Values {'78759','Austin',4)
Insert Into Territories Values {'80202','Denver',2)
Insert Into Territories Values {'80909','Colorado Springs',2)
Insert Into Territories Values {'85014','Phoenix',2)
Insert Into Territories Values {'85251','Scottsdale',2)
Insert Into Territories Values {'90405','Santa Monica',2)
Insert Into Territories Values {'94025','Menlo Park',2)
Insert Into Territories Values {'94105','San Francisco',2)
Insert Into Territories Values {'95008','Campbell',2)
Insert Into Territories Values {'95054','Santa Clara',2)
Insert Into Territories Values {'95060','Santa Cruz',2)
Insert Into Territories Values {'98004','Bellevue',2)
Insert Into Territories Values {'98052','Redmond',2)
Insert Into Territories Values {'98104','Seattle',2)
Go

Insert Into EmployeeTerritories Values (1,'06897')
Insert Into EmployeeTerritories Values (1,'19713')
Insert Into EmployeeTerritories Values (2,'01581')
Insert Into EmployeeTerritories Values (2,'01730')
Insert Into EmployeeTerritories Values (2,'01833')
Insert Into EmployeeTerritories Values (2,'02116')
Insert Into EmployeeTerritories Values (2,'02139')
Insert Into EmployeeTerritories Values (2,'02184')
Insert Into EmployeeTerritories Values (2,'40222')
Insert Into EmployeeTerritories Values (3,'30346')
Insert Into EmployeeTerritories Values (3,'31406')
Insert Into EmployeeTerritories Values (3,'32859')
Insert Into EmployeeTerritories Values (3,'33607')
Insert Into EmployeeTerritories Values (4,'20852')
Insert Into EmployeeTerritories Values (4,'27403')
Insert Into EmployeeTerritories Values (4,'27511')
Insert Into EmployeeTerritories Values (5,'02903')
Insert Into EmployeeTerritories Values (5,'07960')
Insert Into EmployeeTerritories Values (5,'08837')
Insert Into EmployeeTerritories Values (5,'10019')
Insert Into EmployeeTerritories Values (5,'10038')
Insert Into EmployeeTerritories Values (5,'11747')
Insert Into EmployeeTerritories Values (5,'14450')
Insert Into EmployeeTerritories Values (6,'85014')
Insert Into EmployeeTerritories Values (6,'85251')
Insert Into EmployeeTerritories Values (6,'98004')
Insert Into EmployeeTerritories Values (6,'98052')
Insert Into EmployeeTerritories Values (6,'98104')
Insert Into EmployeeTerritories Values (7,'60179')
Insert Into EmployeeTerritories Values (7,'60601')
Insert Into EmployeeTerritories Values (7,'80202')
Insert Into EmployeeTerritories Values (7,'80909')
Insert Into EmployeeTerritories Values (7,'90405')
Insert Into EmployeeTerritories Values (7,'94025')
Insert Into EmployeeTerritories Values (7,'94105')
Insert Into EmployeeTerritories Values (7,'95008')
Insert Into EmployeeTerritories Values (7,'95054')
Insert Into EmployeeTerritories Values (7,'95060')
Insert Into EmployeeTerritories Values (8,'19428')
Insert Into EmployeeTerritories Values (8,'44122')
Insert Into EmployeeTerritories Values (8,'45839')
Insert Into EmployeeTerritories Values (8,'53404')
Insert Into EmployeeTerritories Values (9,'03049')
Insert Into EmployeeTerritories Values (9,'03801')
Insert Into EmployeeTerritories Values (9,'48075')
Insert Into EmployeeTerritories Values (9,'48084')
Insert Into EmployeeTerritories Values (9,'48304')
Insert Into EmployeeTerritories Values (9,'55113')
Insert Into EmployeeTerritories Values (9,'55439')
GO



--  The following adds constraints to the Northwind database

ALTER TABLE CustomerCustomerDemo
	ADD CONSTRAINT [PK_CustomerCustomerDemo] PRIMARY KEY  NONCLUSTERED 
	(
		[CustomerID],
		[CustomerTypeID]
	) ON [PRIMARY]
GO

ALTER TABLE CustomerDemographics
	ADD CONSTRAINT [PK_CustomerDemographics] PRIMARY KEY  NONCLUSTERED 
	(
		[CustomerTypeID]
	) ON [PRIMARY]
GO

ALTER TABLE CustomerCustomerDemo
	ADD CONSTRAINT [FK_CustomerCustomerDemo] FOREIGN KEY 
	(
		[CustomerTypeID]
	) REFERENCES [dbo].[CustomerDemographics] (
		[CustomerTypeID]
	)
GO

ALTER TABLE CustomerCustomerDemo
	ADD CONSTRAINT [FK_CustomerCustomerDemo_Customers] FOREIGN KEY
	(
		[CustomerID]
	) REFERENCES [dbo].[Customers] (
		[CustomerID]
	)
GO

ALTER TABLE Region
	ADD CONSTRAINT [PK_Region] PRIMARY KEY  NONCLUSTERED 
	(
		[RegionID]
	)  ON [PRIMARY] 
GO

ALTER TABLE Territories
	ADD CONSTRAINT [PK_Territories] PRIMARY KEY  NONCLUSTERED 
	(
		[TerritoryID]
	)  ON [PRIMARY] 
GO

ALTER TABLE Territories
	ADD CONSTRAINT [FK_Territories_Region] FOREIGN KEY 
	(
		[RegionID]
	) REFERENCES [dbo].[Region] (
		[RegionID]
	)
GO

ALTER TABLE EmployeeTerritories
	ADD CONSTRAINT [PK_EmployeeTerritories] PRIMARY KEY  NONCLUSTERED 
	(
		[EmployeeID],
		[TerritoryID]
	) ON [PRIMARY]
GO

ALTER TABLE EmployeeTerritories
	ADD CONSTRAINT [FK_EmployeeTerritories_Employees] FOREIGN KEY 
	(
		[EmployeeID]
	) REFERENCES [dbo].[Employees] (
		[EmployeeID]
	)
GO


ALTER TABLE EmployeeTerritories	
	ADD CONSTRAINT [FK_EmployeeTerritories_Territories] FOREIGN KEY 
	(
		[TerritoryID]
	) REFERENCES [dbo].[Territories] (
		[TerritoryID]
	) 
GO