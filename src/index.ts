import { SkillBuilders } from 'ask-sdk-core';
import { TutorialSkill } from './tutorial-skill';

const tutorialSkill = new TutorialSkill();

export const handler = SkillBuilders.custom()
    .addRequestHandlers(
        tutorialSkill.LaunchRequestHandler,
        tutorialSkill.HelpIntentHandler,
        tutorialSkill.CancelAndStopIntentHandler,
        tutorialSkill.SessionEndedRequestHandler
    )
    .addErrorHandlers()
    .lambda();
