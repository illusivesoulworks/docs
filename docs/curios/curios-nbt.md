---
sidebar_position: 12
---

# Curio Item NBT

A tutorial on how to edit a curio item's NBT data to add attribute modifiers when the item is worn in a curio slot.

## Overview
Attribute modifiers used in item NBT for regular equipment slots will not work with curio slots. This is because the
attribute modifiers are coded to work only in specific slots, and it will not recognize the custom curio slots. In order
to grant this functionality, Curios adds its own method of adding NBT attribute modifiers in items.

The format for Curios is almost exactly the same as Minecraft, so it is recommended to look through this [Attribute Guide](https://minecraft.fandom.com/wiki/Attribute)
for extended information about attribute names, syntax, and possible fields. This guide will only go over the
differences in Curios.

## Syntax
---
This is the vanilla way of adding an attribute modifier to the chest slot in an item's NBT:
```
/give @s netherite_chestplate{AttributeModifiers:[{Slot:"chest", AttributeName:"generic.attack_damage", Name:"generic.attack_damage", Amount:20.0, Operation:0, UUID:[I; 42853, 1689024593, -201178, -1559272105]}]} 1
```

This is the Curios way of achieving the same in the body slot:
```
/give @s netherite_chestplate{CurioAttributeModifiers:[{Slot:"body", AttributeName:"generic.attack_damage", Name:"generic.attack_damage", Amount:20.0, Operation:0}]} 1
```

Note that the main differences are the change from `AttributeModifiers` to `CurioAttributeModifiers` and the change in
the slot name. The slot name should be the `identifier` of a registered slot type.

:::tip
It is recommended that the UUID be left out except for special circumstances. When absent, Curios will give the attribute
modifier a UUID based on the slot context which will prevent any stacking issues that could arise when multiple slots
of the same type exist and the same attribute modifier is applied multiple times.
:::