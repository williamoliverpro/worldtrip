import { Flex, Heading } from "@chakra-ui/layout";

interface BannerContinentProps {
    title: string
    bannerURL: string
}

export function BannerContinent({ title, bannerURL }: BannerContinentProps) {
    return (
        <Flex w="100%" h={["9.375rem", "31.25rem"]} bgImage={`url(${bannerURL})`} backgroundRepeat="no-repeat" backgroundSize="cover" bgPosition="center">
            <Flex maxWidth={["100%", "72.5rem"]} mx="auto" w="100%" align={["center", "flex-end"]} justify={["center", "flex-start"]}>
                <Heading fontSize={["3xl", "5xl"]} fontWeight="600" color="#F5F8FA" px={["0", "2rem"]} mb={["0", "3.6875rem"]}>{title}</Heading>
            </Flex>
        </Flex>
    )
}