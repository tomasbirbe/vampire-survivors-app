import type { PassiveItem, Weapon } from 'src/types';

import { Container, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { WeaponModel, PassiveItemModel } from 'src/db/model';

interface Props {
  weapons: Weapon[];
  passiveItems: PassiveItem[];
}

export default function Home({ weapons, passiveItems }: Props) {
  const [myWeapons, setMyWeapons] = useState<Weapon[]>([]);
  const [myPassiveItems, setMyPassiveItems] = useState<PassiveItem[]>([]);

  function addToMyWeapons(weapon: Weapon) {
    setMyWeapons((prevState) => [...prevState, weapon]);
  }

  function addToMyPassiveItems(passiveItem: PassiveItem) {
    setMyPassiveItems((prevState) => [...prevState, passiveItem]);
  }

  return (
    <Container maxWidth="full">
      <Stack align="center">
        <Stack as="ul" direction="row">
          {myWeapons.map((myWeapon) => (
            <Text key={myWeapon.id}>{myWeapon.name}</Text>
          ))}
        </Stack>
        <Stack as="ul" direction="row">
          {myPassiveItems.map((myPassiveItem) => (
            <Text key={myPassiveItem.id}>{myPassiveItem.name}</Text>
          ))}
        </Stack>
      </Stack>
      <Stack direction="row" justify="space-around">
        <Stack as="ul">
          {weapons.map((weapon) => (
            <Text key={weapon.name} onClick={() => addToMyWeapons(weapon)}>
              {weapon.name}
            </Text>
          ))}
        </Stack>
        <Stack as="ul">
          {passiveItems.map((passiveItem) => (
            <Text key={passiveItem.name} onClick={() => addToMyPassiveItems(passiveItem)}>
              {passiveItem.name}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export async function getServerSideProps() {
  const weapons = await WeaponModel.findAll({ raw: true });
  const passiveItems = await PassiveItemModel.findAll({ raw: true });

  return {
    props: {
      weapons,
      passiveItems,
    },
  };
}
