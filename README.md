# College Buddy APP

## Demo link

You can find live app running [here](https://college-buddy.fly.dev/)

### Local Setup

To use an app make sure to use node version *16*. 

Rename `.env.tmpl` -> `.env.local` and fill out info.

Navigate to app folder and do:
```
npm i
```

When completed 
```
npm run dev
```

App should be up and running ( url provided in console output )


## App info

When user start typing UI sends requests to Next.JS api which forwards request further to the service. Response results are not cached, but it is easy to add caching based on search query. 

App stack: React/Next.JS, tailwind, react-query, axios
