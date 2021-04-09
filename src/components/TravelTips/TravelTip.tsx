import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

interface TravelTipProps {
    name: string
    image: string
    isWideVersion: boolean
}

export function TravelTip({ isWideVersion = true, name, image }: TravelTipProps) {
    return (
        <Flex direction={["row", "column"]} align="center">
            { isWideVersion ? (
                <Image src={`/${image}`} h="5.3125rem" objectFit="contain" mb="1.5rem" />
            ) : (
                <Box h="0.5rem" w="0.5rem" borderRadius="50%" bgColor="#FFBA08" mx="0.5rem" />
            )}

            <Text color="#47585B" fontSize={["lg", "2xl"]} fontWeight={["500", "600"]} >{name}</Text>
        </Flex>
    )
}