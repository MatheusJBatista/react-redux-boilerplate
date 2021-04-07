import * as ActionUtilities from '@utilities/action-utility'

const INCREMENT_CLICK = 'Aberto.Onboarding-INCREMENT_CLICK'
const CLEAR_CLICK = 'Aberto.Onboarding-CLEAR_CLICK'

const incrementClick = () => ActionUtilities.createAction(INCREMENT_CLICK)
const clearClicks = () => ActionUtilities.createAction(CLEAR_CLICK)

export { INCREMENT_CLICK, CLEAR_CLICK, incrementClick, clearClicks }
