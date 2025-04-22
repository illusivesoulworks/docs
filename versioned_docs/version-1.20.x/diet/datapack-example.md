---
sidebar_position: 10
---

# Example Datapack

An example datapack for configuring various diet mechanics, including adding a new food group and adding food to that
new food group.

## Getting Started

First, download the [example datapack](../assets/diet_example.zip).

Unzip the file and there will be the following folder structure:

```
|data
--|diet
  --|tags
    --|items
      --|test_group.json
--|diet_example
  --|diet
    --|groups
      --|test_group.json
    --|suites
      --|builtin.json
|pack.mcmeta
```

The `.mcmeta` file and `.json` files can be opened and edited in any text editor, such as Notepad.

:::note

**Why are there two folders for *diet* and *diet_example*?**

The namespace used for this datapack is `diet_example`. The `diet_example` folder has a sub-folder called `diet` which
houses the `groups` and `suites` folder. This is the custom data that is specifically for the Diet mod. On the other
hand, the `diet` folder that houses the `tags` folder is using the name as a separate namespace for the purposes of
adding item tags, which are read by vanilla.

:::

## New Food Group

Adding a new food group is controlled by the `data/diet_example/diet/groups/test_group.json` file:

```json
{
  "icon": "minecraft:diamond",
  "color": "#ffffff",
  "order": 5,
  "default_value": 0.25,
  "gain_multiplier": 2.0,
  "decay_multiplier": 0.5,
  "beneficial": true
}
```
The file and file name specifies these properties for the food group:
* The identifier for the food group is `test_group`, as denoted by the file name
* The icon is the one for the `minecraft:diamond` item
* The color associated with the food group is `#ffffff`, or white
* The order is `5`, denoting where it is placed on the Diet GUI
* The default value is `0.25`, or 25%
* The gain multiplier is `2.0`, doubling the percentages on all gains for the food group
* The decay multiplier is `0.5`, halving the rate of decay for the food group
* The food group is `beneficial`, which will render as green in tooltips

For more information on the fields and customization of food groups, please refer to [the food groups page](diet-groups.md).

## Adding the New Food Group to a Suite

Just creating the food group isn't enough, as now it has to be added to a diet suite in order to appear anywhere. The
most relevant diet suite will be the default one, named `builtin`, which is configured by the `data/diet_example/diet/suites/builtin.json` file:

```json
{
  "replace": false,
  "groups": [
    "test_group"
  ],
  "effects": [
    {
      "status_effects": [
        {
          "name": "minecraft:regeneration",
          "power": 3
        }
      ],
      "conditions": [
        {
          "groups": ["test_group"],
          "match": "all",
          "above": 0.8,
          "below": 1.0
        }
      ]
    }
  ]
}
```
The file and file name specifies these properties for the diet suite:
* The identifier for the diet suite is `builtin`, as denoted by the file name. This is the same identifier as the default
one, so this file's purpose is to edit or override any previously stated values.
* These values are adding, not replacing, its contents since `replace` is `false`.
* The groups to add are just `test_group`
* The effect added is a `minecraft:regeneration` status effect when `test_group` is above `0.8`, or 80%

For more information on the fields and customization of diet suites, please refer to [the diet suites page](diet-suites.md).

## Adding an Item to a Food Group

Items are added to food groups by adding them to the relevant item tag. In the example datapack, the food group is `test_group`
so an item tag for `diet:test_group` is created at `data/diet/tags/items/test_group.json`:

```json
{
  "replace": false,
  "values": [
    "minecraft:apple"
  ]
}
```

The file name is the same as the identifier for the food group and will be the name of the tag that is created. By
setting `replace` to `false`, the values are added to the tag instead of replacing them. Listing `minecraft:apple` in
the `values` array will add the apple item to the tag and consequently to the `test_group` food group.

For more information on tags and item tags, please refer to the [page on the Minecraft wiki](https://minecraft.wiki/w/Tag).

## Activating the Datapack

Datapacks are created on a per-world basis and need to be placed in the `datapacks` folder of the `world` folder on a
dedicated server or the `saves/(World Name)` folder in single player. They should automatically be enabled upon loading
the datapack for the first time in the world.
