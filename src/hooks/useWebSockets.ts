import useWebSocket from 'react-use-websocket';
import { environmentVariables } from '../env/environmentVariables';
import { useEffect } from 'react';

export const useWebSockets = () => {
  const { lastJsonMessage: messageOne } = useWebSocket(
    environmentVariables.webSocketApiUrl,
    {
      heartbeat: {
        message: 'ping',
        returnMessage: 'pong',
        timeout: 120000,
        interval: 60000,
      },
    }
  );

  const { lastJsonMessage: messageTwo } = useWebSocket(
    environmentVariables.baseApiUrl,
    {
      heartbeat: {
        message: 'ping',
        returnMessage: 'pong',
        timeout: 120000,
        interval: 60000,
      },
    }
  );

  useEffect(() => {
    const firstEvent = messageOne;
    const secondEvent = messageTwo;

    console.log(firstEvent);
    console.log(secondEvent);
  });
};
