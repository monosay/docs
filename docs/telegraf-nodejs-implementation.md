---
id: telegraf-nodejs-implementation
title: How to Implement
sidebar_label: Implementation
---

<div class="intro">

### <i class="fas fa-code"></i> Development

First of all, if you don't know how to build a Telegram Bot with Telegraf, you can check the <a target="_blank" href="http://telegraf.js.org/" class="inline-link"><i class="fas fab fa-telegram"></i> Telegraf Documentation</a>.

Also there are lots of samples about Microsoft Bot Framework on their <a target="_blank" href="https://github.com/Microsoft/BotBuilder-Samples" class="inline-link"><i class="fab fa-github"></i> Github Repository</a>.

</div>

### <i class="fas fa-info-circle"></i> Implementation

Let's go step by step.

1. You need to install our nodejs package to your project

<div class="browser-mockup">

```bash
npm install monosay@https://www.myget.org/F/monosay/npm/monosay/-/monosay-1.0.0-beta03.tgz
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
const Telegraf = require('telegraf')
// ...
const monosay = require('monosay').usetelegraf("YOUR_MONOSAY_TELEGRAF_TOKEN");
// ...
```

</div>


5. Initialize the library

<div class="browser-mockup">

```javascript
// ...
const bot = new Telegraf(process.env.TELEGRAM_TOKEN)
// ...
// Initialize the library
monosay.init(bot);
// ...
```

</div>

6. Start messaging with your bot.
7. Go to your bot's dashboard
8. You will start to see your Analytics, Conversations and more...
<div id="ms_dashboard" class="browser-mockup with-url" style="padding:0 !important;">
    <img src="/img/screenshots/monosay-analytics.png"  />
</div>

<div id="ms_conversations" class="browser-mockup with-url" style="padding:0 !important;">
    <img src="/img/screenshots/monosay-conversations.png" />
</div>

<i class="fas fa-check"></i> Congratulations! You have finally implemented <strong>{mono}say</strong> into your Bot.