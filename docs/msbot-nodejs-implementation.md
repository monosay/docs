---
id: msbot-nodejs-implementation
title: How to Implement
sidebar_label: Implementation - NodeJS
---

<div class="intro">

### <i class="fas fa-code"></i> Development

First of all, if you don't know how to build a bot with Microsoft Bot Framework (NodeJS), you can check the <a target="_blank" href="https://docs.microsoft.com/en-us/bot-framework/nodejs/bot-builder-nodejs-quickstart" class="inline-link"><i class="fab fa-microsoft"></i> documentation</a>.

Also there are lots of samples about Microsoft Bot Framework on their <a target="_blank" href="https://github.com/Microsoft/BotBuilder-Samples" class="inline-link"><i class="fab fa-github"></i> Github Repository</a>.

</div>

### <i class="fas fa-info-circle"></i> Implementation

Let's go step by step.

1. You need to install our nodejs package to your project


<div class="browser-mockup">

```bash
npm install monosay@https://www.myget.org/F/monosay/npm/monosay/-/monosay-1.0.0.tgz
```

</div>

2. You must create a bot on our platform

<a href="//platform.monosay.com/bots/create" target="_blank" class="button"><i class="fas fa-plus"></i> Create a Bot</a> (If you already have a bot skip this step.)

3. You must create a channel to connect with

If you already have your token just skip this step

- Go to your bot
- Click channels
- Create Your Channel
- Copy Your Token

Keep your token for next step.

4. Import the library

<div class="browser-mockup">

```javascript
var restify = require('restify');
var builder = require('botbuilder');

// ...
var monosay = require('monosay').usebotframework("YOUR_MONOSAY_TOKEN");
// ...
```

</div>


5. Initialize the library

<div class="browser-mockup">

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

</div>

6. Set the session storage (optional but highly recommended)

<div class="browser-mockup">

```javascript
// ...
// ...
// Set the storage
bot.set("storage", monosay.storage);
// ...
monosay.init(bot);
// ...
```

</div>

7. Start messaging with your bot.
8. Go to your bot's dashboard
9. You will start to see your Analytics, Conversations and more...
<div id="ms_dashboard" class="browser-mockup with-url" style="padding:0 !important;">
    <img src="/img/screenshots/monosay-analytics.png"  />
</div>

<div id="ms_conversations" class="browser-mockup with-url" style="padding:0 !important;">
    <img src="/img/screenshots/monosay-conversations.png" />
</div>

<i class="fas fa-check"></i> Congratulations! You have finally implemented <strong>{mono}say</strong> into your Bot.