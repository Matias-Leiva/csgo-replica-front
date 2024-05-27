import * as Keychain from 'react-native-keychain';

export const saveCredentials = async (id: string) => {
  try {
    await Keychain.setGenericPassword('airsoftSA', id);
    console.log('Credentials saved successfully!');
  } catch (error) {
    console.error('Error saving credentials:', error);
  }
};

export const retrieveCredentials = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      return credentials;
    } else {
    }
  } catch (error) {}
};

export const deleteCredentials = async () => {
  try {
    await Keychain.resetGenericPassword();
  } catch (error) {}
};
