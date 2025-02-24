import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { environmentVariables } from '../env/environmentVariables';

export const useWebSockets = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(environmentVariables.webSocketApiUrl, {
      transports: ['websocket'],
    });

    setSocket(newSocket);

    newSocket.on('connect', () => console.log('Connected!'));
    newSocket.on('message', (data: unknown) => console.log('Received: ', data));

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return {
    sendMessageOne: (event: string, data?: unknown) =>
      socket?.emit(event, data),
  };
};
