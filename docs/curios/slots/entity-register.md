---
sidebar_position: 3
---

# Entity Slot Types

A tutorial on how to add registered slot types to entities.

## Overview
---
The recommended way to add a registered slot type to an entity is through a datapack. If you are unfamiliar with
datapacks, it is recommended to read through the [wiki page](https://minecraft.fandom.com/wiki/Data_pack) in order to
understand the concept and structure before proceeding to the rest of this page.

[Registered slot types](slot-register.md) will all be available for use but will not appear in-game until they are
added to one or more entities.

Alternatively, users can instead choose to use the [Curios configuration](../configuration#slot-configuration) to create
and assign slot types to **players only**. There are fewer features than those offered in the datapack method, but some
users may find the process to be more straightforward.

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
The structure of the `.json` file for the entity configuration consists of a top-level JSON object that holds several
potential fields.

All fields are optional unless otherwise noted.

### **replace** (boolean)
When `true`, replaces data from lower-priority datapacks.
* **default:** `false`

### **entities** (string[])
An array of registry names of entity types or entity type tags.
* **default:** `[]`

### **slots** (string[])
An array of `identifier` names for registered slot types.
* **default:** `[]`

### **conditions** (string[])
An array of `ICondition` implementations that must all pass before these slots are loaded into these entities.
* **default:** `[]`

All the listed slots will be associated to all the listed entities.

:::caution
Adding multiple of the same `identifier` to the `slots` array will **not** add multiple slots. Each entry in the `slots`
array represents a [registered slot type](slot-register.md) and the entries do not stack, please refer to that page in
order to change slot type behavior including default size.
:::

## Example
---
```json
{
  "entities": ["player", "minecraft:zombie"],
  "slots": ["head", "back"]
}
```
This configuration will give two slot types, `head` and `back`, to all players and all zombies.
  