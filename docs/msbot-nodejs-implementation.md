---
id: msbot-nodejs-implementation
title: Implementation
sidebar_label: Implementation - NodeJS
---

First of all, If you don't know how to build a bot with Microsoft Bot Framework (NodeJS), you can check the [<i class="fas fa-book"></i> documentation](https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-quickstart).

## Implementation

Let's go step by step.

1. You need to install our nodejs package to your project.

```bash
npm install monosay@https://www.myget.org/F/monosay/npm/monosay/-/monosay-1.0.0-beta03.tgz
```

2. You must create a bot on our platform

<a href="//platform.monosay.com/bots/create" target="_blank" class="button"><i class="fas fa-plus"></i> Create a Bot</a> (If you already have a bot skip this step.)

3. You must create a channel to connect with

If you already have your token just skip this step.

- Go to your bot
- Click channels
- Create Your Channel
- Copy Your Token

Keep your token for next step.

4. Import the library

```javascript
var restify = require('restify');
var builder = require('botbuilder');

// ...
var monosay = require('monosay').usebotframework("YOUR_MONOSAY_TOKEN");
// ...
```

5. Initialize the library

```javascript
// ...
var bot = new builder.UniversalBot(connector, function(session) {
    session.send("You said: %s", session.message.text);
});
// ...
// Initialize the library
monosay.init(bot);
// ...
```

6. Set the session storage (Optional but highly recommended)

```javascript
// ...
// ...
// Set the storage
bot.set("storage", monosay.storage);
// ...
monosay.init(bot);
// ...
```

7. Start messaging with your bot.
8. Go to your Bot's dashboard
9. You will start to see your Analytics, Conversations and more...
- Dashboard
<img src="/img/screenshots/monosay-analytics.png" style="margin: 50px 20px; padding: 8px; box-shadow: 0 0 20px 0 #ddd" />
- Conversations
<img src="/img/screenshots/monosay-conversations.png" style="margin: 50px 20px; padding: 8px; box-shadow: 0 0 20px 0 #ddd" />

<i class="fas fa-check"></i> Congratulations! You have finally implemented <strong>{mono}say</strong> into your Bot.

Do you want more?

[<i class="fas fa-user"></i> Updating User Information](msbot-nodejs-user.md)

[<i class="fas fa-database"></i> Using Data Collections](msbot-nodejs-data.md)