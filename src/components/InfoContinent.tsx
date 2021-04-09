import { Flex, Heading, HStack, Text, Tooltip, useBreakpointValue } from "@chakra-ui/react";
import { FiAlertCircle } from "react-icons/fi";

interface InfoContinentProps {
    article: string
    countriesAmount: number
    languagesAmount: number
    citiesAmount: number
}

export function InfoContinent({ article, countriesAmount, languagesAmount, citiesAmount }: InfoContinentProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex my={["2rem", "5rem"]} w="100%">
            <Flex maxWidth="1120px" spacing="4.375rem" px={["1rem", 0]} mx={["auto"]} wrap="wrap">
                <Text maxWidth="37.5rem" fontSize={["md", "2xl"]} textAlign="justify" color="#47585B">{article}</Text>

                <HStack spacing="2.625rem" ml={["0", "4.375rem"]} mt={["1rem", 0]}>
                    <Flex direction="column" textAlign="center">
                        <Heading color="#FFBA08" fontSize={["2xl", "5xl"]} fontWeight="600">{countriesAmount}</Heading>
                        <Text color="#47585B" fontSize={["lg", "2xl"]} fontWeight={["500", "600"]}>países</Text>
                    </Flex>

                    <Flex direction="column" textAlign="center">
                        <Heading color="#FFBA08" fontSize={["2xl", "5xl"]} fontWeight="600">{languagesAmount}</Heading>
                        <Text color="#47585B" fontSize={["lg", "2xl"]} fontWeight={["500", "600"]}>línguas</Text>
                    </Flex>

                    <Flex direction="column" textAlign="center">
                        <Heading color="#FFBA08" fontSize={["2xl", "5xl"]} fontWeight="600">{citiesAmount > 100 ? '+100' : citiesAmount}</Heading>
                        <Flex align="center" position="relative">
                            <Text color="#47585B" fontSize={["lg", "2xl"]} fontWeight={["500", "600"]} mr={["0", "0.5rem"]} whiteSpace="nowrap">cidades {citiesAmount > 100 ? '+100' : citiesAmount}</Text>
                            {isWideVersion && (
                                <Tooltip label="Esse continente tem mais de 100 cidades" fontSize="lg" bgColor="#47585B" hasArrow>
                                    <span>
                                        <FiAlertCircle />
                                    </span>
                                </Tooltip>
                            )}
                        </Flex>
                    </Flex>
                </HStack>
            </Flex>
        </Flex>
    )
}