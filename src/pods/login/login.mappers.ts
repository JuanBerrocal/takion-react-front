
import {LoginSession } from './api/login.session';
import * as sessionModel from '@/common/auth/auth.vm';

export const  mapUserSessionFromLoginSession = (loginSession: LoginSession): sessionModel.UserSession => {
    const userSession = sessionModel.createEmptyUserSession();
    userSession.email = loginSession.email;
    userSession.firstName = loginSession.firstName;
    userSession.secondName = loginSession.secondName;
    return userSession;
}