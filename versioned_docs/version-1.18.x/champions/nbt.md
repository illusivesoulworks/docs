---
sidebar_position: 7
---

# NBT Tags

As an alternative to the convenient but limited summoning methods outlined in [Commands](commands), Champions provides a way to specify rank and affix data directly through NBT tags.

Upon spawning, the Champions data from the NBT tags will be read, applied, and then removed.

## NBT Structure
---
* **ForgeData**: Serves as the root tag.
  * **ChampionsData**: Serves as the sub-root tag.
      * **tier**: The tier of the rank to assign to the champion entity. Can be an integer or an object with the following structure:
	      * **min**: The minimum tier of the rank to assign to the champion entity. Must be equal to or lower than **max**. If absent, there is no minimum.
	      * **max**: The maximum tier of the rank to assign to the champion entity. Must be equal to or higher than **min**. If absent, there is no maximum.
	  * **affixes**: The affixes to assign to the champion entity. Can be a list of affix identifiers as strings or an object with the following structure:
	      * **values**: A list of affix identifiers for affixes to assign to the champion entity.
		  * **count**: The total number of affixes to assign to the champion entity. If absent, the default number from the rank configuration will be used.

## Examples
---
* To summon a tier 3 champion [spider](https://minecraft.fandom.com/wiki/Spider) entity with the Enkindling affix:
  * `summon spider ~ ~ ~ {ForgeData:{ChampionsData:{tier:3,affixes:{values:["enkindling"],count:1}}}}`
  
* To summon a tier 2 champion [skeleton](https://minecraft.fandom.com/wiki/Skeleton) entity with the Hasty affix and 2 random affixes:
  * `summon skeleton ~ ~ ~ {ForgeData:{ChampionsData:{tier:2,affixes:{values:["hasty"],count:3}}}}`

* To summon a tier 4 champion [zombie](https://minecraft.fandom.com/wiki/Zombie) entity with random affixes:
  * `summon zombie ~ ~ ~ {ForgeData:{ChampionsData:{tier:4}}}`
  