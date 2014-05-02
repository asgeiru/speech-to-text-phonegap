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

Init with callback function

```
window.SpeechToTextPhonegap.init(function(data)
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
{"status":5,"id":"","hypotheses":[]}
```
