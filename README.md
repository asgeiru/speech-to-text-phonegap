###This fork was created to make the plugin work with phongap build###

How to install :
====

````
cordova plugin add https://github.com/AdFabConnect/speech-to-text-phonegap.git
````

You need to remove one file to ARC mode

````
-fno-objc-arc
````

![Alt text](/docs/img1.png "Remove ARC mode SpeechToTextModule.m")

How to use :
====

Edit : Since the google speech api v2 you need an google console api key (please follow thos instructions http://www.chromium.org/developers/how-tos/api-keys)

The key look something like this : AIzaSyCnec1D-A7Fx3iysiLtp9BWZwh6s3T7... (I masked the last 3 letter sorry)

Init with callback function

```
window.SpeechToTextPhonegap.init(API_KEY, function(data)
{
    console.log(JSON.stringify(data));
});
```

Start recording
@param (int) millisecond before to automatically stop record [optional]
```
window.SpeechToTextPhonegap.record(6000);
```

Exemple of return object

```
{
    "result": [
        {
            "alternative": [
                {
                    "transcript": "j'ai perdu mon badge",
                    "confidence": 0.8369742
                },
                {
                    "transcript": "j'ai perdu mon briquet"
                },
                {
                    "transcript": "j'ai perdu mon bac"
                },
                {
                    "transcript": "j'ai perdu mon bridge"
                },
                {
                    "transcript": "j'ai perdu mon bateau"
                }
            ],
            "final": true
        }
    ],
    "result_index": 0
}
```
