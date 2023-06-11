---
sidebar_position: 1
---

# Register a Slot Type

A tutorial on how to register a slot type that is recognized by Curios.

## Overview
Beginning in 1.20, the recommended way to register a slot type is through a datapack. If you are unfamiliar with
datapacks, it is recommended to read through the [wiki page](https://minecraft.fandom.com/wiki/Data_pack) in order to
understand the concept and structure before proceeding to the rest of this page.

:::tip
If using one of the [Preset Slot Types](./preset-slots), this step can be skipped since Curios natively provides the
needed datapack registration.
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

|Field| Type                      | Default          |Required|Description| Merge Behavior                     |
|-----|---------------------------|------------------|--------|-----------|------------------------------------|
|`replace`| boolean                   | `false`          | `false` | When `true`, replaces data from lower-priority datapacks| N/A                                
|`size`| integer                   | `1`              | `false` | The number of slots of this slot type to give by default | The highest size will be used      |
|`operation`| `"SET"`\|`"ADD"`\|`"REMOVE"` | `"SET"` | `false` | Whether to use `size` to set, add, or remove from the total number of slots | N/A                                |
|`order` | integer | `1000` | `false` | The order the slots will appear in the native Curios GUI, lower numbers appear higher | The lowest order will be used      |
|`icon` | string | `curios:slot/empty_curios_slot` | `false` | The location of the icon to use for the slot type | The last icon will be used         |
|`add_cosmetic` | boolean | `false` | `false` | When `true`, adds a cosmetic slot next to the original that does not provide function but still renders its contents | `true` if any add a cosmetic slot |
|`use_native_gui` | boolean | `true` | `false` | When `false`, does not add the slot type to the native Curios GUI | `false` if any do not use the native GUI |
|`render_toggle` | boolean | `true` | `false` | When `false`, does not allow the slot type to toggle its rendering | `false` if any do not allow render toggling

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
  