---
sidebar_position: 1
---

# Slot Types

A tutorial on how to register and modify slot types that are recognized by Curios.

## Overview
---
The recommended way to register a slot type is through a datapack. If a user or developer is unfamiliar with datapacks,
it is recommended to read through the [wiki page](https://minecraft.fandom.com/wiki/Data_pack) in order to understand
the concept and structure before proceeding to the rest of this page.

Alternatively, users can instead choose to use the [Curios configuration](../configuration#slot-configuration) to create
and modify slot types. There are fewer features than those offered in the datapack method, but some users may find the
process to be more straightforward.

If using one of the [Preset Slot Types](./preset-slots), this step can be skipped since Curios natively provides the
needed datapack registration.

:::info
**Why are my registered slot types not appearing?**

Registering slot types makes them available for use; however, they are _not_ added to any entities (including players)
by default. In order to add them to an entity, please refer to [the next step](entity-register.md) on adding slot
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

All fields are optional unless otherwise noted. Each field denotes certain merging behavior which defines how the
field is merged between all data files that include it.

### **replace** (boolean)
When `true`, replaces data from lower-priority datapacks.
* **default:** `false`
* **merging:** N/A

### **size** (integer)
The number of slots of this slot type to give by default.
* **default:** `1`
* **merging:** The highest size will be used.

### **operation** (`"SET"`\|`"ADD"`\|`"REMOVE"`)
Whether to use `size` to set, add, or remove from the total number of slots.
* **default:** `"SET"`
* **merging:** N/A

### **order** (integer)
The order the slots will appear in the native Curios GUI, lower numbers appear first.
* **default:** `1000`
* **merging:** The lowest order will be used.

### **icon** (string)
The location of the icon to use for the slot type.
* **default:** `"curios:slot/empty_curios_slot"`
* **merging:** The last icon will be used.

### **add_cosmetic** (boolean)
The location of the icon to use for the slot type.
* **default:** `false`
* **merging:** `true` if any data file sets this field to `true`.

### **use_native_gui** (boolean)
When `false`, does not add the slot type to the native Curios GUI.
* **default:** `true`
* **merging:** `false` if any data file sets this field to `false`.

### **render_toggle** (boolean)
When `false`, does not allow the slot type to toggle its rendering.
* **default:** `true`
* **merging:** `false` if any data file sets this field to `false`.

### **drop_rule** (`"DEFAULT"`\|`"ALWAYS_DROP"`\|`"ALWAYS_KEEP"`\|`"DESTROY"`)
Whether to drop, keep, destroy, or follow the `keepCurios` configuration setting.
* **default:** `"DEFAULT"`
* **merging:** N/A

### **validators** (string[])
The list of registered predicates from the Curios API used by this slot type to validate item insertions.
* **default:** `["curios:tag"]`
* **merging:** Each entry is added into the final array.

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
  