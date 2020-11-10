import React from "react";
import {  FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import FaqCard from "../components/faqCard";

const FaqPage = (props) => {
  let faqs = props.faqs;

  const renderFaqItem = ({ item: faq }) => <FaqCard faq={faq} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      <FlatList
        data={faqs}
        renderItem={renderFaqItem}
        keyExtractor={(f) => f.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: { fontSize: 36, textAlign: "center" },
});

export default FaqPage;
