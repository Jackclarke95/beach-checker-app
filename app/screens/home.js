import React from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import MapView, { Polygon } from "react-native-maps";

const HomePage = (props) => {
  let notices = props.notices;
  let beaches = props.beaches;

  const renderNoticeItem = ({ item: notice }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{notice.message}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        pitchEnabled={false}
        rotateEnabled={false}
        zoomEnabled={false}
        scrollEnabled={false}
        style={{ height: 150, width: "100%" }}
        initialRegion={{
          latitude: 50.7045,
          longitude: -1.82,
          latitudeDelta: 0,
          longitudeDelta: 0.28,
        }}
      >
        {beaches.map((b) => {
          return (
            <>
              <Polygon
                key={b.id.toString()}
                coordinates={b.region}
                strokeColor={
                  b.congestion === 1
                    ? "darkgreen"
                    : b.congestion === 2
                    ? "darkorange"
                    : "red"
                }
                fillColor={
                  b.congestion === 1
                    ? "#74ec849f"
                    : b.congestion === 2
                    ? "#ece5769f"
                    : "#ec74749f"
                }
              />
            </>
          );
        })}
      </MapView>
      {!notices || notices.length === 0 ? null : ( // Do not render Notices if there are none
        <FlatList
          data={notices}
          renderItem={renderNoticeItem}
          keyExtractor={(n) => n.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 8,
  },
  itemFont: {
    fontSize: 24,
  },
  item: {
    textAlign: "center",
    backgroundColor: "#ff8888",
    padding: 8,
  },
  heading: { fontSize: 36, textAlign: "center" },
  title: { fontSize: 16 },
});

export default HomePage;
