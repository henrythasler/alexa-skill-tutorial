import { HandlerInput, RequestHandler } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

export class TutorialSkill {

    LaunchRequestHandler: RequestHandler = {
        canHandle(handlerInput: HandlerInput): boolean {
            return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
        },
        handle(handlerInput: HandlerInput): Response {
            const speechText = 'Welcome to the Alexa Skill Tutorial, you can say hello!';
    
            return handlerInput.responseBuilder
                .speak(speechText)
                .reprompt(speechText)
                .withSimpleCard('Hello World', speechText)
                .getResponse();
        },
    }
}
