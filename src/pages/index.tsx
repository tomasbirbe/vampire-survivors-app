import type { PassiveItem, Weapon } from 'src/types';

import { Container, Stack, Text } from '@chakra-ui/react';

interface Props {
  weapons: Weapon[];
  passiveItems: PassiveItem[];
}

export default function Home({ weapons, passiveItems }: Props) {
  return (
    <Container maxWidth="full">
      <Stack direction="row" justify="space-around">
        <Stack as="ul">
          {weapons.map((weapon) => (
            <Text key={weapon.name}>{weapon.name}</Text>
          ))}
        </Stack>
        <Stack as="ul">
          {passiveItems.map((passiveItem) => (
            <Text key={passiveItem.name}>{passiveItem.name}</Text>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export async function getServerSideProps() {
  const weapons = await fetch('http://localhost:3000/api/weapons');
  const passiveItems = await fetch('http://localhost:3000/api/passiveItems');

  return {
    props: {
      weapons: await weapons.json(),
      passiveItems: await passiveItems.json(),
    },
  };
}
