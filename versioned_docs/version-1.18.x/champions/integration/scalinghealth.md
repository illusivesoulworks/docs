---
sidebar_position: 2
---

# Scaling Health

Champions supports increasing champion spawn chances when using the [Scaling Health](https://github.com/SilentChaos512/ScalingHealth) mod.

This allows users and modpack developers to scale champion spawn chances with the difficulty of the region, working with the difficulty scaling configurations in the Scaling Health mod.

## Spawn Modifiers

Scaling Health spawn modifiers can be modified through the `champions-server.toml` configuration file located in the `world` folder's or the `saves/<World Name>` folder's `serverconfig` folder.

```toml
#Scaling Health
#List of tiers with numbers to multiply spawn rates by difficulty
#Format: [tier];[percent increase]
scalingHealthSpawnModifiers = []
```

### Syntax

`tier;modifier`

The `modifier` will be multiplied by the difficulty rating from Scaling Health and then added directly to the spawn chance for the `tier` as defined by the `champions-ranks.toml` configuration file.

### Arguments

* `tier`: [int](https://minecraft.fandom.com/wiki/Argument_types#int)
  * Specifies the champion tier of the entity.
  * Must be a valid tier from a rank as specified in the `champions-rank.toml` configuration file.
* `modifier`: [float](https://minecraft.fandom.com/wiki/Argument_types#float)
  * Specifies modifier for the spawn chance increase.

### Examples

```toml
scalingHealthSpawnModifiers = ["1;0.005"]
```

If the difficulty rating from Scaling Health is **100** and the default spawn chance for a tier 1 champion is **0.2** (or 20%), then the final spawn chance is **0.7** (or 70%):
```
(difficulty * modifier) + chance = result
(100 * 0.005) + 0.2 = 0.7
```

:::tip
Careful consideration will need to be made when selecting modifier values. Be sure to run calculations for each modifier against expected difficulty ratings to ensure the spawn chances do not increase further than intended.
:::
