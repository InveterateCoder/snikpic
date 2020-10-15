module.exports = {
  addBusiness: '/api/add/business/:channelName',
  removeBusiness: '/api/remove/business/:businessId',
  addChannel: '/api/add/channel/:businessId/:channelName',
  removeChannel: '/api/remove/channel/:businessId/:channelName',
  sendMessageBusiness: '/api/send/business/:businessId',
  sendMessageChannel: '/api/send/business/:channelName'
}