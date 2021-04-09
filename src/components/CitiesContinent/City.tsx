import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface cityProps {
    cityImage: string
    cityName: string
    country: string
    countryImage: string
}

export function City({ cityImage, cityName, country, countryImage }: cityProps) {
    return (
        <Flex h="17.4375rem" w="16rem" direction="column" mx={["auto", "0"]}>
            <Image src={cityImage} h="11rem" w="100%" objectFit="cover" borderTopRadius="4px" />
            <Flex align="center" justify="space-between" px="1.5rem" border="1px solid rgba(255, 186, 8, 0.5)" borderTop="none" borderBottomRadius="4px" w="100%" py="1.125rem">
                <Stack spacing="12px">
                    <Heading fontSize="xl" fontWeight="600" color="#47585B">{cityName}</Heading>
                    <Text fontSize="md" fontWeight="500" color="#999999">{country}</Text>
                </Stack>
                <Image src={countryImage} w="1.875rem" h="1.875rem" borderRadius="50%" />
            </Flex>
        </Flex>
    )
}