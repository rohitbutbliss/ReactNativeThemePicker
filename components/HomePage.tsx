import React, { FC, useContext, useState } from "react";

import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import useTheme from "@/hooks/useTheme";
import Themes, { ColorModeInterface } from "@/constants/ColorScheme";
import ThemeContext from "@/contexts/ThemeContext";

const HomePage: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const styles = useStyles(theme);
  const { tintSelected } = useTheme(theme);
  const [numsCol, setNumsCol] = useState(2);
  const [searchText, setSearchText] = useState("");
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={[styles.container]}>
        <TextInput
          style={styles.input}
          placeholder={"Search"}
          placeholderTextColor={tintSelected}
          value={searchText}
          onChangeText={setSearchText}
        />
        <Text style={[styles.text, { padding: 20 }]}>Hey, {searchText}</Text>
        <View>
          <FlatList
            key={numsCol.toString()}
            numColumns={numsCol}
            data={Object.keys(Themes).filter((item) => item !== theme)}
            renderItem={({ item }) => {
              return (
                <View style={[{ padding: 10, width: `${100 / numsCol}%` }]}>
                  <Pressable onPress={() => setTheme(item)}>
                    <View style={[styles.themeView]}>
                      <Text style={[styles.text, { textAlign: "center" }]}>
                        {item[0].toUpperCase() + item.slice(1)}
                      </Text>
                    </View>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
      </View>
      <StatusBar barStyle={"default"} />
    </SafeAreaView>
  );
};

const useStyles = (mode: keyof ColorModeInterface) => {
  const { background, text, tint } = useTheme(mode);

  const styles = StyleSheet.create({
    safeContainer: {
      flex: 1,
      backgroundColor: background,
    },
    container: {
      padding: 10,
    },
    text: {
      color: text,
      fontSize: 20,
    },
    input: {
      backgroundColor: tint,
      padding: 20,
      borderRadius: 40,
      fontSize: 20,
      color: text,
    },
    themeView: {
      padding: 10,
      borderColor: text,
      borderWidth: 2,
      borderRadius: 10,
    },
  });

  return styles;
};

export default HomePage;
