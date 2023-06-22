---
sidebar_position: 5
---

# Adding a Custom Slot Texture

A tutorial on how to add a custom slot texture to a slot type.

## Overview
Registering a new custom slot texture can be done through a resource pack. If you are
unfamiliar with resource packs, it is recommended to read through the [wiki page](https://minecraft.fandom.com/wiki/Resource_pack)
in order to understand the concept and structure before proceeding to the rest of this page.

# Registering a Slot Texture
---
Create a new resource directory `assets/(namespace)/textures/slot` and place any `.png` file in the `slot` folder.

:::info
The image itself should be 16x16 in size and have a transparent background with only the slot texture drawn.

Example: ![](https://github.com/TheIllusiveC4/Curios/blob/1.16.x-forge/src/main/resources/assets/curios/textures/item/empty_back_slot.png?raw=true)
:::

:::note
The `(namespace)` field should be replaced by the namespace chosen for this portion of the resource pack. If this is a
part of a mod, the namespace is usually the mod ID. If this is part of a user-defined resource pack, then the namespace
can be anything that is lowercased with no special characters.
:::

# Using a Slot Texture
---

When entering the fields of the `.json` slot registration files as described in [Register a Slot Type](./slot-register),
the `"icon"` field should be set to the path of the slot that was added to the resource directory.

For example, a `empty_test_slot.png` file placed in `assets/test/textures/slot` that wants to be added to the `charm`
slot should have a `charm.json` slot registration file in a datapack with the following contents:
```json
{
  "icon": "test:slot/empty_test_slot"
}
```
:::caution
Note that the path in `"icon"` is not the entire path of the directory. It omits the `texture` part and also omits the
`.png` extension. This is due to how Curios and Minecraft parses the icon, so make sure the path is formatted correctly
when adding this field.
:::
  