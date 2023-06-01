# HW 2 Week 10: Create a REST API with Express

## Getting Started

Load server.js file. In the terminal start the router by typing "npm run dev". Open Postman to test app. This app allows you to create items for an API by inputting their name and price. A unique ID number will be generated for each new item. Once Postman is opened type localhost:3000 in the URL. The following paths will allow you to use the app as described.

## Posting New Items

Using Postman, in the URL after localhost:3000 , type /items (localhost:3000/items). Select POST from the drop down menu provided by the box next to the URL. Next, under the URL click the Body option and under that make sure to select raw and be sure to set the type to JSON from the drop down menu. Next, in the text box create curly brackets and create your first item object by by providing a "name" and a "price". Once the item is created you will see it appear in the box below with an ID number as well. Make as many items as you would like!

## Returning A List Of Items

Once you have made some items you can see them all listed by going to localhost:3000/items. Make sure the box to the left of the URL bar is set to GET. All items should be displayed, marvel at your vast collection!

## Retrieve Item By ID

You can recall any item by ID by typing the ID number in the URL after localhost:3000/items (ex. localhost:3000/items/5).Make sure the box to the left of the URL bar is set to GET

## Update Item Properties

Once an item is recalled by id you can edit name or price properties and the item will be saved and returned with the updated properties. Be sure to first look up item by ID (ex.localhost:3000/items/5), then make sure the box to the left of the URL bar is set to PUT. Type your edits in the same way as you would add an item and hit return. The updated item with correct ID will appear in the box below.

## Delete An Item

Any item can simply be deleted by first searching the item by ID (ex.localhost:3000/items/5), and then change the option in the box to the left of the URL to DELETE. Once you hit enter, the item will be removed from your API. You can always check returning your updated list of items as described above. Enjoy!
