var SpeechToTextPhonegap = {
    init: function(str, callback)
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

    record: function(str, callback)
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
            "record",
            []
        );
    },
    
    stopRecording: function(str, callback)
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
            "stopRecording",
            []
        );
    }
};

module.exports = SpeechToTextPhonegap;
