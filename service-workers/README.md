# Service Workers

A JavaScript file running in its own thread that will act as a
middleware offering a local installed web server or web
proxy for your PWA, including resources and API calls

    Runs client-side in browser's engine
    HTTPS required
    Installed by a web page
    Own thread and lifecycle
    Acts as a network proxy or local web server
    in the name of the real server
    Abilities to run in the background
    No need for user's permission

A service worker can execute a code for 5 use-cases sync, background-sync, fetch, push. and payment handler even if the browser is closed provided that the browser is in memory

When a installed service worker is started again activated after an event, It cannot access stored data/variables from previous execution as the execution context is newly created

Because service workers act as middleware between your site and the internet, it’s really important that information is secure and encrypted. As a result, service workers will only work on sites that have an SSL certificate installed.

