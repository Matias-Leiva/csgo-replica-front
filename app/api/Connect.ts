import {retrieveCredentials} from '../utils/keychain';
import {axiosInstance} from './index';

export async function connect(): Promise<any> {
  const credentials = await retrieveCredentials();
  const id = credentials?.password;
  try {
    const response = await axiosInstance.post('/connect', {
      device: id,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
