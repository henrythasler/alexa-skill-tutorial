import { SkillBuilders } from 'ask-sdk-core';
import { TutorialSkill } from './tutorial-skill';

const tutorialSkill = new TutorialSkill();

export const handler = SkillBuilders.custom()
    .addRequestHandlers(
        tutorialSkill.LaunchRequestHandler,
    )
    .addErrorHandlers()
    .lambda();
