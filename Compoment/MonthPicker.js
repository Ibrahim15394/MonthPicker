import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import icons from '../constans/icons';
import {addMonths, format, subMonths} from 'date-fns';

// function onChange(newDate) {
//     return;
  //}


function MonthPicker({date, onChange}) {
 

  const monthPrev = () => {
    const newDate = subMonths(date, 1);
    onChange(newDate);
    console.log('newDate' ,newDate);
  };
  const monthNext = () => {
    const newDate = addMonths(date, +1);
    onChange(newDate);
    console.log('newDate' ,newDate);
  };

  return (
    <View style={styles.row}>
      <Pressable onPress={monthNext}>
        <Image source={icons.arrowLeft} style={{height: 20, width: 20,}} />
      </Pressable>
      <Text style={styles.date}>{format(date, 'MMMM yyyy')}</Text>
      <Pressable onPress={monthPrev}>
        <Image source={icons.arrowRight} style={{height: 20, width: 20}} />
      </Pressable>
    </View>
  );
}

export default MonthPicker;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    backgroundColor: '#eee',
    height: 50
  },
  date:{
    fontSize: 18,
    fontWeight: 'bold',
    color:"black"
  },
});
