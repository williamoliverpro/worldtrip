import Link from "next/link"

import { Flex, Icon, Image } from "@chakra-ui/react"
import { FiChevronLeft } from 'react-icons/fi'

interface HeaderProps {
    isContinentPage?: boolean
}

export function Header({ isContinentPage = false }: HeaderProps) {
        return (
            <Flex
                as="header"
                w="100%"
                h={["3.125rem", "20"]}
            >
                <Flex w="1120px" mx="auto" align="center">
                    {isContinentPage && (
                        <Link href="/">
                            <a>
                                <Icon as={FiChevronLeft} fontSize={["1.5rem","2rem"]} color="#47585B" />
                            </a>
                        </Link>
                    )}
                    <Image m="auto" src="/Logo.png" h={["1.25rem", "2.845rem"]} />
                </Flex>
            </Flex>
        )
}