---
id: botkit-nodejs-user
title: Updating User Information
sidebar_label: Updating User Information
---

<div class="intro">

<i class="fas fa-info-circle"></i> User informations enable for you to update data (name, profile picture, sex etc) of the users messaging through your bot. Even though these informations are provided directly in some platforms, you might need to make an API call in some other platforms.

It’s super easy to update a user information on {mono}say. The method to do it comes in a package with the NodeJS package you installed.

</div>

### Updating the User Information

This process is usually done while the user first starts to talk with the bot.

You can use the following code to update the user informations:

<div class="browser-mockup">

```javascript
 monosay.user({
    channelUserId: "YOUR_USER'S_ASSOCIATED_ID",
    name: "USER_NAME",
    surname: "USER_SURNAME",
    profilePhotoUrl: "PROFILE_PHOTO_URL",
    email: "EMAIL"
}, /*success callback*/ null, /*error callback*/ null);
```

</div>

You can update your user infomration with following example.

<div class="browser-mockup">

```javascript
bot.start((ctx) => {
    console.log('started:', ctx.from.id)
    monosay.user({
        channelUserId: ctx.from.id,
        name: ctx.from.first_name,
        surname: ctx.from.last_name,
        userName: ctx.from.username
    }, /*success callback*/ null, /*error callback*/ null);
    return ctx.reply('Welcome!');
});
```

</div>

Just call it from the start dialog of your bot.

You can also use callback methods like;

<div class="browser-mockup">

```javascript
bot.start((ctx) => {
    console.log('started:', ctx.from.id)
    monosay.user({
        channelUserId: ctx.from.id,
        name: ctx.from.first_name,
        surname: ctx.from.last_name,
        userName: ctx.from.username
    }, 
    /*success callback*/ function(){
        session.send("I updated/added your user information.");
    }, 
    /*error callback*/ function(){
        session.send("Something is wrong. I could'nt udpate your user information.");
    });
    return ctx.reply('Welcome!');
});
```

</div>

And that's it!