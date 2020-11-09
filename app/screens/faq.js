import React from "react";
import { View, FlatList, StyleSheet, Text, SafeAreaView } from "react-native";

const FaqPage = (props) => {
  let faqs = props.faqs;

  const renderFaqItem = ({ item: faq }) => (
    <View style={styles.item}>
      <Text style={styles.question}>
        {faq.id}. {faq.question}
      </Text>
      <Text style={styles.answer}>{faq.answer}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
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
  itemFont: {
    fontSize: 24,
  },
  item: {
    textAlign: "center",
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  heading: { fontSize: 36, textAlign: "center" },
  question: { fontSize: 22, flexGrow: 1, fontWeight: "bold" },
  answer: { fontSize: 18, flexGrow: 1, textAlign: "left" },
});

export default FaqPage;
