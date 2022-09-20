/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMeeting, joinMeeting } from '../../handlers/MeetingHandler';
import { AddParticipantResponse, CreateMeetingResponse } from '../../types/DyteTypes';

const Landing: FC = () => {
    const navigate = useNavigate();
    const [display, setDisplay] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [meetName, setMeetName] = useState<string>('');
    const [roomName, setRoomName] = useState<string>('');

    const displayHandler = (choice: number): void => {
        setDisplay(choice);
    };

    const joinHandler = async (e: FormEvent): Promise<AddParticipantResponse> => {
        e.preventDefault();
        const result: AddParticipantResponse = await joinMeeting({
            roomName,
            clientSpecificId: name,
            userDetails: {
                name,
            },
        });
        navigate(`/meeting/${roomName}/${result.data.authResponse.authToken}`);
        return result;
    };

    const createHandler = async (e: FormEvent): Promise<AddParticipantResponse> => {
        e.preventDefault();
        const { data }: CreateMeetingResponse = await createMeeting(meetName);
        const res: AddParticipantResponse = await joinMeeting({
            clientSpecificId: name,
            meetingId: data.meeting.id,
            userDetails: {
                name,
            },
        });
        navigate(`/meeting/${data.meeting.roomName}/${res.data.authResponse.authToken}`);
        return res;
    };

    return (
        <div className="text-white flex justify-center items-center h-screen w-screen bg-dyte-black">
            <div className="w-96 h-96 border-solid border-2 border-dyte-blue rounded-lg">
                <div className="mt-8 flex flex-row justify-center">
                    <div className="my-2 mx-8">
                        <input
                            type="radio"
                            className="mx-2"
                            name="radio"
                            value="Create"
                            onClick={() => {
                                displayHandler(0);
                            }}
                        />
                        <label>Create</label>
                    </div>
                    <div className="my-2 mx-8">
                        <input
                            type="radio"
                            className="mx-2"
                            name="radio"
                            value="Join"
                            onClick={() => {
                                displayHandler(1);
                            }}
                        />
                        <label>Join</label>
                    </div>
                </div>
                <div className="flex justify-center items-center" style={{ display: display === 0 ? 'flex' : 'none' }}>
                    <form onSubmit={createHandler}>
                        <div className="flex flex-col my-5">
                            <label>Join As*</label>
                            <input
                                type="text"
                                className="outline-none border-b-2 border-white bg-transparent hover:border-dyte-blue focus:border-dyte-blue"
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Meeting Name</label>
                            <input
                                type="text"
                                className="outline-none border-b-2 border-white bg-transparent hover:border-dyte-blue focus:border-dyte-blue"
                                onChange={(e) => {
                                    setMeetName(e.target.value);
                                }}
                            />
                        </div>
                        <input
                            type="submit"
                            className="mt-8 w-full cursor-pointer bg-dyte-blue p-2 rounded-md"
                            value="CREATE"
                        />
                    </form>
                </div>
                <div className="flex justify-center" style={{ display: display === 1 ? 'flex' : 'none' }}>
                    <form onSubmit={joinHandler}>
                        <div className="flex flex-col my-5">
                            <label>Join As*</label>
                            <input
                                type="text"
                                className="outline-none border-b-2 border-white bg-transparent hover:border-dyte-blue focus:border-dyte-blue"
                                required
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex flex-col my-5">
                            <label className="inputLabel">Room Name</label>
                            <input
                                type="text"
                                className="outline-none border-b-2 border-white bg-transparent hover:border-dyte-blue focus:border-dyte-blue"
                                required
                                onChange={(e) => {
                                    setRoomName(e.target.value);
                                }}
                            />
                        </div>
                        <input
                            type="submit"
                            className="mt-8 w-full cursor-pointer bg-dyte-blue p-2 rounded-md"
                            value="JOIN"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Landing;
