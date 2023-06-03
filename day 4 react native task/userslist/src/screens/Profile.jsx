// import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";

export default function Profile({route}) {
  // const { params } = useRoute();
  const { user } = route.params;
  return (
    <NativeBaseProvider>
      <Box
      justifyContent='center'
      alignItems='center'
      flex={1}
      >
        <Box
          shadow={"5"}
          maxW="80"
          rounded="2xl"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 12.5}>
              <Image
                source={{
                  // uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                     uri:"https://img.freepik.com/premium-vector/person-avatar-design_24877-38130.jpg?w=2000"
                }}
                alt="image"
              />
            </AspectRatio>
            {/* <Center
              bg="violet.500"
              _dark={{
                bg: "violet.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center> */}
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {user.name}
              </Heading>
              <Text
                fontSize="xs"
                _light={{
                  color: "violet.500",
                }}
                _dark={{
                  color: "violet.400",
                }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                {user.email}
              </Text>
            </Stack>
            <Text fontWeight="400">
              {user.phone}
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  fontWeight="400"
                >
                  {user.address.city}
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
  // return (
  //   <View style={styles.container}>
  //     <Image
  //       source={{
  //         uri: "https://img.freepik.com/premium-vector/person-avatar-design_24877-38130.jpg?w=2000",
  //       }}
  //       style={styles.img}
  //     ></Image>
  //     <Text style={styles.text}>Name: {user.name}</Text>
  //     <Text style={styles.text}>Email: {user.email}</Text>
  //     <Text style={styles.text}>Phone: {user.phone}</Text>
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     marginHorizontal: 20,
//     marginVertical: 180,
//     borderRadius: 20,
//     borderWidth: 1,
//     width: 350,
//     backgroundColor: "lightgray",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   img :{
//     width: 290,
//     height: 200,
//     marginTop: 10,
//     borderColor: "black",
//     borderWidth: 2,
//     borderRadius: 20,
//   }
// });
