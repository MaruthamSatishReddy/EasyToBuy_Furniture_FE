import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Feather,Ionicons } from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native"
const Welcome2 = () => {
  const navigation = useNavigation();
  return (
    <View>
     <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary)}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={SIZES.xLarge} styles={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="What Are You Looking For?"
          />
        </View>
        <View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={SIZES.large} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default Welcome2;