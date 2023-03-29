# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:
Calling super in a Ruby class allows the arguments from a child class to be passed to a method in a parent class.  

Researched answer:
Ruby uses the super keyword to call the superclass of a method. Inside the body of a method, calls to super act just like a call to that original parent method. The use of inheritance is what allows you to call a parent class method from the child class we are using super. 
There are two separate variations of super that can be called, with and without parens - super / super().

When you call super w/o parens, the arguments are implicitly passed to the parent method. So when super is invoked in the child class, the arguments are then passed implicitly to the associated parent class method. The child class is still able to use its own methods and returns as well.
When you use super() with parens, arguments are NOT implicitly passed and no arguments are passed on to the parent method. 

Example:
class Parent
   def superCheck
    'am in parent class'
   end
end
class Child < Parent
    def superCheck
       super
       'child call'
    end
end 
p Child.new.superCheck
 => am in parent class
 =>child call 

2. What is a gem?

Your answer:
A gem in Ruby is a library of code snippets or a program. They are open source and community written. You are able to install these gems onto your local machine (and later have them as dependencies for your apps and projects). You are able to use all the functionality of this prewritten code (But you should probably read the documentation so you actually understand how it works and what you're doing!) without having to write it yourself. RubyGems is a package manager for,  you guessed it, Ruby gems! It functions similarly to other package managers such as NPM and Yarn. 

Researched answer:
A Gem in Ruby is prepackaged code that, when installed, gives the user access and the ability to use the Ruby code and methods that have been pre written by someone else in the Ruby community. These gems of prewritten code are generally packaged in such a way that they have a specific functionality and purpose. This includes frameworks that are language specific libraries such as rails. 
These gems are kept, organized and distributed through RubyGems. RubyGems is a package manager just like NPM and Yarn are for Javascript and Pip is for python, but it is specific to Ruby. There have currently been over 128 BILLION gems downloaded from the RubyGems.org website.
A Ruby Gem has three main components, the actual code, documentation and a gemspec. The actual ruby code and .rb files are generally kept within the 'lib' directory with the gem. Their documentation is generally held within a README file. The gemspec contains other information just as the name and contact info for the author of the gem, version information, and various other information that is pertinent to the gem. Gems can also contain other files such as executables, testing files and others.
Below are two separate examples. One is of the basic file tree of a gem. The other is just a couple of the recognisable gems that we have used in class.

Example:
% tree anturio
anturio/
├── bin/
│   └── anturio
├── lib/
│   └── anturio.rb
├── README
└── anturio.gemspec

Gem examples:
Rspec
Active Record 
Rails

3. What is a relational database? Are there other kinds of databases?

Your answer:
A relational database is a type of database with multiple tables, each table containing columns and rows to hold, sort, organize data. These different tables are all then associated to each other in a predefined way when the database is being built. This allows them to be broken down into much smaller, more understandable, and searchable pieces. These are SQL based databases. A couple examples of these types of databases and the software built around them would be mySQ, PostgreSQLor Oracle SQL.
There are also non-relational databases that are built off of an unstructured document format where the data is not structured like in the relational databases. Oftentimes because the data is not clearly organized or defined. Redis and MongoDB are noSQL ie. non-relational databases that come to mind. Facebook and instagram both use non-relational databases.  
I had a bit of luck on this one, a friend of mine has worked on oracle databases for over 20 years and we met for coffee last week and actually talked about the difference between oracle SQL (relational DB) and MongoDB (non-relational DB).    

Researched answer:
In addition to what I said above, which prior to that question, I didn't really know I knew about, the relational database model was developed in the 1970's by E.F. Codd who worked for IBM. It uses a common attribute to relate one data table to another. This is completely different from a hierarchical structure that organizes a database from the top down.
A way of thinking about this that really stuck with me while I was reading up more on this was to think about relational databases as a collection of spreadsheets all containing data. Each spreadsheet is a table and contains its own columns and rows holding data. With each "spreadsheet" being a table, each "column" is an attribute that specifies a data type and each "row" is a record of data entry that contains a value of that data type. Every table in a relational database has a specific attribute that is called the Primary Key leading me to the next interview question... 

There are also many subcategories of NoSql databases. These are other types of databases that do not use SQL but are different from a document based database like MongoDB. The following are a few examples. 
Google Bigtable is what is called a columnar database. These types of databases store the data records in columns instead of rows. These can be faster in certain cases but not always.
ObjectDB is what is considered an Object Oriented database. These types of databases function in a very similar way to OOP where not only can you store data but also hold functions as well.
Redis is an in-memory type of database. This type of database actually stores data in the system memory instead of on a harddrive. These types of databases can access data very quickly but are also much more limited in storage size. 

4. What are primary keys? Why are they important?

Your answer:
In a relational database, the primary key is an attribute (column) that is a unique identifier for each record (row) in a specific table. There can be only one primary key for a specific table. It is also used to help prevent duplicate records within the database.   

Researched answer:
The Primary Key in a database is a unique identifier that is associated with each row(record) inside a specific table. A specified table can only have one primary key. It can be either a single column or multiple columns that then give a unique value to each row. This is done so that every data entry is unique, even if it contains the same or similar data. It helps to expedite queries and keep the database clean of duplicate data.  

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:
Post - Get - Put - Patch - Delete
C - Create
R - Read
U - Update
D - Delete

Post associates to Create. When you POST you are creating a new record.
Get associates to Read. You are GETing data from the database,  hence it is readable.
Put associates to Update. You are PUTing information into a database entry that has already previously been created and replacing the old data.
Patch associates to Update as well. When you PATCH you are modifying that data entry that is already there and not replacing it.
Delete associates to Delete. When you DELETE you delete the entire data entry.   

Researched answer:
The 5 primary HTTP verbs are POST, GET, PUT, PATCH, and DELETE. These are all request methods that are used to perform a specified action. These 5 are the main ones used in association with CRUD but there are additional ones such as HEAD, CONNECT, OPTIONS and TRACE. There are however 39 total HTTP verbs according to the official HTTP Request Method Registry.
The HTTP verbs are used when building endpoints to interact with API's and make API calls and interactions.
CRUD stands for create, read, update, delete. These are the 4 main interactions that developers have with data that is stored in a database. A Post request, submits a value or data element to the database. This results in a change to the data in the database. This relates to the 'Create' in CRUD. A Get request, requests a value or data element from the database, it receives this data, this relates to the 'Read' in CRUD. The PUT and PATCH requests, both relate to the 'Update' action of CRUD. A PUT request, replaces all the current data of a previous data entry with the PUT request payload. A PATCH request, replaces and/or modifies some of the current data of a previous data entry with the PATCH request payload. A DELETE request deletes a specific data entry in the database, this relates to the "Delete" in CRUD.   

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
RESTful routes are the communications between clients and servers and the operations that are applied to an object into an HTTP request

2. Model validations:
Model validations are used to make sure that only valid and production ready code is saved to the database. 

3. Params:
Params is short for parameter that lets you pass a variable into a function or method.
Params within the Action controller allow you to choose what attributes to permit for mass updating.

4. ERB:
ERB stands for "Embedded Ruby". It is a file structure that allows you to code in HTML and add Ruby code into the view file. 

5. API:
API stands for Application Programming Interface. It allows two computers/applications to talk to each other. 
