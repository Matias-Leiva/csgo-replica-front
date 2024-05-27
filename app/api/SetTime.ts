import {retrieveCredentials} from '../utils/keychain';
import {axiosInstance} from './index';

export async function SetTime({
  hourGame,
  minutesGame,
  secondsGame,
  hourBomb,
  minutesBomb,
  secondsBomb,
}: any): Promise<any> {
  const credentials = await retrieveCredentials();
  const id = credentials?.password;
  try {
    const response = await axiosInstance.post('/start', {
      device: id,
      hourGame,
      minutesGame,
      secondsGame,
      hourBomb,
      minutesBomb,
      secondsBomb,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
