import { Box, Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import { TravelTip } from './TravelTip'

export function TravelTips() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    if (isWideVersion) {
        return (
            <Flex w="100%" mx="auto" my="8.75rem">
                <HStack mx="auto" spacing="130">
                    <TravelTip name="vida noturna" image="drink.png" isWideVersion={isWideVersion} />
                    <TravelTip name="praia" image="surf.png" isWideVersion={isWideVersion} />
                    <TravelTip name="moderno" image="building.png" isWideVersion={isWideVersion} />
                    <TravelTip name="clássico" image="museum.png" isWideVersion={isWideVersion} />
                    <TravelTip name="e mais..." image="group.png" isWideVersion={isWideVersion} />
                </HStack>
            </Flex>
        )
    }

    return (
        <Box w="100%" my="2.25rem">
            <Flex wrap="wrap" align="center" gap="70px" justify="center" px="50px">
                <TravelTip name="vida noturna" image="drink.png" isWideVersion={isWideVersion} />
                <TravelTip name="praia" image="surf.png" isWideVersion={isWideVersion} />
                <TravelTip name="moderno" image="building.png" isWideVersion={isWideVersion} />
                <TravelTip name="clássico" image="museum.png" isWideVersion={isWideVersion} />
                <TravelTip name="e mais..." image="group.png" isWideVersion={isWideVersion} />
            </Flex>
        </Box >
    )
}