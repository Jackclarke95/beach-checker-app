import React from "react";
import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import FaqCard from "../components/faqCard";
import Colours from "../styles/colours";

/**
 * Renders a list of frequntly asked questions
 *
 * @param {*} { route } navigation route containing FAQ data
 * @return {*} a screen displaying a list of frequently asked question
 */
const FaqPage = ({ route }) => {
  const faqs = route.params.faqs;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      <FlatList
        data={faqs}
        renderItem={({ item: faq }) => <FaqCard faq={faq} />}
        keyExtractor={(f) => f.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.white,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: { fontSize: 36, textAlign: "center" },
});

export default FaqPage;
