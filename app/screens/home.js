import React from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import MapView, { Polygon } from "react-native-maps";
import NoticeCard from "../components/noticeCard";

const HomePage = (props) => {
  let notices = props.notices;
  let beaches = props.beaches;

  const renderNoticeItem = ({ item: notice }) => <NoticeCard notice={notice} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Beach Preview</Text>
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
                    ? "goldenrod"
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
      <Text style={styles.text}>
        Colour coded maps are for guidance only and predict likely crowding of
        promenade and beach areas today based on previous footfall, CCTV,
        weather patterns and observation. Information is then updated via a live
        observation by the Seafront Team between 11am - 5pm
      </Text>
      {!notices || notices.length === 0 ? null : ( // Do not render Notices if there are none
        <>
          <Text style={styles.title}>Notices</Text>
          <FlatList
            data={notices}
            renderItem={renderNoticeItem}
            keyExtractor={(n) => n.id.toString()}
          />
        </>
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
  text: {
    fontSize: 14,
  },
  title: {
    padding: 8,
    fontSize: 24,
    textAlign: "center",
  },
});

export default HomePage;
