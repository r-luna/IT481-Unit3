// EMPLOYEES

const template =
  {
    LastName: "",
    FirstName: "",
    Title: "",
    TitleOfCourtesy: "",
    BirthDate: "",
    HireDate: "",
    Address: "",
    City: "",
    Region: "",
    PostalCode: "",
    Country: "",
    HomePhone: "",
    Salary: "value",
    Extension: "value",
    PhotoPath: "value",
    Notes: "value",
    ReportsTo: "2",
    Photo: ""
  }

const content = [
  ['Davolio','Nancy','Sales Representative','Ms.','12/08/1948','05/01/1992','507 - 20th Ave. E.Apt. 2A','Seattle','WA','98122','USA','(206) 555-9857',68712.00,'5467'],
  ['Fuller','Andrew','Vice President, Sales','Dr.','02/19/1952','08/14/1992','908 W. Capital Way','Tacoma','WA','98401','USA','(206) 555-9482',250000.00,'3457','Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',null,'http://accweb/emmployees/fuller.bmp'],
  ['Leverling','Janet','Sales Representative','Ms.','08/30/1963','04/01/1992','722 Moss Bay Blvd.','Kirkland','WA','98033','USA','(206) 555-3412',61500,'3355','Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',2,'http://accweb/emmployees/leverling.bmp'],
  ['Peacock','Margaret','Sales Representative','Mrs.','09/19/1937','05/03/1993','4110 Old Redmond Rd.','Redmond','WA','98052','USA','(206) 555-8122',61500,'5176','Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',2,'http://accweb/emmployees/peacock.bmp'],
  ['Buchanan','Steven','Sales Manager','Mr.','03/04/1955','10/17/1993','14 Garrett Hill','London',null,'SW1 8JR','UK','(71) 555-4848',98802.00,'3453','Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses "Successful Telemarketing" and "International Sales Management."  He is fluent in French.',2,'http://accweb/emmployees/buchanan.bmp'],
  ['Suyama','Michael','Sales Representative','Mr.','07/02/1963','10/17/1993','Coventry House Miner Rd.','London',null,'EC2 7JR','UK','(71) 555-7773',58345.00,'428','Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses "Multi-Cultural Selling" and "Time Management for the Sales Professional."  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',5,'http://accweb/emmployees/davolio.bmp'],
  ['King','Robert','Sales Representative','Mr.','05/29/1960','01/02/1994','Edgeham Hollow Winchester Way','London',null,'RG1 9SP','UK','(71) 555-5598',54120.00,'465','Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled "Selling in Europe," he was transferred to the London office in March 1993.',5,'http://accweb/emmployees/davolio.bmp'],
  ['Callahan','Laura','Inside Sales Coordinator','Ms.','01/09/1958','03/05/1994','4726 - 11th Ave. N.E.','Seattle','WA','98105','USA','(206) 555-1189',42125.00,'2344','Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.',2,'http://accweb/emmployees/davolio.bmp'],
  ['Dodsworth','Anne','Sales Representative','Ms.','01/27/1966','11/15/1994','7 Houndstooth Rd.','London',null,'WG2 7LT','UK','(71) 555-4444',52987.00,'452','Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.',5,'http://accweb/emmployees/davolio.bmp']
];

const newArray = content.map((row) => {
  const newObj = {};
  for (let key in template) {
    newObj[key] = row.shift() || template[key];
  }
  return newObj;
});
