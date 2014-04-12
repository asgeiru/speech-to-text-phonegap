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

```
window.SpeechToTextPhonegap.record();
```

Exemple of return object

```
{"status":5,"id":"","hypotheses":[]}
```
