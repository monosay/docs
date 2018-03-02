---
id: botkit-nodejs-data
title: Using Data Collections
sidebar_label: Using Data Collections
---

Data collections allows you to keep your persistant data in same place without additional database knowledge. 

You can create collections (like database table), fields (like database table columns) and rows (which is your data) in it.

### <i class="fas fa-database"></i> Creating Data Collections

Creating data collection is so easy. Follow the steps;

1. Go to your <a href="https://platform.monosay.com/bots" target="_blank">`Bot List`</a> (<a href="https://platform.monosay.com/bots" target="_blank"><i class="fas fa-globe"></i> `Bots`</a> on sidebar).
2. Select your `Bot` then Click `Data`.
3. Click `+ New Collection` for create a new data collection. (Or you can use one of your data collections listed below on the page.)
    - Select your `Provider` (Providers are your data locations.)
    - Type your `Collection Title`: The title you can see on the display.
    - Type your `Collection Name`: Name is important to access your data with API's and Libraries. Please pick a good name like `my-data` or `my_data`. Do not use special charachters.
4. Add fields
    - Fields are your data column and your data type.
    - Click `+ Add Field` button and add your field.
    - Pick a good name and title for it. (Name is also important here. We will use that name to access that field.)
    - Select your field type. 
    - Then save it.
    - Add additional fields if you want to keep more data.

Every collection comes with "id" field which is can't removable or changable. It will help us and you to get data or remove data directly with it.

### <i class="fas fa-plus"></i> Adding or Updating Data

You can use following code for adding new data to your collection.

<div class="browser-mockup with-tab">

```javascript
monosay.data("feedback-data").save(
{
    userid: session.message.user.id,
    feedback: "Hi, This is my feedback for your bot."
});
```

</div>

Seems easy right? But we want to tell you more.

`monosay.data()` is a method taking only one parameter which is your collection name. (Our collection name in this example is "feedback-data")

`monosay.data("feedback-data").save()` is another method and takes 3 parameters. First parameter is object `{}`. Every object property is for your field. Your field name and property value type is also important. Let's say you added 2 field to your collection. `no` (number) and `is_saved` (bool). 

<span class="text-danger"><i class="fas fa-exclamation-circle"></i> The following example will wrong for it because of type mismatch.</span>

<div class="browser-mockup with-tab">

```javascript
// Both fields are wrong because of type mismatch.
monosay.data("feedback-data").save({no: "4", is_saved: "false"});
```

</div>

<span class="text-success"><i class="fas fa-check-circle"></i> The correct one is;</span>

<div class="browser-mockup with-tab">

```javascript
// Both fields are seems fine now.
monosay.data("feedback-data").save({no: 4, is_saved: false});
```

</div>

`save` method also comes with 2 additonal callback. One of them is for success and one of them is error. Success callback fire only when everything is go fine with your save action. Error callback fire only when something is wrong with your data or connection or server.

Let's try it. (Code will looks complex but they are all just comments 😉)

<div class="browser-mockup with-tab">

```javascript
// Both fields are seems fine now.
monosay.data("feedback-data").save(
    { 
        userid: session.message.user.id,
        feedback: "Hi, This is my feedback for your bot."
    },
    // status will give you message from the server
    // It can contain additional things with your data
    // Success Callback (optional)
    function(status){
        // It will fire when everythings fine.
        // status.data will contain your data on the server.
        // It will also contain status.data.id which is for your data's unique id.
        session.send("I saved your data and your data id is " + status.data.id);
    },
    // status will give you message from the server
    // It can contain additional things with your data
    // like errors with your data.
    // Error Callback (Optional)
    function(status){
        // It will fire when something is wrong.
        if (status) {
            // Inform the bot user.
            session.send(status.message || "Something is wrong.");
            // About what is wrong.
            // status.errors will contain array (list) of errors.
            status.errors && status.errors.forEach(err => {
                session.send(err.message + " (" + err.internalMessage + ")");
            });
            console.debug("STATUS:" + status.message + ", INTERNAL: " + status.internalMessage)
        } else {
            session.send("Something is wrong!");
        }
    }
);
```

</div>

If you want to update that data, just send that data's id and you will get the same result when you try to call same method.

Here is the example.

<div class="browser-mockup with-tab">

```javascript
// Your Data's Unique Id - You can take it from your collection page or from data list.
var feedbackId = "aaaabbbbccc123";
// Both fields are seems fine now.
monosay.data("feedback-data").save(
    { 
        id: feedbackId,
        userid: session.message.user.id,
        feedback: "Hi, This is my updated feedback for your bot."
    },
    // Success Callback (Optional)
    function(status){
        session.send("I have updated your data");
    },
    // Error Callback (Optional)
    function(status){
        if (status) {
            session.send(status.message || "Something is wrong.");
            status.errors && status.errors.forEach(err => {
                session.send(err.message + " (" + err.internalMessage + ")");
            });
            console.debug("STATUS:" + status.message + ", INTERNAL: " + status.internalMessage)
        } else {
            session.send("Something is wrong!");
        }
    }
);
```

</div>

That's it 😉. You know lots of things right now. Let's keeping going to next one.

### <i class="fas fa-asterisk"></i> Getting Data

When you need to get spesific data, you can get it with your data's id. You can find that id from your Bot's Data Collection page. Also you can list it from your data. When you save your data, also you will get that data from `status.data.id`.

Every method (like `monosay.data().save()`) contains same callbacks `success` and `error`.

<div class="browser-mockup with-tab">

```javascript
monosay
    .data("feedback-data")
    .get("YOUR_DATA_ID",
        // Success Callback
        function(status) {
            if (status.data != null) {
                session.send("I found it. ");
                session.send("Your data is: " + status.data.feedback);
            } else {
                session.send("Something is wrong.");
            }
        },
        // Error Callback
        function(status) {
            session.send("I couldn't find your data.");
        });
```

</div>

That's it! You also know how to get data 👍.

### <i class="fas fa-minus-circle"></i> Removing Data

Compared to get spesific data, It is same usage but different method name.

When you want to remove a data just it following example with your data.

<div class="browser-mockup with-tab">

```javascript
monosay
    .data("feedback-data")
    .delete("YOUR_DATA_ID",
        // Success Callback
        function(status) {
            if (status.data != null) {
                session.send("Your data has been removed.");
            } else {
                session.send("Something is wrong.");
            }
        },
        // Error Callback
        function(status) {
            session.send("I couldn't find your data.");
        });
```

</div>

That's it! You also know how to get data 👍.

### <i class="fas fa-list"></i> Listing Data

We are making a great work with that. Hold on a little bit more 😎.

Coming soon 🤖.