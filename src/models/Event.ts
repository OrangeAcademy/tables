import { MeetingAgenda } from "store/NewMeeting/newMeeting"

export interface IEvent{
    id?:string,
    alias?: string,
    attendees: Array<string>
    body?: string,
    buildingId?: number
    buildingName?: string,
    changeKey?: string,
    dayNames?: Array<string>,
    elementId?: number | null,
    end: string,
    externalUser?: boolean,
    floorNumber?: number,
    hasEnd?: boolean,
    insertedAt?: string,
    itemId?: string,
    location?: string,
    mailOfReservationInitiator?: string,
    meetingProviderData?: IMeetingProviderData,
    meetingType?: string,
    numberOfOccurrences?: number,
    occurrencesEnd?: string,
    officeName?: string,
    presenter?: string,
    presenters: Array<IPresenters>,
    reservationId?: number,
    reservationStatus?: string,
    start: string,
    subject: string,
    title?: string,
    topic?: string
    userEmail?: string
    userFullName?: string,
    agenda: MeetingAgenda[],
    userOofSettingsData?: IUserOofSettingsData
}

export interface IMeetingProviderData{
    authorizationCode: string,
    generateMeetingJoinUrl: boolean,
    meetingId: number,
    meetingJoinUrl: string,
    meetingPassCode: string,
    meetingUrlProvider: string,
}

export interface IPresenters {
    presenter: string,
    topic: string
}

export interface IUserOofSettingsData {
    allowExternal: string,
    endTime: string,
    externalMessage: string,
    externalMessageLang: string,
    internalMessage: string,
    internalMessageLang: string,
    isOutOfOffice: boolean,
    startTime: string
}
