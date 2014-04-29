//
//  SpeechToTextPhonegap.h
//  text-speech-cordova
//
//  Created by nicolas labbé on 12/04/2014.
//
//

#import <Cordova/CDVPlugin.h>
#import "SpeechToTextModule.h"

@interface SpeechToTextPhonegap : CDVPlugin<SpeechToTextModuleDelegate> {
    
    // PHONEGAP
    NSString *callbackId;
    CDVPluginResult* pluginResult;
    
    // UTIL
    NSThread *thread;
}

@property(nonatomic, strong)SpeechToTextModule *speechToTextObj;

- (void)init:(CDVInvokedUrlCommand*)command;
- (void) record:(CDVInvokedUrlCommand*)command;
- (void) record;
- (void) stopRecording:(CDVInvokedUrlCommand*)command;
- (void) stopRecording;

@end