import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const WordCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.word}>Onomatopeya</Text>
          <Text style={styles.type}>Descripción</Text>
        </View>
        <View style={styles.deleteBtn}>
          <Icon
            name="remove"
            size={40}
            color="grey"
            onPress={() => console.log('Delete item')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  word: {fontSize: 30},
  type: {
    fontSize: 18,
  },
  deleteBtn: {
    borderWidth: 2 
  },
});

export default WordCard;
