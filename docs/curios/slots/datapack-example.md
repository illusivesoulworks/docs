---
sidebar_position: 17
---

# Example Datapack

An example datapack for configuring various curio mechanics, including adding slot types to entities and modifying
existing slot types.

## Getting Started

First, download the [example datapack](../../assets/curios_example.zip).

Unzip the file and there will be the following folder structure:

```
|data
--|curios
  --|tags
    --|item
      --|ring.json
--|curios_example
  --|curios
    --|entities
      --|entities.json
    --|slots
      --|ring.json
|pack.mcmeta
```

The `.mcmeta` file and `.json` files can be opened and edited in any text editor, such as Notepad.

:::note

**Why are there two folders for *curios* and *curios_example*?**

The namespace used for this datapack is `curios_example`. The `curios_example` folder has a sub-folder called `curios`
which houses the `entities` and `slots` folder. This is the custom data that is specifically for the Curios mod. On the
other hand, the `curios` folder that houses the `tags` folder is using the name as a separate namespace for the purposes
of adding item tags, which are read by vanilla.

:::

## Registering a New Slot Type

Adding a new slot type is controlled by the `data/curios_example/curios/slots/example.json` file:

```json
{
  "size": 1,
  "add_cosmetic": true
}
```
The file and file name specifies these properties for the slot type:
* The identifier for the slot type is `example`, as denoted by the file name
* The number of slots available is `1`, as denoted by the `"size"` field
* Each slot of this slot type has an associated cosmetic slot, as denoted by the `"add_cosmetic"` field

For more information on the fields and customization of slot types, please refer to [the slot types page](slot-register.md).

## Modifying an Existing Slot Type

Modifying an existing slot type is controlled by the `data/curios_example/curios/slots/ring.json` file:

```json
{
  "size": 2,
  "add_cosmetic": true
}
```
The file and file name specifies these properties for the slot type:
* The identifier for the slot type to change is `ring`, as denoted by the file name
* The number of slots available is `2`, as denoted by the `"size"` field
* Each slot of this slot type has an associated cosmetic slot, as denoted by the `"add_cosmetic"` field

Note that this is exactly the same syntax as registering a new slot type. This is because modifying and registering a
slot type both have the exact same process, the difference solely being whether multiple files exist for the same slot
type or not.

For more information on how slot types are modified from multiple files, please refer to [the slot types page](slot-register.md).

## Adding Slot Types to One or More Entities

Just creating the slot type isn't enough, as now it has to be added to one or more entities in order to appear anywhere.
This is configured by the `data/curios_example/curios/entities/entities.json` file:

```json
{
  "entities": [
    "minecraft:player",
    "minecraft:armor_stand"
  ],
  "slots": [
    "back",
    "body",
    "belt",
    "bracelet",
    "charm",
    "curio",
    "example",
    "hands",
    "head",
    "necklace",
    "ring"
  ]
}
```
The file specifies these properties:
* The slots being given are all the [preset slot types](preset-slots.md) and the `example` slot type created by this
datapack, as denoted by the `"slots"` list
* The entities being given slots are all players and armor stands, as denoted by the `"entities"` list

For more information on the fields and customization of entity slots, please refer to [the entity slots page](entity-register.mdx).

## Adding an Item to a Curio Slot

Items are added to slot types by adding them to the relevant item tag. In the example datapack, an item tag for the
`ring` slot type is created at `data/curios/tags/item/ring.json`:

```json
{
  "replace": false,
  "values": [
    "minecraft:diamond"
  ]
}
```

The file name is the same as the identifier for the slot type and will be the name of the tag that is created. By
setting `replace` to `false`, the values are added to the tag instead of replacing them. Listing `minecraft:diamond` in
the `values` array will add the diamond item to the tag and consequently diamonds will be equippable in the `ring` slots.

For more information on tags and item tags, please refer to the [page on the Minecraft wiki](https://minecraft.wiki/w/Tag).

## Activating the Datapack

Datapacks are created on a per-world basis and need to be placed in the `datapacks` folder of the `world` folder on a
dedicated server or the `saves/(World Name)` folder in single player. They should automatically be enabled upon loading
the datapack for the first time in the world.
