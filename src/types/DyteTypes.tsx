interface Meeting {
    id: string;
    title: string;
    roomName: string;
    status: string;
    createdAt: string;
    recordOnStart: boolean;
    liveStreamOnStart: boolean;
    participants: [];
}

interface APIResponse {
    success: boolean;
    message?: string;
    error?: string;
}
export interface CreateMeetingResponse extends APIResponse {
    data: {
        meeting: Meeting;
    };
}

export interface UserDetails {
    name: string;
    picture?: string;
}

export interface AddParticipantOptionsBase {
    meetingId?: string;
    roomName?: string;
    clientSpecificId?: string;
    userDetails?: UserDetails;
}

export interface AddParticipantResponse extends APIResponse {
    data: {
        authResponse: {
            userAdded: boolean;
            authToken: string;
        };
    };
}

export interface FetchMeetingResponse extends APIResponse {
    data: {
        meeting: {
            id: string;
            title: string;
            roomName: string;
            status: string;
            createdAt: string;
        };
    };
}
