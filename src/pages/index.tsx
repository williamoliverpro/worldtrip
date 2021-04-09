import { Divider, Flex, Text } from "@chakra-ui/react";

import { BannerHome } from "../components/BannerHome";
import { Slider } from "../components/Slider";
import { Header } from "../components/Header";
import { TravelTips } from "../components/TravelTips";

export default function Home() {
  return (
    <>
      <Header />
      <BannerHome />
      <TravelTips />
      <Divider bg="#47585B" w={["3.75rem", "5.625rem"]} h={["0.1rem", "1"]} mx="auto" />
      <Flex w="100%" my={["1.25rem", "3.25rem"]}>
        <Text mx="auto" fontSize={["md", "2xl", "3xl"]} color="#47585B" fontWeight="500" textAlign="center">Vamos nessa?<br />Então escolha seu continente</Text>
      </Flex>
      <Slider />
    </>
  )
}