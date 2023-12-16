import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, RefreshControl, ScrollView, StyleSheet, Image } from 'react-native'
import { Color } from '../../../../styles/colors'
import { BackArrowSvg, ClickArrowSvg, DollarSvg, OrderPurchaseSvg, StartEmptySvg, StartFilledSvg, TimeSvg } from '../../../../assets/icons'
import OrderImage from "../../../../assets/images/OrderImage.png"

const MyOrder = (props) => {
  const [refreshing, setRefreshing] = useState(false)
  const [data, setData] = useState([{}, {}, {}])

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.white, paddingHorizontal: 15 }}>
      <View style={{ flexDirection: "row", gap: 20, alignItems: "center", paddingTop: 10 }}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.goBack()}>
          <BackArrowSvg color={Color.heading} />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: 500, color: Color.heading }}>My Order</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={{ flex: 1, paddingVertical: 20, gap: 20 }}>
          {data?.map((value, index) => (
            <View style={[styles.boxShadow]}>
              <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                <OrderPurchaseSvg />
                <View>
                  <Text style={{ color: Color.success, fontWeight: 500, fontSize: 15 }}>Purchased</Text>
                  <Text style={{ color: Color.paragraph, fontSize: 11 }}>On Tue, 12 jan</Text>
                </View>
              </View>

              <View style={{ backgroundColor: "#80A6C51A", paddingHorizontal: 8, paddingVertical: 6, flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "space-between", borderRadius: 3 }}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                  <Image source={OrderImage} style={{ height: 70, width: 75, }} />
                  <View style={{ gap: 7 }}>
                    <Text style={{ fontSize: 15, color: Color.heading, fontWeight: 500 }}>CA/CS/CMA Foundation</Text>

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

                <View style={{}}>
                  <ClickArrowSvg />
                </View>
              </View>

              <View style={{ backgroundColor: "#80A6C51A", paddingHorizontal: 8, paddingVertical: 6, flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderRadius: 3 }}>
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
    </SafeAreaView>
  )
}

export default MyOrder

const styles = StyleSheet.create({
  boxShadow: {
    paddingHorizontal: 15, paddingVertical: 10, gap: 10,
    shadowColor: "#6089AA",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
    borderRadius: 5
  }
})