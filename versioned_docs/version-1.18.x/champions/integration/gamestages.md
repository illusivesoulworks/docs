---
sidebar_position: 1
---

# Game Stages

Champions supports staging champions and ranks using the [Game Stages](https://github.com/Darkhax-Minecraft/Game-Stages) mod.

This allows users and modpack developers to gate certain entities from becoming champions or champions from achieving certain ranks
until the configured stage has been unlocked by a nearby player.

A nearby player is considered to be any player within 256 blocks of the entity.

### Configuration

Staging configuration can be modified through the `champions-gamestages.toml` configuration file located in the `world` folder's or the `saves/<World Name>` folder's `serverconfig` folder.

:::info
The configuration file will only generate if **Champions** detects **Game Stages** during mod loading. The configuration file will not be present until the two mods have been loaded together.
:::

## Entity Stages

Entity stages can be used to gate specific entities from becoming champions until a nearby player has unlocked the required stages.

By default, the configuration is empty.

```toml
#A list of entity stages in the format: "stage;modid:entity" or "stage;modid:entity;modid:dimension"
#Example: "test_stage;minecraft:zombie" or "test_stage;minecraft:spider;minecraft:the_nether"
entityStages = []
```

### Syntax

There are two different formats:

* `stage;entity`
  * The specified entity will not become a champion unless a nearby player has unlocked the specified stage.
* `stage;entity;dimension`
  * The specified entity **in the specified dimension** will not become a champion unless a nearby player has unlocked the specified stage.
  
### Examples

```toml
entityStages = ["first_stage;minecraft:spider"]
```

A [spider](https://minecraft.fandom.com/wiki/Spider) cannot become a champion unless a nearby player has the `first_stage` stage unlocked.

```toml
entityStages = ["first_stage;minecraft:spider", "second_stage;minecraft:ghast;minecraft:the_nether"]
```

The same as the previous example except with the addition that a [ghast](https://minecraft.fandom.com/wiki/Ghast) cannot become a champion **in the Nether** unless a nearby player has the `second_stage` stage unlocked.

## Tier Stages

Tier stages can be used to gate champions from becoming a specific rank until a nearby player has unlocked the required stages.

By default, the configuration is empty.

```toml
#A list of tier stages in the format: "stage;tier" or "stage;tier;modid:dimension"
#Example: "test_stage;2" or "test_stage;3;minecraft:the_nether"
tierStages = []
```

### Syntax

There are two different formats:

* `stage;tier`
  * Champions will not become the rank of the specified tier unless a nearby player has unlocked the specified stage.
* `stage;tier;dimension`
  * Champions **in the specified dimension** will not become the rank of the specified tier unless a nearby player has unlocked the specified stage.
  
### Examples

```toml
tierStages = ["first_stage;2"]
```

Champions cannot become ranks of tier 2 or above unless a nearby player has the `first_stage` stage unlocked.

```toml
tierStages = ["first_stage;2", "second_stage;3;minecraft:the_nether"]
```

The same as the previous example except with the addition that champions **in the Nether** cannot become ranks of tier 3 or above unless a nearby player has the `second_stage` unlocked.

### Arguments

* `stage`: [basic_string](https://minecraft.fandom.com/wiki/Argument_types#basic_string)
  * Specifies the name of the stage required for this entry.

* `entity`: [entity_summon](https://minecraft.fandom.com/wiki/Argument_types#entity_summon)
  * Specifies the entity to be summoned.
  * Must be a ID of a [entity](https://minecraft.fandom.com/wiki/Entity) type.

* `tier`: [int](https://minecraft.fandom.com/wiki/Argument_types#int)
  * Specifies the champion tier of the entity.
  * Must be a valid tier from a rank as specified in the `champions-rank.toml` configuration file.
  
* `dimension`: [dimension](https://minecraft.fandom.com/wiki/Argument_types#minecraft:dimension)
  * Specifies the dimension of the entity.
  * Must be a ID for a registered dimension.

:::note
Specifying multiple stages for a specific tier or entity will require any nearby player to have *all* of those stages before the requirements are met.
:::
