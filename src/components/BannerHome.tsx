import { Flex, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

export function BannerHome() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex w="100%" h={["11rem", "23rem"]} position={["static", "relative"]} pb={["0", "2rem"]} align="center">
            <Image src="/bannerbackground.png" w="100%" h="100%" />
            <Flex position="absolute" align="center" px={["1.5rem", "8.75rem"]} justify="space-around" w="100%">
                <VStack color="white" align="flex-start">
                    <Text fontSize={["xl", "4xl"]}>5 Continentes,<br /> infinitas possibilidades.</Text>
                    <Text color="#DADADA" fontSize={["sm", "xl"]}>Chegou a hora de tirar do papel a viagem que você <br /> sempre sonhou.</Text>
                </VStack>
                { isWideVersion && <Image src="/Airplane.png" mb="-6rem" /> }
            </Flex>
        </Flex>
    )
}