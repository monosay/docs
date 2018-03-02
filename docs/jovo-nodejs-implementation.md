---
id: jovo-nodejs-implementation
title: How to Implement
sidebar_label: Implementation
---

<div class="intro">

### <i class="fas fa-code"></i> Development

First of all, if you don't know how to build a Alexa Skills or Google Action with Jovo, you can check the <a target="_blank" href="https://www.jovo.tech/learn" class="inline-link">Voice App Courses & Tutorials</a> by <a class="inline-link" href="https://jovo.tech">Jovo</a>.

</div>

### <i class="fas fa-info-circle"></i> Implementation

Let's go step by step.

1. You need to install our nodejs package to your project

<div class="browser-mockup">

```bash
npm install monosay@https://www.myget.org/F/monosay/npm/monosay/-/monosay-1.0.0-beta04.tgz
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
const { App } = require('jovo-framework');
// ...
const monosay = require('monosay').usejovo("YOUR_MONOSAY_JOVO_TOKEN");
// ...
```

</div>


5. Initialize the library

<div class="browser-mockup">

```javascript
// ...
const app = new App(config);
// ...
// Initialize the library
monosay.init(app);
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