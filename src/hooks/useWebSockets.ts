import useWebSocket from 'react-use-websocket';
import { environmentVariables } from '../env/environmentVariables';
import { useEffect } from 'react';

export const useWebSockets = () => {
  const { lastJsonMessage } = useWebSocket(environmentVariables.baseApiUrl, {
    heartbeat: {
      message: 'ping',
      returnMessage: 'pong',
      timeout: 120000,
      interval: 60000,
    },
  });

  useEffect(() => {
    const event = lastJsonMessage;

    console.log(event);
  });
};
