import { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import Meeting from '../../components/Meeting';

const MeetingWrapper: FC = () => {
    const navigate = useNavigate();
    const [meeting, initMeeting] = useDyteClient();
    const { authToken, roomName } = useParams();

    if (!authToken || !roomName) {
        navigate('/');
        return <></>;
    }

    useEffect(() => {
        initMeeting({
            roomName,
            authToken,
            defaults: {
                audio: true,
                video: true,
            },
        });
    }, []);

    return (
        <DyteProvider value={meeting}>
            <Meeting />
        </DyteProvider>
    );
};

export default MeetingWrapper;
