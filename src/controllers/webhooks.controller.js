const config = require("../configs");
const stripeKey = config.stripe.key;
const webhooksKey = config.webhooks.key;


const stripe = require("stripe")(stripeKey);

const User = require('../models/user.model');

exports.stripewebhook = (req, res) => {

  let data;
  let eventType;

  const webhookSecret = webhooksKey;
  if (webhookSecret) {
    
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }

  switch (eventType) {

    case "payment_intent.succeeded":

        User.findByIdAndUpdate(data.object.metadata.userId, {subscription: data.object.metadata.subscriptionData}, {
            new: true,
        })
        .then(() => {
            console.log("Succceessssssss")
            res.sendStatus(200);
            return;
        })
        .catch(() => {
            console.log("Errrrooooooorrr")
        })
    
      break;
    
    default:
      
  }
  
};