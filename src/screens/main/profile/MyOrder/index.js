import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView, StyleSheet, Image } from 'react-native'
import { Color } from '../../../../styles/colors'
import { BackArrowSvg, ClickArrowSvg, DollarSvg, OrderPurchaseSvg, OrderRefundSvg, StartEmptySvg, StartFilledSvg, TimeSvg } from '../../../../assets/icons'
import OrderImage from "../../../../assets/images/OrderImage.png"
import RefundDetail from '../../../../components/modals/RefundDetail'

const MyOrder = (props) => {
  const [refreshing, setRefreshing] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [data, setData] = useState([{ id: 1, title: "CA/CS/CMA Foudation", tag: "purchase" }, { id: 2, title: "IIT-JEE Advance", tag: "refund" }, { id: 3, title: "Physics 12 th class basic", tag: "purchase" }])

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingVertical: 15, paddingHorizontal: 15 }}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.goBack()}>
          <BackArrowSvg color={Color.heading} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: 500, color: Color.heading }}>My Order</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={{ flex: 1, paddingBottom: 20, gap: 25, paddingHorizontal: 15 }}>
          {data?.map((value, index) => (
            <View key={index} style={[styles.boxShadow]}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                {value?.tag && value?.tag === "refund" ?
                  <View style={{ flexDirection: "row", gap: 10, alignItems: "flex-start" }}>
                    <OrderRefundSvg />
                    <View>
                      <Text style={{ color: Color.heading, fontWeight: 500, fontSize: 15 }}>Refund Credited</Text>
                      <Text style={{ color: Color.paragraph, fontSize: 11 }}>Refund Credited on 2nd Dec</Text>
                      <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <Text style={{ color: Color.primary, fontSize: 11 }}>View Refund details</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  :
                  <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <OrderPurchaseSvg />
                    <View>
                      <Text style={{ color: Color.success, fontWeight: 500, fontSize: 15 }}>Purchased</Text>
                      <Text style={{ color: Color.paragraph, fontSize: 11 }}>On Tue, 12 jan</Text>
                    </View>
                  </View>
                }

                <TouchableOpacity onPress={() => props.navigation.navigate("OrderDetail", value)} activeOpacity={0.6}>
                  <Text style={{ fontSize: 12, color: Color.primary, borderBottomWidth: 1, borderBottomColor: Color.primary, fontWeight: 500 }}>View Detail</Text>
                </TouchableOpacity>
              </View>

              <View style={{ backgroundColor: "#80A6C51A", padding: 10, flexDirection: "row", alignItems: "center", gap: 20, borderRadius: 3 }}>
                <Image source={OrderImage} style={{ height: 70, width: 75, }} />
                <View style={{ gap: 7 }}>
                  <Text style={{ fontSize: 15, color: Color.heading, fontWeight: 500 }}>{value?.title}</Text>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TimeSvg />
                    <Text style={{ fontSize: 12, color: Color.paragraph }}>34 Lessons</Text>
                  </View>

                  <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <TimeSvg />
                    <Text style={{ fontSize: 12, color: Color.paragraph }}>34 Lessons</Text>
                  </View>
                </View>
              </View>

              <View style={{ backgroundColor: "#80A6C51A", paddingHorizontal: 10, paddingVertical: 8, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 3 }}>
                <View style={{ flexDirection: "row", gap: 7 }}>
                  <StartFilledSvg />
                  <StartEmptySvg />
                  <StartEmptySvg />
                  <StartEmptySvg />
                  <StartEmptySvg />
                </View>

                <Text style={{ color: Color.paragraph, fontSize: 13 }}>Tell us more</Text>
              </View>

              <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                <DollarSvg />
                <Text style={{ color: Color.paragraph }}>3 super coin collected</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal */}
      <RefundDetail modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  )
}

export default MyOrder

const styles = StyleSheet.create({
  boxShadow: {
    paddingHorizontal: 15, paddingVertical: 10, gap: 10,
    shadowColor: "#6089AA",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 10,
    borderRadius: 5,
    backgroundColor: Color.white
  }
})