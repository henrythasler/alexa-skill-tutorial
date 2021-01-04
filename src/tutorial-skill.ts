import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response, SessionEndedRequest } from 'ask-sdk-model';

export class TutorialSkill {

    readonly LaunchRequestHandler: RequestHandler = {
        canHandle(handlerInput: HandlerInput): boolean {
            return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
        },
        handle(handlerInput: HandlerInput): Response {
            const speechText = 'Congratulations! You managed to set up your first Alexa Skill. Now go get some beer.';

            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withSimpleCard('Alexa Skill Tutorial', speechText)
                .getResponse();
        },
    };

    readonly HelpIntentHandler: RequestHandler = {
        canHandle(handlerInput: HandlerInput): boolean {
            return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
        },
        handle(handlerInput: HandlerInput): Response {
            const speechText = 'Yes, it works, believe me.';

            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withSimpleCard('Alexa Skill Tutorial', speechText)
                .getResponse();
        },
    };

    readonly CancelAndStopIntentHandler: RequestHandler = {
        canHandle(handlerInput: HandlerInput): boolean {
            return handlerInput.requestEnvelope.request.type === 'IntentRequest'
                && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                    || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
        },
        handle(handlerInput: HandlerInput): Response {
            const speechText = 'Finally... Byebye!';

            return handlerInput.responseBuilder
                .speak(speechText)
                .withSimpleCard('Alexa Skill Tutorial', speechText)
                .withShouldEndSession(true)
                .getResponse();
        },
    };

    readonly SessionEndedRequestHandler: RequestHandler = {
        canHandle(handlerInput: HandlerInput): boolean {
            return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
        },
        handle(handlerInput: HandlerInput): Response {
            console.log(`Session ended with reason: ${(handlerInput.requestEnvelope.request as SessionEndedRequest).reason}`);

            return handlerInput.responseBuilder.getResponse();
        },
    };
}
