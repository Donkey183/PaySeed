import React, { Component, } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import { FlatList } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  list : {
    flexGrow:1,
    backgroundColor:'red',
    width:'100%'
  },
  itemContainer: {
    backgroundColor:'blue',
    height:44,
    display:'flex',
    flexDirection:'row'
  },
  itemTitle : {
    width:"100%",
    flexGrow:1,
    textAlign:'center',
    backgroundColor:'yellow'
  }
});
export default class TransactionDetails extends Component {
  static navigationOptions = {
    headerTitle: '交易明细',
  };

  constructor(props) {
    super(props)
    this.state = {
      itemList : [{title:'title text',key:'item1'}]
    }
  }
  handleItemClick() {
    this.state.itemList.push(this.state.itemList[0])
    this.setState(this.state)
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList  style={styles.list}
        data={this.state.itemList}
        renderItem={
          ({item,index,separators}) => (
            <TouchableHighlight onPress={()=>{this.handleItemClick()}}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
            </TouchableHighlight>

          )
        }/>
      </View>
    );
  }
}

