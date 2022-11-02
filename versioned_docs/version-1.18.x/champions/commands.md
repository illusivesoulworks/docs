---
sidebar_position: 6
---

# Commands

All of the Champions commands are available through `/champions`.

## Command Guide
|Syntax|Meaning|
|-----------|-----------|
|`plain text`|**Enter this literally**, exactly as shown.|
|`<argumentsName>`|An **argument** that should be replaced with an appropriate value.|
|`[entry]`|This entry is **optional**.|

## Syntax
---
There are three instructions for `/champion` which are `summon`, `egg`, and `summonpos`.

* `summon <entity> [<tier>] [<affix>]`
  * Summons a champion entity.
* `egg <entity> [<tier>] [<affix>]`
  * Gives the command sender a spawn egg that spawns a champion entity.
* `summonpos <pos> <entity> [<tier>] [<affix>]`
  * Summons a champion entity at a location.
  
In order to summon a champion with NBT tags, use `/summon` in combination with the [Champions NBT tags](nbt).

## Arguments
---
* `<entity>`: [entity_summon](https://minecraft.fandom.com/wiki/Argument_types#entity_summon)
  * Specifies the entity to be summoned.
  * Must be an ID of a summonable [entity](https://minecraft.fandom.com/wiki/Entity) type.

* `<tier>`: [int](https://minecraft.fandom.com/wiki/Argument_types#int)
  * Specifies the champion tier of the entity to be summoned.
  * Must be a valid tier from a rank as specified in the `champions-rank.toml` configuration file.

* `<affix>`: [affix_identifier]
  * Specifies an affix to attach to the entity to be summoned.
  * Must be an identifier of a registered [affix].
  * Multiple space-delimited affixes can be specified.

* `<pos>`: [vec3](https://minecraft.fandom.com/wiki/Argument_types#vec3)
  * Specifies the position to summon the entity. If not specified, defaults to the position of the command's execution.
  * Must be a three-dimensional coordinates with floating-point number elements. Accepts [tilde and caret notations](https://minecraft.fandom.com/wiki/Coordinates#Commands).

## Examples
---
* To summon a tier 3 champion [spider](https://minecraft.fandom.com/wiki/Spider) entity with the Enkindling affix:
  * `champion summon spider 3 enkindling`
  
* To give a spawn egg that summons a tier 2 champion [skeleton](https://minecraft.fandom.com/wiki/Skeleton) entity with random affixes:
  * `champion egg skeleton 2`
  
* To summon a tier 1 champion [zombie](https://minecraft.fandom.com/wiki/Zombie) entity with random affixes 10 blocks west of the current position of the executing sender:
  * `champion summonpos ~-10 ~ ~ zombie 1`
  