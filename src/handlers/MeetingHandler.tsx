import { AddParticipantOptionsBase, AddParticipantResponse, CreateMeetingResponse } from '../types/DyteTypes';
import API from './ApiHandler';

export const createMeeting = async (title: string) => {
    const { data } = await API.post<CreateMeetingResponse>('/meeting/create', { title });
    return data;
};

export const joinMeeting = async (requestOptions: AddParticipantOptionsBase) => {
    const { data } = await API.post<AddParticipantResponse>('/participant/create', requestOptions);
    return data;
};
