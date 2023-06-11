---
sidebar_position: 2
---

# Add a Slot Type to an Entity

A tutorial on how to add a registered slot type to an entity.

## Overview
Beginning in 1.20, the recommended way to add a registered slot type to an entity is through a datapack. If you are
unfamiliar with datapacks, it is recommended to read through the [wiki page](https://minecraft.fandom.com/wiki/Data_pack)
in order to understand the concept and structure before proceeding to the rest of this page.

## Directory
---
The file should be a `.json` file located in the `~/data/(namespace)/curios/entities/` folder of the datapack.

:::note
The file can be named anything.

The `(namespace)` field should be replaced by the namespace chosen for this portion of the datapack. If this is a part
of a mod, the namespace is usually the mod ID. If this is part of a user-defined datapack, then the namespace can be
anything that is lowercased with no special characters.
:::

## Syntax
---
The structure of the `.json` file for the entity configuration consists of a top-level JSON object that holds two
potential fields.

* `entities`
  * An array of registry names of entity types or entity type tags.
* `slots`
  * An array of `identifier` names for registered slot types.

All of the listed slots will be associated to all of the listed entities.

## Example
---
```json
{
  "entities": ["player", "minecraft:zombie"],
  "slots": ["head", "back"]
}
```
This configuration will give two slot types, `head` and `back`, to all players and all zombies.
  