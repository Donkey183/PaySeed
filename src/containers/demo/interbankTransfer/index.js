import React, { Component, } from 'react';
import { SectionList, } from 'react-native';
import { StyleSheet, Text, TouchableHighlight, View, } from 'react-native';
import { Switch, TextInput, } from 'react-native-gesture-handler';

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
  list: {
    flexGrow: 1,
    backgroundColor: '#efefef',
    width: '100%',
  },
  sectionContainer: {
    backgroundColor: '#efefef',
    paddingLeft: 20,
    height: 20,
  },
  sectionTitle: {
    fontSize: 32,
    textAlign: 'left',
    color: '#080808',
    height: 20,
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  itemTitle: {
    textAlign: 'left',
    marginLeft: 20,
    backgroundColor: 'white',
  },
});
export default class InterbankTransfer extends Component {
  static navigationOptions = {
    headerTitle: '跨行转账',
  };

  constructor(props) {
    super(props);
    this.state = {
      pageListConfig: [
        {
          title: '汇款方信息',
          data: [
            {
              title: "付款账户",
              showArrow: false,
            },
            {
              title: "币种",
              showArrow: true,
            },
            {
              title: "账户余额",
              showArrow: false,
            },
            {
              title: "汇款金额",
              showArrow: false,
            },
            {
              title: '汇款附言',
              showArrow: false,
              placeholder: '请输入汇款附言（英文大写）',
            },
            {
              title: '汇款用途',
              placeholder: '请选择',
              showArrow: true,
            },
          ],
        },
        {
          title: '收款方信息',
          data: [
            {
              title: '收款方类型',
              showArrow: true,
            },
            {
              title: '收款人姓名',
              showArrow: false,
              tailIcon: '',
            },
            {
              title: '收款人账号',
            },
            {
              title: '收款人国家/地区',
              showArrow: true,
            },
            {
              title: '收款人地址',
              placeholder: '请输入字母（大写），数字及符号',
            },
            {
              title: '收款银行SWIFT码',
              placeholder: '请输入8或11位SWIFT码',
            },
            {
              title: '收款银行国家',
              showArrow: true,
            },
            {
              title: '收款银行名称(英文)',
              placeholder: '请输入收款银行名称',
            },
            {
              title: '收款银行地址',
              placeholder: '请输入收款银行地址(英文大写)',
            },
            {
              title: '短信通知',
              placeholder: '可不填',
            },
            {
              type: 'tip',
              title: '资金从我行汇出成功后,将通知收款方',
            },
            {
              spaceHeight: 10,
              title: '收款方是和否有代理行？',
              showSwitch: true,
              switchChanged: (swithIsOn) => {
                console.log('收款方 ', swithIsOn ? '有' : '没有', '代理');
              },
            },
            {
              spaceHeight: 10,
              type: 'submit',
              title: '下一步',
              onclick: () => {
                console.log('下一步 被点击');
              },
            },
          ],
        },
      ],
    };
  }
  handleItemClick() {
    this.state.itemList.push(this.state.itemList[0]);
    this.setState(this.state);
  }
  renderItem(item) {
    let body;
    if (item.type && item.type == 'submit') {
      body = (
        <TouchableHighlight onPress={() => {
          this.props.navigation.navigate('Home');
        }}
        >
          <View style={{ borderRadius: 5, backgroundColor: '#00c6ff', flexGrow: 1, margin: 5, height: 40, }}>
            <Text style={{ width: '100%', color: '#FFFFFF', textAlign: 'center', fontSize: 20, lineHeight: 40, }}>{item.title}</Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      body = (<View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        {
          (item.showSwitch && item.showSwitch == true) ?
            <Switch
              style={{ marginRight: 20, }}
              onChange={(event) => {
                item.switchChanged(event.value);
              }}
            /> :
            <TextInput
              allowFontScaling={false}
              onChangeText={(confirmerOpinion) => {
                console.log('confirmerOpinion is ', confirmerOpinion);
              }}
              autoCapitalize={"none"}
              autoCorrect={false}
              multiline
              placeholderTextColor={'#BBBBBBFF'}
              placeholder={item.placeholder}
              style={{ textAlign: 'right', flexGrow: 1, fontSize: 16, marginHorizontal: 15, }}
            />
        }
      </View>);
    }
    return (
      <View style={{ display: 'flex', flexDirection: 'column', }}>
        {body}
        <View style={{ width: '100%', backgroundColor: '#efefef', height: 1, }} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          style={styles.list}
          keyboardDismissMode="on-drag"
          sections={this.state.pageListConfig}
          keyExtractor={(item, index) => item + index}
          initialNumToRender={10}
          renderItem={
            ({ item, }) => (
              this.renderItem(item)
            )
          }
          renderSectionHeader={({ section: { title, }, }) => {
            <Text style={styles.sectionTitle}>{title}</Text>;
          }
          }
        />

      </View>
    );
  }
}

