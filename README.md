# YeeHaw!
A horse racing and betting animated bot for Discord, writting with [Discord.js](https://discord.js.org/)

## Running it for yourself
Clone the repo and install dependencies.

```bash
git clone https://github.com/d4mr/rolebot.git
cd yeehaw
npm install
```

Get your Discord client secret (create an app and get one from [here](https://discord.com/developers/applications) or learn more [here](https://discord.com/developers/docs/intro)) and set it as the `CLIENT_SECRET` environment variable. Alternatively, create a `.env` file like this:
```TXT:.env
CLIENT_SECRET=your_secret_goes_here
```
**Be carfeul!** *Do not commit your secret, or leak it anywhere publicly. This will grant anybody access to impersonate your bot.*
Run your bot with
```
npm start
```

## Configuring your bot
Change the bot prefix in [config.json](./config.json)

## Bot Functions
WIP. Try `$start` or `$yell`.

## Adding the bot to your server
Create an invite link with this format 
```
https://discord.com/oauth2/authorize?client_id={your_client_id_here}&scope=bot&permissions=3136
```
but replace the `client_id` query string with your client ID. You can find yours [here](https://discord.com/developers/applications).