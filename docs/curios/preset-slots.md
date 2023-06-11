---
sidebar_position: 10
---

# Preset Slot Types

A list of commonly used slot types that are already defined in Curios for developers to use.

## Overview

One of the benefits of using Curios is that multiple developers can share slot types between each other, allowing
mechanics and items to cooperate seamlessly. As long as the `identifier` for the slot type is the same, the slot types
will be merged together upon registration. To reduce the need for redundant code and data, Curios provides a preset
list of slot types that are commonly used in the modded community and should be favored over creating wholly unique slot
types when applicable.

:::note
Although these slot types are provided by Curios, they are not active by default. A developer or user will still need to
take the proper steps to register the slot type(s) that they want in order to add them to the game.
:::

## Slot Types
---
| Identifier | Usage                                                               | Examples                                                                                                                                                                                                                                                                                                                     |
|------------|---------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `curio`    | Universal, able to equip or be equipped into any slot type          | [Botania](https://www.curseforge.com/minecraft/mc-mods/botania)                                                                                                                                                                                                                                                              |
| `back`     | Items worn on the back, such as capes or backpacks                  | [Backpacked](https://www.curseforge.com/minecraft/mc-mods/backpacked), [BountifulBaubles](https://www.curseforge.com/minecraft/mc-mods/bountifulbaubles), [Elytra Slot](https://www.curseforge.com/minecraft/mc-mods/curious-elytra), [Shulker Box Slot](https://www.curseforge.com/minecraft/mc-mods/curious-shulker-boxes) |
| `belt`     | Items worn around the waist, such as belts or pouches               | [Artifacts](https://www.curseforge.com/minecraft/mc-mods/artifacts), [Cyclic](https://www.curseforge.com/minecraft/mc-mods/cyclic), [Nature's Aura](https://www.curseforge.com/minecraft/mc-mods/natures-aura)                                                                                                               |
| `body`     | Items worn around the torso, such as cloaks or shirts               | [Engineer's Tools](https://www.curseforge.com/minecraft/mc-mods/engineers-tools), [Reliquary](https://www.curseforge.com/minecraft/mc-mods/reliquary-v1-3)                                                                                                                                                                   |
| `bracelet` | Items worn around the wrist, such as bands or bracelets             |                                                                                                                                                                                                                                                                                                                              |
| `charm`    | Miscellaneous items, either held or not associated with a body part | [Angel Ring](https://www.curseforge.com/minecraft/mc-mods/angel-ring), [Charm of Undying](https://www.curseforge.com/minecraft/mc-mods/curio-of-undying), [Dark Utilities](https://www.curseforge.com/minecraft/mc-mods/dark-utilities)                                                                                      |
| `head`     | Items worn on top of the head, such as crowns or hats               | [VanillaTweaks](https://www.curseforge.com/minecraft/mc-mods/vanillatweaks)                                                                                                                                                                                                                                                  |
| `hands`    | Items worn on hands, such as gloves or gauntlets                    | [Artifacts](https://www.curseforge.com/minecraft/mc-mods/artifacts), [Cyclic](https://www.curseforge.com/minecraft/mc-mods/cyclic)                                                                                                                                                                                           |
| `necklace` | Items worn around the neck, such as amulets or necklaces            | [Azure RPG Items](https://www.curseforge.com/minecraft/mc-mods/azure-rpg-items), [Potion Capsule](https://www.curseforge.com/minecraft/mc-mods/potion-capsule)                                                                                                                                                               |
| `ring`     | Items worn on the "fingers", such as rings                          | [Enigmatic Legacy](https://www.curseforge.com/minecraft/mc-mods/enigmatic-legacy), [Gobber](https://www.curseforge.com/minecraft/mc-mods/gobber)                                                                                                                                                                             |