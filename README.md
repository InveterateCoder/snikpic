# snikpic
Snikpic Test

**For testing you'll need Node.js and MongoDB running in your environment**

1. replace "place_the_api_token_here" in .env file with your Bot User OAuth Access Token for Slack
1. install all required dependencies npm -i
1. start the application npm start

#### URLs

* **GET** /api/add/business/:__*channel-name*__
    * adds new business with its first channel linked
    * sets its name to the channel's name
    * returns the business' id
* **GET** /api/remove/business/:__*business-id*__
    * removes business
* **GET** /api/add/channel/:__*businessId*__/:__*channel-name*__
    * links new channel to the business
* **GET** /api/remove/channel/:__*businessId*__/:__*channelName*__
    * removes the channel from the business
    * if business' channels' list is empty removes the business
* **POST** /api/send/business/:__*business-id*__
    * accepts json body with text="message"
    * sends the message to all the linked channels
* **POST** /api/send/channel/:__*channel-name*__
    * accepts json body with text="message"
    * sends the message to the channel 
