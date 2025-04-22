---
sidebar_position: 12
---

# Curios Attribute Modifiers (NBT)

A tutorial on how to edit a curio item's NBT data to add attribute modifiers when the item is worn in a curio slot.

## Overview
---
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
/give @s netherite_sword[minecraft:attribute_modifiers=[{type:"generic.attack_damage", amount:20.0, operation:"add_value", id:"example:custom_damage", slot:"mainhand"}]] 1
```

This is the Curios way of achieving the same in the `body` slot:
```
/give @s netherite_chestplate[curios:attribute_modifiers=[{type:"generic.attack_damage", amount:20.0, operation:"add_value", id:"example:custom_damage", slot:"body"}]]
```

Note that the main differences are the change from `minecraft:attribute_modifiers` to `curios:attribute_modifiers` and
the change in the slot name. The slot name should be the `identifier` of a registered slot type.

### Slot Modifiers

This method can also be used to add slot modifiers, modifiers that can add or remove curio slots. The syntax is the
same, the only difference is that the `AttributeName` should be of the format `curios:identifier` with `identifier`
being the slot identifier that is being added or removed.

Going back to the previous example, this will make the item add 1 `back` slot when worn in the `body` slot:

```
/give @s netherite_chestplate[curios:attribute_modifiers=[{type:"slot:back", amount:1.0, operation:"add_value", id:"example:custom_damage", slot:"body"}]]
```
