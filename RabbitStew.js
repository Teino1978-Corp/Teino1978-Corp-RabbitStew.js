// function prototype to create queue and consumers with one call
RabbitStew.createConsumers(exchange, options, consumers);

// example usage
var exchange = RabbitStew.exchange(process.env.RABBIT_URL, 'test.exchange');

var queue = createConsumers(exchange, { name: 'test.queue', exclusive: false }, {
  'logs.error': function (data) {
    ...
    return Promise.resolve('ack');
  },
  'logs.info': function ...
  'logs.warn': function ...
});

// this will create a queue with routingKey: [ 'logs.error', 'logs.warn', 'logs.info']
// and add consumers for each routingKey.