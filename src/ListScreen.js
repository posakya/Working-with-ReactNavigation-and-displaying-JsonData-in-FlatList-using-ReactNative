import React from 'react';
import { AppRegistry, ActivityIndicator, FlatList, StyleSheet, Text, View, Alert} from 'react-native';

import { StackNavigator } from 'react-navigation'; 

export default class ListScreen extends React.Component {


  static navigationOptions = ({navigation}) => {

    const { params } = navigation.state;


    return {
     title: params ? params.ownParam : 'A nested details screen',
   }


 };
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  GetFlatListItem (fruit_name) {
   
  Alert.alert(fruit_name);

  }


  componentDidMount() {

    return fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

      <View style={styles.ListContainer}>

        <FlatList

          data={ this.state.dataSource }
          
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Text style={styles.FlatListItemStyle} onPress={this.GetFlatListItem.bind(this, item.fruit_name)} > {item.fruit_name} </Text>}

          keyExtractor={(item, index) => index.toString()}
        />

      </View>
    );
  }
}



const styles = StyleSheet.create({

  
ListContainer :{

justifyContent: 'center',
flex:1,
marginLeft: 10,
marginRight: 10

},

FlatListItemStyle: {
    paddingTop : 12,
    paddingBottom : 10,
    paddingLeft : 2,
    paddingRight : 5,
    fontSize: 18,
    height: 44,
  },

  

});