import { HandlerInput, RequestHandler, SkillBuilders } from 'ask-sdk-core';
import { Response } from 'ask-sdk-model';

const LaunchRequestHandler: RequestHandler = {
    canHandle(handlerInput: HandlerInput): boolean {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput: HandlerInput): Response {
        const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .withSimpleCard('Hello World', speechText)
            .getResponse();
    },
};

export const handler = SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
    )
    .addErrorHandlers()
    .lambda();
