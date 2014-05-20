var SpeechToTextPhonegap = {
    init: function(apiKey, callback)
    {
        cordova.exec(
            function(data)
            {
                callback(JSON.parse(data));
            },
            function(err)
            {
                callback(err);
            },
            "SpeechToTextPhonegap",
            "init",
            [apiKey]
        );
    },

    record: function(maxListeningTime)
    {
        cordova.exec(
            null,
            null,
            "SpeechToTextPhonegap",
            "record",
            []
        );

        if(typeof maxListeningTime !== 'undefined' && maxListeningTime !== null) {
            setTimeout(this.stopRecording.bind(this), maxListeningTime);
        }
    },
    
    stopRecording: function()
    {
        cordova.exec(
            null,
            null,
            "SpeechToTextPhonegap",
            "stopRecording",
            []
        );
    }
};

module.exports = SpeechToTextPhonegap;
