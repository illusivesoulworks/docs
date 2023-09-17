---
sidebar_position: 14
---

# Commands

A tutorial on the various commands available through Curios.

## Command Guide
---
|Syntax|Meaning|
|-----------|-----------|
|`plain text`|**Enter this literally**, exactly as shown.|
|`<argumentsName>`|An **argument** that should be replaced with an appropriate value.|
|`[entry]`|This entry is **optional**.|

## Syntax
---
All the commands begin with `curios` and have the following options:

* `list`
  * Outputs a list of slot identifiers, categorized by mod.
* `replace <slotId> <index> <player> with <item> [amount]`
  * Places the specified item in the specified slot on the target player.
* `set <slotId> <player> [amount]`
  * Sets a number of slots for the specified slot type on the target player.
* `add <slotId> <player> [amount]`
  * Adds a number of slots for the specified slot type on the target player.
* `remove <slotId> <player> [amount]`
  * Removes a number of slots for the specified slot type on the target player.
* `clear <player> [slotId]`
  * Clears the specified slot type of all its items. If no slot type is specified, all curios items will be cleared.
* `drop <player> [slotId]`
  * Drops all the items in the specified slot type. If no slot type is specified, all curios items will be dropped.
* `reset <player>`
  * Resets the target player's curios inventory to its default slots, also clears all curios items.

## Arguments
---
* `<player>`: [player](https://minecraft.fandom.com/wiki/Argument_types#minecraft:entity)
  * Specifies the player to perform the command on.
  * Must be a player name, a target selector, or a UUID.

* `<amount>`: [int](https://minecraft.fandom.com/wiki/Argument_types#int)
  * Specifies the quantity of slots or items.
  * Must be a whole number greater than or equal to 1.

* `<index>`: [int](https://minecraft.fandom.com/wiki/Argument_types#int)
  * Specifies the index within the slot type.
  * Must be a whole number greater than or equal to 0.

* `<slotId>`: [slot_identifier](slot-register)
  * Specifies a slot type.
  * Must be an identifier of a registered slot type.

## Examples
---
* To add 3 `"ring"` slots to a player:
  * `curios add ring Player123 1`

* To place a `"minecraft:totem_of_undying"` item in the first `"charm"` slot found on a player: 
  * `curios replace charm 0 Player123 with minecraft:totem_of_undying 1`

## Entity Selector Options
---
Curios has a custom entity selector option to use with commands that target entities, such as @a or @p.

The option starts with curios= and takes in a single **CompoundTag** as an argument. A blank tag would be `curios={}`.

### Tag Format
The **CompoundTag** has the following fields:

* `item`
  * **required:** false
  * **type:** **CompoundTag**
  * **description:** Denotes an item to match in the target's curios inventory.
  * **Example:** 
    * `curios={item:{id:"minecraft:glass_bottle"}}` 
    * This will search for a `minecraft:glass_bottle` in the target's curios inventory.

* `slot`
  * **required:** false
  * **type:** string[]
  * **description:** Denotes a slot type to search in the target's curios inventory.
  * **Example:**
    * `curios={slot:["ring"]}`
    * This will search for `"ring"` slots in the target's curios inventory.

* `index`
  * **required:** false
  * **type:** int[min, max]
  * **description:** Denotes the indices in slots to search in the target's curios inventory.
  * **Example:**
    * `curios={index:[0,1]}`
    * This will search for the first index of each slot type in the target's curios inventory.

* `exclusive`
  * **required:** false
  * **type:** boolean
  * **description:** Denotes whether the selector is searching for only one match.
  * **Example:**
    * `curios={slot:["ring"],exclusive:true}`
    * This will search for `"ring"` slots in the target's curios inventory but will not return a match if any other slot type is found in the inventory as well.

### Inverting

The selector option also supports inverting. Placing a `!` before the **CompoundTag** will invert the search.
For example, `curios=!{slot:["ring"]}` will search for targets that do *not* have `"ring"` slots in their curios inventory.

### Examples

* To kill all players who have a `minecraft:glass_bottle` in a `"ring"` slot of the curios inventory:
    * `/kill @a[curios={item:{id:"minecraft:glass_bottle"},slot:["ring"]}]`
  