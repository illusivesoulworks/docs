---
sidebar_position: 1
---

# Registering and Editing Slot Types

A tutorial on how to register and modify slot types that are recognized by Curios.

## Overview
---
Beginning in 1.20, the recommended way to register a slot type is through a datapack. If you are unfamiliar with
datapacks, it is recommended to read through the [wiki page](https://minecraft.fandom.com/wiki/Data_pack) in order to
understand the concept and structure before proceeding to the rest of this page.

If using one of the [Preset Slot Types](./preset-slots), this step can be skipped since Curios natively provides the
needed datapack registration.

:::info
**Why are my registered slot types not appearing?**

Registering slot types makes them available for use; however, they are _not_ added to any entities (including players)
by default. In order to add them to an entity, please refer to [the next step](./entity-register.md) on adding slot
types to entities.
:::

## Directory
---
The file should be a `.json` file with the `identifier` for the slot type to be registered as the name. This file
should be located in the `~/data/(namespace)/curios/slots/` folder of the datapack.

Example: Registering a `head` slot type requires creating a `head.json` file located in `~/data/(namespace)/curios/slots/`
so the final path should look like `~/data/(namespace)/curios/slots/head.json`.

:::note
The `(namespace)` field should be replaced by the namespace chosen for this portion of the datapack. If this is a part
of a mod, the namespace is usually the mod ID. If this is part of a user-defined datapack, then the namespace can be
anything that is lowercased with no special characters.
:::

## Syntax
---
The structure of the `.json` file for the slot type consists of a top-level JSON object that holds various fields
related to that slot type.

| Field            | Type                                                       | Default                         | Required | Description                                                                                                          | Merge Behavior                              |
|------------------|------------------------------------------------------------|---------------------------------|----------|----------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| `replace`        | boolean                                                    | `false`                         | `false`  | When `true`, replaces data from lower-priority datapacks                                                             | N/A                                         |
| `size`           | integer                                                    | `1`                             | `false`  | The number of slots of this slot type to give by default                                                             | The highest size will be used               |
| `operation`      | `"SET"`\|`"ADD"`\|`"REMOVE"`                               | `"SET"`                         | `false`  | Whether to use `size` to set, add, or remove from the total number of slots                                          | N/A                                         |
| `order`          | integer                                                    | `1000`                          | `false`  | The order the slots will appear in the native Curios GUI, lower numbers appear higher                                | The lowest order will be used               |
| `icon`           | string                                                     | `curios:slot/empty_curios_slot` | `false`  | The location of the icon to use for the slot type                                                                    | The last icon will be used                  |
| `add_cosmetic`   | boolean                                                    | `false`                         | `false`  | When `true`, adds a cosmetic slot next to the original that does not provide function but still renders its contents | `true` if any add a cosmetic slot           |
| `use_native_gui` | boolean                                                    | `true`                          | `false`  | When `false`, does not add the slot type to the native Curios GUI                                                    | `false` if any do not use the native GUI    |
| `render_toggle`  | boolean                                                    | `true`                          | `false`  | When `false`, does not allow the slot type to toggle its rendering                                                   | `false` if any do not allow render toggling |
| `drop_rule`      | `"DEFAULT"`\|`"ALWAYS_DROP"`\|`"ALWAYS_KEEP"`\|`"DESTROY"` | `"DEFAULT"`                     | `false`  | Whether to drop, keep, destroy, or follow the `keepCurios` configuration                                             | N/A                                         |

:::info
**Which `operation` value should I use?**

In most cases, `"SET"` (also the default if no value is defined) will accomplish the desired result. It denotes that a
slot type should have a certain amount of slots by default, with the highest value among all consumers being used.
`"ADD"`and `"REMOVE"` are inherent slot modifiers and are based on the amount of slots specified by all `"SET"`
operations, the result of which can change based on the mods/datapacks loaded.
:::

## Example
---
```json
{
  "order": 20,
  "size": 4,
  "icon": "curios:slot/empty_custom_slot",
  "add_cosmetic": true
}
```
This slot type will have a relatively low order of 20, which will make it appear higher than most slots. It also has
size of 4 which means that it will register 4 slots to any given entity by default. For the GUI, it uses an icon
located at `curios:slot/empty_custom_slot`. It also has added a cosmetic slot so there will be an additional slot for
cosmetic items next to it in the Curios GUI.

## Modifying a Slot Type
---
The process of modifying a slot type is identical to registering a new slot type, except using the same `identifier` as
the existing slot type. All slot types that share an `identifier` will be merged according to the **Merge Behavior** of
each field as outlined above.

### Example
Curios natively provides data for the `ring` slot, which defaults the size to 1. In order to increase the size to 2,
create a `ring.json` slot registration file in the datapack with the contents:
```json
{
  "size": 2
}
```
This will merge the size data of this registration with the existing registration provided by Curios, keeping all of the
other data intact while increasing the number of slots to 2.
  