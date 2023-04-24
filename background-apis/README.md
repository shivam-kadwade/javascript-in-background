# Background Sync

Service workers cannot access local storage, they can only access indexed databases.

## Periodic Sync

Execution frequency for background sync depends on site engangement score defined by Browser. You can check engagement score on chrome at chrome://discards

For installed PWAs, your app can use this api as many times as it wants since you have manually installed PWA(allowing permission for background execution)

## Push Notification
