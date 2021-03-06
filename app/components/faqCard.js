import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colours from "../styles/colours";

/**
 * Renders a card displaying a single FAQ and its answer
 *
 * @param {*} { faq } the question data to render as a card
 * @return {*} a card displaying a single FAQ and its answer
 */
const FaqCard = ({ faq }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {faq.id}. {faq.question}
      </Text>
      <Text style={styles.answer}>{faq.answer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: Colours.lightGrey,
    borderColor: Colours.grey,
    borderWidth: 2,
  },
  question: { fontSize: 22, flexGrow: 1, fontWeight: "bold" },
  answer: { fontSize: 18, flexGrow: 1, textAlign: "left" },
});

export default FaqCard;
