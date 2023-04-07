import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./src/screens";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Home />
    </>
  );
}
