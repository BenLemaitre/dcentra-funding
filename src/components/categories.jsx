import Image from 'next/image'
import { Stack, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import CategoryButton from './category-button'

// category icons
import medicalPng from '../../public/categories/medicine.png'
import memorialPng from '../../public/categories/grave.png'
import emergencyPng from '../../public/categories/siren.png'
import nonProfitPng from '../../public/categories/charity.png'
import educationPng from '../../public/categories/mortarboard.png'
import animalsPng from '../../public/categories/pawprint.png'

const Categories = () => (
  <Stack
    my={20}
    p={4}
    bg={useColorModeValue('#fbf8f6', '#291b12')}
    borderRadius="xl"
  >
    <Heading as="h2" size="md" alignSelf="center">
      Fundraise for...
    </Heading>
    <SimpleGrid pt={2} columns={[2, 3, 3]} gap={8}>
      <CategoryButton
        href={{ pathname: '/projects', query: { category: 'medical' } }}
        label="Medical"
      >
        <Image src={medicalPng} alt="medical" />
      </CategoryButton>
      <CategoryButton
        href={{ pathname: '/projects', query: { category: 'memorial' } }}
        label="Memorial"
      >
        <Image src={memorialPng} alt="memorial" />
      </CategoryButton>
      <CategoryButton
        href={{ pathname: '/projects', query: { category: 'emergency' } }}
        label="Emergency"
      >
        <Image src={emergencyPng} alt="emergency" />
      </CategoryButton>
      <CategoryButton
        href={{ pathname: '/projects', query: { category: 'non-profit' } }}
        label="Non Profit"
      >
        <Image src={nonProfitPng} alt="Non Profit" />
      </CategoryButton>
      <CategoryButton
        href={{ pathname: '/projects', query: { category: 'education' } }}
        label="Education"
      >
        <Image src={educationPng} alt="education" />
      </CategoryButton>
      <CategoryButton
        href={{ pathname: '/projects', query: { category: 'animals' } }}
        label="Animals"
      >
        <Image src={animalsPng} alt="animal" />
      </CategoryButton>
    </SimpleGrid>
  </Stack>
)

export default Categories
