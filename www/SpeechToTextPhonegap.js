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
    }
};

module.exports = SpeechToTextPhonegap;
