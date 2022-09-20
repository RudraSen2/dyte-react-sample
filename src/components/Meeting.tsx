import { useDyteMeeting } from '@dytesdk/react-web-core';
import { DyteMeeting } from '@dytesdk/react-ui-kit';

// need to implement middleware here
const Meeting = () => {
    const { meeting } = useDyteMeeting();
    if (!meeting) {
        return <></>;
    }
    return (
        <div className="w-screen h-screen">
            <DyteMeeting mode="fill" meeting={meeting} showSetupScreen={true} />
        </div>
    );
};

export default Meeting;
