var SpeechToTextPhonegap = {
    init: function(callback)
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
            []
        );
    },

    record: function(maxListeningTime)
    {
        cordova.exec(
            function(){},
            function(){},
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
            function(){},
            function(){},
            "SpeechToTextPhonegap",
            "stopRecording",
            []
        );
    }
};

module.exports = SpeechToTextPhonegap;
