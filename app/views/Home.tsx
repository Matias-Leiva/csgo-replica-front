import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from '../api/Connect';
import {saveCredentials} from '../utils/keychain';
import {SetTime} from '../api/SetTime';

const Home = () => {
  const [connection, setConnection] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [hoursGame, setHoursGame] = useState('');
  const [minutesGame, setMinutesGame] = useState('');
  const [secondsGame, setSecondsGame] = useState('');
  const [hourBomb, setHourBomb] = useState('');
  const [minutesBomb, setMinutesBomb] = useState('');
  const [secondsBomb, setSecondsBomb] = useState('');

  const handleTextChange = (text: string, onChange: any) => {
    text.length == 0
      ? onChange('00')
      : text.length == 1
      ? onChange('0' + text)
      : onChange(text);
  };

  const handleConnect = async () => {
    setMsg('');
    setLoading(true);
    try {
      const responseConnect = await connect();
      if (responseConnect.connected == 'true') {
        setConnection(true);
      }
    } catch (error: any) {
      setMsg(error?.msg || 'Something Wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleStartGame = async () => {
    setMsg('');
    setLoading(true);
    try {
      const responseConnect = await SetTime({
        hoursGame,
        minutesGame,
        secondsGame,
        hourBomb,
        minutesBomb,
        secondsBomb,
      });
      if (responseConnect) {
        setMsg('Game had started');
        setConnection(false);
      }
    } catch (error: any) {
      setMsg(error?.msg || 'Something Wrong');
      setConnection(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    saveCredentials(Date.now().toString().slice(-4));
  }, []);

  return (
    <View
      style={{marginVertical: 20, marginHorizontal: 5, alignItems: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Csgo Bomb Replica</Text>
      <Text style={{fontSize: 20}}>Server Version</Text>
      <View style={{flexDirection: 'row', marginVertical: 20}}>
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 15,
            backgroundColor: connection ? 'green' : 'red',
          }}></View>
        <Text style={{alignSelf: 'center'}}>
          {connection ? ' Server Connected' : ' Server Disconnected'}
        </Text>
      </View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {!connection && (
            <TouchableOpacity
              onPress={handleConnect}
              style={{
                marginBottom: 20,
                borderRadius: 8,
                backgroundColor: '#a2a433',
                paddingVertical: 5,
                paddingHorizontal: 15,
              }}>
              <Text>Connect</Text>
            </TouchableOpacity>
          )}

          {connection && (
            <View style={{alignItems: 'center'}}>
              <Text>Set Game Time</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <TextInput
                  style={styles.input}
                  placeholder="00"
                  onChangeText={setHoursGame}
                  value={hoursGame}
                  keyboardType="numeric"
                  maxLength={2}
                  onEndEditing={() => handleTextChange(hoursGame, setHoursGame)}
                />
                <Text style={{fontSize: 24}}>:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="00"
                  onChangeText={setMinutesGame}
                  value={minutesGame}
                  keyboardType="numeric"
                  maxLength={2}
                  onEndEditing={() =>
                    handleTextChange(minutesGame, setMinutesGame)
                  }
                />
                <Text style={{fontSize: 24}}>:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="00"
                  onChangeText={setSecondsGame}
                  value={secondsGame}
                  keyboardType="numeric"
                  maxLength={2}
                  onEndEditing={() =>
                    handleTextChange(secondsGame, setSecondsGame)
                  }
                />
              </View>
              <Text>Set Bomb Time</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TextInput
                  style={styles.input}
                  placeholder="00"
                  onChangeText={setHourBomb}
                  value={hourBomb}
                  keyboardType="numeric"
                  maxLength={2}
                  onEndEditing={() => handleTextChange(hourBomb, setHourBomb)}
                />
                <Text style={{fontSize: 24}}>:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="00"
                  onChangeText={setMinutesBomb}
                  value={minutesBomb}
                  keyboardType="numeric"
                  maxLength={2}
                  onEndEditing={() =>
                    handleTextChange(minutesBomb, setMinutesBomb)
                  }
                />
                <Text style={{fontSize: 24}}>:</Text>
                <TextInput
                  style={styles.input}
                  placeholder="00"
                  onChangeText={setSecondsBomb}
                  value={secondsBomb}
                  keyboardType="numeric"
                  maxLength={2}
                  onEndEditing={() =>
                    handleTextChange(secondsBomb, setSecondsBomb)
                  }
                />
              </View>
              <TouchableOpacity
                onPress={handleStartGame}
                style={{
                  marginVertical: 20,
                  borderRadius: 8,
                  backgroundColor: '#a2a433',
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}>
                <Text style={{color: 'black'}}>Start Game</Text>
              </TouchableOpacity>
            </View>
          )}
          <Text>{msg}</Text>
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 12,
    marginHorizontal: 2,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: 40,
  },
});
