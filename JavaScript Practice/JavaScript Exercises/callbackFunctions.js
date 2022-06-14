function weAddEventListener(typeOfEvent, callback) {
    let eventThatHappened = {
        type: "keydown",
        key: "w",
        duration: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened)
    }
}

weAddEventListener("keydown", function (e) {
    console.log(e)
})