//task1
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
    let isRead = Symbol("isRead");
    messages[0][isRead] = true;
    let readMessages = new WeakSet();
  
  // two messages read
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  // readMessages has 2 elements
  
  // first message again!
  readMessages.add(messages[0]);
  // 2 unique elements
  
  // answer: was the message[0] read?
  alert("Read message 0: " + readMessages.has(messages[0])); // true
  
  messages.shift();
  // 1 element (technically memory may be cleaned later)

  //task2
  let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMap = new WeakMap();
  
  readMap.set(messages[0], new Date(2017, 1, 1));
  // Date object we'll study later