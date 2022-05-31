fetch('http://127.0.0.1:33334/sum', {

    mode:'cors',
    // Declare what type of data we're sending
    headers: {
        'Content-Type': 'application/json'
    },

    // Specify the method
    method: 'POST',

    // A JSON payload
    body: JSON.stringify(
{'message':"komputer przywitaj"}
    )
}).then(function (response) { // At this point, Flask has printed our JSON
    return response.text();
}).then(function (text) {

    console.log('POST response: ');

    // Should be 'OK' if everything was successful
    console.log(text);
});