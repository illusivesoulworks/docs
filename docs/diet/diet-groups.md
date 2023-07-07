---
sidebar_position: 2
---

# Customizing Food Groups

A tutorial on how to edit available food groups and their respective metadata.

## Overview
Food groups are ways that players can categorize and differentiate the different types of food available to them. Some
foods may have one or multiple food groups. Eating food will increase the player's percentage of each food group that is
associated with the food item.

Groups are completely customizeable through datapacks, allowing users complete control over which food groups are
available and how many are tracked. If you are unfamiliar with datapacks, it is recommended to read through the
[wiki page](https://minecraft.fandom.com/wiki/Data_pack) in order to understand the concept and structure before
proceeding to the rest of this page.

:::tip
If using one or more of the [Built-in Food Groups](#-built-in-food-groups) without changes, this step can be skipped and
[Customizing Diet Suites](diet-suites.md) can be read instead.
:::

:::caution
Creating a food group will not automatically make it appear in-game. Food groups need to be assigned to a [Diet Suite](diet-suites.md)
first and only then will appear when a player has that particular suite of food groups.
:::

## Directory
---
The file should be a `.json` file with the `name` for the food group to be registered. The `name` will be used to
identify the food group so keep it in mind. This file should be located in the `~/data/(namespace)/diet/groups/` folder
of the datapack.

Example: Registering a `fruits` food group requires creating a `fruits.json` file located in `~/data/(namespace)/diet/groups/`
so the final path should look like `~/data/(namespace)/diet/groups/fruits.json`.

:::note
The `(namespace)` field should be replaced by the namespace chosen for this portion of the datapack. If this is a part
of a mod, the namespace is usually the mod ID. If this is part of a user-defined datapack, then the namespace can be
anything that is lowercased with no special characters.
:::

## Syntax
---
The structure of the `.json` file for the food group consists of a top-level JSON object that holds various fields
related to that food group.

| Field              | Type    | Default           | Required | Description                                                                        |
|--------------------|---------|-------------------|----------|------------------------------------------------------------------------------------|
| `icon`             | string  | `"minecraft:air"` | `false`  | The registry name of the item used to represent the food group                     |
| `color`            | string  | `"#ffffff"`       | `false`  | The color, as an integer or hexadecimal string, used to represent the food group   |
| `order`            | integer | `1`               | `false`  | The order the food groups will appear in the Diet GUI, lower numbers appear higher |
| `default_value`    | decimal | `0.0`             | `false`  | The starting value of the food group, as a percentage, between 0.0 and 1.0         |
| `gain_multiplier`  | decimal | `1.0`             | `false`  | The multiplier to how much value is added to the food group when food is eaten.    |
| `decay_multiplier` | decimal | `1.0`             | `false`  | The multiplier to how much the food group decays when hungry.                      |
| `beneficial`       | boolean | `true`            | `false`  | If true, the food group is considered beneficial to have in higher amounts.        |

## Example
---
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
This food group will have a relatively high order of `5`, which will make it appear lower than most food groups. The icon
is represented by the `minecraft:diamond` item and the food group has a white (`#ffffff`) color. It will start at its
default value of 25% (`0.25`). Players will gain twice (`2.0`) as much from eating foods in this food group, and the
food group will decay half (`0.5`) as fast. It is considered beneficial (`true`) to eat more foods in this food group.

## Modifying a Food Group
---
Existing food groups from other sources, such as Diet itself, can be edited by simply creating a datapack file as shown
here with the same `name`. Diet will load them in order and will replace any pre-existing food group information with
newer ones that are found.

### Example
Diet natively provides data for a `fruits` food group, which has a `default_value` of `0.0`. In order to increase the
default value to 0.5, create a `fruits.json` food group file in the datapack with the contents:
```json
{
  "default_value": 0.5
}
```
This will replace the pre-existing default value with the new one of `0.5`.

## Localization
---
The default food groups have in-built translations provided, but custom food groups will need to have their own created.

The key is: `groups.diet.customgroup.name`.

Example translation entry:
```
"groups.diet.grains.name": "Grains"
```

These entries need to be placed in the localization files of a custom resource pack. For further information about
creating a resource pack, please refer to [this guide](https://minecraft.fandom.com/wiki/Tutorials/Creating_a_resource_pack).

## Built-in Food Groups
---
These food groups are built-in to Diet natively and can be added to [Diet Suites](diet-suites.md) or individually
customized by creating a new datapack file that overrides its contents.

<details><summary>fruits.json</summary>

```json
{
  "icon": "minecraft:apple",
  "color": "#d41c53",
  "order": 0,
  "default_value": 0.0,
  "gain_multiplier": 1.0,
  "decay_multiplier": 1.0,
  "beneficial": true
}
```
</details>

<details><summary>grains.json</summary>

```json
{
  "icon": "minecraft:bread",
  "color": "#d4a31c",
  "order": 0,
  "default_value": 0.0,
  "gain_multiplier": 1.0,
  "decay_multiplier": 1.0,
  "beneficial": true
}
```
</details>

<details><summary>proteins.json</summary>

```json
{
  "icon": "minecraft:cooked_beef",
  "color": "#d4781c",
  "order": 0,
  "default_value": 0.0,
  "gain_multiplier": 1.0,
  "decay_multiplier": 1.0,
  "beneficial": true
}
```
</details>

<details><summary>vegetables.json</summary>

```json
{
  "icon": "minecraft:carrot",
  "color": "#31d41c",
  "order": 0,
  "default_value": 0.0,
  "gain_multiplier": 1.0,
  "decay_multiplier": 1.0,
  "beneficial": true
}
```
</details>

<details><summary>sugars.json</summary>

```json
{
  "icon": "minecraft:honey_bottle",
  "color": "#ff8fe9",
  "order": 10,
  "default_value": 0.0,
  "gain_multiplier": 1.0,
  "decay_multiplier": 1.0,
  "beneficial": true
}
```
</details>
