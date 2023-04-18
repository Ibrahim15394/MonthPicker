import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import {useState} from 'react';
import MonthPicker from './Compoment/MonthPicker';
import {addMonths, isSameDay, isSameMonth} from 'date-fns';
import icons from './constans/icons';

const renderItemNotFinger = ({item}) => {
  return (
    
          <View style={styles.container} >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={[styles.txt, {marginBottom: 10}]}>اليوم :</Text>
                <Text> {item?.day}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <Text style={styles.txt}>الحضور :</Text>
                <Text> {item?.title}</Text>
              </View>
            </View>
    
            <View style={{alignItems: 'flex-start'}}>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                <Text style={[styles.txt, {marginBottom: 10}]}>التاريخ :</Text>
                <Text> {item?.date}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'baseline',
                }}>
                <Text style={styles.txt}>الانصراف :</Text>
                <Text> {item?.title}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.7,
              width: '100%',
              borderColor: '#c3dbca',
              marginTop: 10,
            }}
          />
        </View>
      
    
   
  );
};

const emptyView = () => {
  return (
    <View style={{marginTop: 200}}>
      <Image
        source={icons.monthCalender}
        style={{width: 100, height: 100, alignSelf: 'center'}}
      />
      <Text style={{...styles?.txt, textAlign: 'center'}}>
        لا يوجد ايام لم يتم توقيع حضور او انصراف
      </Text>
    </View>
  );
};

const DATA = [
  {
    id: '1',
    title: 'لايوجد',
    day: 'الجمعة',
    date: addMonths(new Date(), +1),
  },
  {
    id: '2',
    title: 'لايوجد',
    day: 'السبت',
    date: addMonths(new Date(), +2),
  },
  {
    id: '3',
    title: 'لايوجد',
    day: 'الاربعاء',
    date: addMonths(new Date(), +3),
  },
  {
    id: '4',
    title: 'لايوجد',
    day: 'الجمعة',
    date: addMonths(new Date(), +2),
  },
  {
    id: '5',
    title: 'لايوجد',
    day: 'السبت',
    date: addMonths(new Date(), 3),
  },
  {
    id: '6',
    title: 'لايوجد',
    day: 'الاربعاء',
    date: addMonths(new Date(), 4),
  },
];

function App() {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState(DATA);

  const dataMap = data.map((col) => isSameMonth(col.date, date));
  const filteredData = dataMap.filter(col => isSameMonth(col.dataMap, dataMap));
console.log('filteredData', filteredData);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <MonthPicker date={date} onChange={newDate => setDate(newDate)} />
        }
        data={filteredData}
        renderItem={renderItemNotFinger}
        keyExtractor={item => `${item.id}`}
        //ListEmptyComponent={emptyView}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  txt: {
    fontFamily: 'Cairo-Bold',
    color: '#2d93ba',
    fontSize: 14,
    textAlign: 'center',

    // textAlign: 'center'
  },
  txt1: {
    fontFamily: 'Cairo-SemiBold',
    color: '#eee',
    fontSize: 16,
    textAlign: 'center',
    textAlign: 'left',
  },
  txt2: {
    fontFamily: 'Cairo-SemiBold',
    // color: '#eee',
    fontSize: 12,
    textAlign: 'left',
    // textAlign: 'center'
  },
  img: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default App;
