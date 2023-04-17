import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useState} from 'react';
import MonthPicker from './Compoment/MonthPicker';

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <MonthPicker date={date} onChange={(newDate) =>setDate(newDate)} />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
