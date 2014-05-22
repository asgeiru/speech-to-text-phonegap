//
//  SpeechToTextPhonegap.m
//  text-speech-cordova
//
//  Created by nicolas labbé on 12/04/2014.
//
//

#import "SpeechToTextPhonegap.h"
#import <Cordova/CDV.h>

@implementation SpeechToTextPhonegap

- (void)init:(CDVInvokedUrlCommand*)command
{
    pluginResult = nil;
    
    callbackId = command.callbackId;
    
    if([command.arguments count] >= 1) {
        apiKey = [NSString stringWithFormat:@"%@", [command.arguments objectAtIndex:0]];
    }
    [self.commandDelegate runInBackground:^{
        
        self.speechToTextObj = [[SpeechToTextModule alloc] initWithApiKey:apiKey];
        [self.speechToTextObj setDelegate:self];
        
        thread = [NSThread currentThread];
    }];
}

- (void)record:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        [self record];
    }];
}

- (void) record {
    [self.speechToTextObj beginRecording];
}


- (void)stopRecording:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        [self stopRecording];
    }];
}

- (void) stopRecording {
    [self.speechToTextObj stopRecording:YES];
}

#pragma mark - SpeechToTextModule Delegate -
- (BOOL)didReceiveVoiceResponse:(NSData *)data
{
    NSString *responseString = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    responseString = [responseString stringByReplacingOccurrencesOfString:@"{\"result\":[]}\n" withString:@""];
    
    if([responseString isEqualToString:@""]) {
        responseString = @"{\"result\": []}";
    }
    
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:responseString];
    [pluginResult setKeepCallback:[NSNumber numberWithBool:YES]];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
    
    return YES;
}

- (void)showLoadingView
{
    NSString *responseString = @"{\"message\": \"showLoadingView\"}";
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:responseString];
    [pluginResult setKeepCallback:[NSNumber numberWithBool:YES]];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

- (void)requestFailedWithError:(NSError *)error
{
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:[NSString stringWithFormat:@"errof :%@", error]];
    [pluginResult setKeepCallback:[NSNumber numberWithBool:YES]];
    
    [self.commandDelegate sendPluginResult:pluginResult callbackId:callbackId];
}

@end