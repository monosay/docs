---
id: msbot-nodejs-user
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
bot.dialog("/", [
    function(session) {
            monosay.user({
            channelUserId: session.message.user.id,
            name: "USER_NAME",
            surname: "USER_SURNAME",
            profilePhotoUrl: "PROFILE_PHOTO_URL",
            email: "EMAIL"
        }, /*success callback*/ function(){
            session.send("I updated/added your user information.");
        }, /*error callback*/ function(){
            session.send("Something is wrong. I could'nt udpate your user information.");
        });
    }
]);
```

</div>

For the following example, We wanted to update user information for Messenger user. We should call Facebook's Graph API to take that information.

First, you will need the following information.

|Name|Value|
|---|---|
| Facebook Graph API | `https://graph.facebook.com/` |
| Token | `This is your Access Token for your Application` | 
| Your User's Facebook Id | `session.message.user.id` |

We have used npm `request` package for to do that.

<div class="browser-mockup">

```javascript
bot.dialog("/", [
    function(session) {
        request.get({
            url: process.env.BOT_FB_GRAPHAPI_URL + session.message.user.id + "?fields=id,name,picture,email,first_name,last_name",
            headers: {
                Authorization: "Bearer " + process.env.BOT_FB_TOKEN
            }
        }, function(err, httpResponse, body) {
            if (!err && httpResponse.statusCode == 200 && body) {
                var user = JSON.parse(body);
                monosay.user({
                    channelUserId: session.message.user.id,
                    name: user.first_name,
                    surname: user.last_name,
                    profilePhotoUrl: user.picture.data.url,
                    email: user.email
                },  /*success callback*/ function(){
                    session.send("I updated/added your user information.");
                }, /*error callback*/ function(){
                    session.send("Something is wrong. I could'nt udpate your user information.");
                });
            }
        });
    }
]);
```

</div>

Just call it from the start dialog of your bot.

And that's it!