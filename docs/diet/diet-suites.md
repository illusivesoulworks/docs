---
sidebar_position: 4
---

# Customizing Diet Suites

A tutorial on how to customize suites of food groups and diet effects.

## Overview
Diet suites are a collection of food groups and effects that are applied to the player based on the values of those
food groups. A player can only have one existing diet suite at a time, but an instance can have as many diet suites as
it needs. Suites exist on a per-player basis and players can have a different suite than another.

Suites are divided into two major components: food groups and effects. Effects are further divided into three major
components: status effects, attribute modifiers, and conditions.

## Directory
---
The file should be a `.json` file located in the `~/data/(namespace)/diet/suites/` folder of the datapack.

The file name is the `identifier` used for the suite. An `identifier` can be anything that is lowercased with no
special characters. If customizing or replacing the default suite, the file should be named `builtin.json`.

:::note
The `(namespace)` field should be replaced by the namespace chosen for this portion of the datapack. If this is a part
of a mod, the namespace is usually the mod ID. If this is part of a user-defined datapack, then the namespace can be
anything that is lowercased with no special characters.
:::

## Syntax
---
The structure of the `.json` file for the suite configuration consists of a top-level JSON object that holds three
potential fields.

* `replace`
  * If true, the file will override pre-existing suites of the same name instead of adding the arrays together.
* `groups`
  * An array of food group `name` entries as defined by [Customizing Food Groups](diet-groups.md).
* `effects`
  * An array of effects to apply to the player as defined by [Customizing Effects](#customizing-effects).

## Customizing Effects

Dietary effects are custom status effects or attribute modifiers applied to players when certain conditions are met.
Each effect entry is divided into three different components: attribute modifiers, status effects, and conditions.
Effects can have multiple attribute modifiers, status effects, and conditions tied to a single entry.

### Attribute Modifiers

An attribute modifier represents a direct modifier to an entity attribute.

```json
{
  "effects": [
    {
      "attributes": [
        {
          "name": "minecraft:generic.movement_speed",
          "operation": "multiply_base",
          "amount": 0.25
        }
      ]
    }
  ]
}
```
### Fields

`name` - `string`
- The namespaced registry name of the entity attribute to apply this entry on.
- List of vanilla Minecraft entity attribute names:
  - Max Health - `"minecraft:generic.max_health"`
  - Knockback Resistance - `"minecraft:generic.knockback_resistance"`
  - Movement Speed - `"minecraft:generic.movement_speed"`
  - Attack Damage - `"minecraft:generic.attack_damage"`
  - Attack Knockback - `"minecraft:generic.attack_knockback"`
  - Attack Speed - `"minecraft:generic.attack_speed"`
  - Armor - `"minecraft:generic.armor"`
  - Armor Toughness - `"minecraft:generic.armor_toughness"`
  - Luck - `"minecraft:generic.luck"`

`operation` - `string`
- The type of operation to perform on the entity attribute
- Possible values:
  - `"multiply_total"` - Increment the attribute by (value * amount)
  - `"multiply_base"` - Increment the attribute by (base * amount)
  - `"add"` - Increment the attribute by the amount

`amount` - `decimal`
- The amount to use for the operation on the attribute modifier

## Status Effects

A status effect represents a status effect applied to an entity.

```json
{
  "effects": [
    {
      "status_effects": [
        {
          "name": "minecraft:hunger",
          "power": 3
        }
      ]
    }
  ]
}
```

### Fields

`name` - `string`
- The namespaced registry name of the potion effect to apply

`power` - `integer`
- The integer amount representing the strength of the potion effect

## Conditions

A condition is an entry defining a test that needs to pass in order to activate the corresponding effect. There can be
multiple conditions for a single effect, and all conditions must pass in order to activate the effect.

```json
{
  "effects": [
    {
      "conditions": [
        {
          "groups": ["sugars", "proteins"],
          "match": "all",
          "above": 0.8,
          "below": 1.0
        }
      ]
    }
  ]
}
```

### Fields

`groups` - `string[]`
- A list of groups that this condition is testing against
- The names correspond to the names given to the groups in the `diet-groups.toml` configuration

`above` - `decimal`
- A decimal value between `0.0` and `1.0` that indicates the lower bound that the value must be at or above

`below` - `decimal`
- A decimal value between `0.0` and `1.0` that indicates the upper bound that the value must be at or below

`match` - `string`
- The match method used for the condition testing
- Possible values:
  - `"all"` - Condition passes if all the groups meet the threshold.
  - `"any"` - Condition passes if any the groups meet the threshold.
  - `"average"` - Condition passes if the average value of the groups meets the threshold.
  - `"none"` - Condition passes if none of the groups meet the threshold.
  - `"every"` - Condition passes if at least one group meets the threshold. In addition, looks for each group that passes the condition and amplifies the effect's power for each one.
    - Example: If three groups pass an `"every"` test, then a "Strength I" potion effect becomes "Strength III"

## Example
---
```json
{
  "replace": false,
  "groups": [
    "fruits",
    "grains",
    "proteins",
    "sugars",
    "vegetables"
  ],
  "effects": [
    {
      "attributes": [
        {
          "name": "minecraft:generic.max_health",
          "operation": "add",
          "amount": 2.0
        }
      ],
      "conditions": [
        {
          "groups": ["proteins", "fruits", "vegetables", "grains"],
          "match": "all",
          "above": 0.8,
          "below": 1.0
        }
      ]
    },
    {
      "status_effects": [
        {
          "name": "minecraft:hunger",
          "power": 3
        }
      ],
      "conditions": [
        {
          "groups": ["sugars"],
          "match": "all",
          "above": 0.8,
          "below": 1.0
        }
      ]
    }
  ]
}
```
This configuration will grant `2.0` additional `max_health` when `all` the `proteins`, `vegetables`, `grains`, and
`fruits` food groups are above 80% (`0.8`) and below or equal to 100% (`1.0`).

In addition, there is an additional effect that grants `hunger` at power `3` when `sugars` is above 80% (`0.8`) and
below or equal to 100% (`1.0`).

## Built-in Diet Suite
---
This is the built-in diet suite that is configured by default, aptly named `builtin`. 

<details>
  <summary>builtin.json</summary>

```json
{
  "replace": false,
  "groups": [
    "fruits",
    "grains",
    "proteins",
    "sugars",
    "vegetables"
  ],
  "effects": [
    {
      "attributes": [
        {
          "name": "minecraft:generic.max_health",
          "operation": "add",
          "amount": 2.0
        },
        {
          "name": "minecraft:generic.attack_damage",
          "operation": "add",
          "amount": 2.0
        },
        {
          "name": "minecraft:generic.attack_speed",
          "operation": "multiply_total",
          "amount": 0.1
        }
      ],
      "conditions": [
        {
          "groups": ["proteins", "fruits", "vegetables", "grains"],
          "match": "all",
          "above": 0.8,
          "below": 1.0
        }
      ]
    },
    {
      "attributes": [
        {
          "name": "minecraft:generic.max_health",
          "operation": "add",
          "amount": 2.0
        },
        {
          "name": "minecraft:generic.knockback_resistance",
          "operation": "add",
          "amount": 0.10
        },
        {
          "name": "minecraft:generic.armor_toughness",
          "operation": "add",
          "amount": 1.0
        }
      ],
      "conditions": [
        {
          "groups": ["proteins", "fruits", "vegetables", "grains"],
          "match": "every",
          "above": 0.8,
          "below": 1.0
        }
      ]
    },
    {
      "attributes": [
        {
          "name": "minecraft:generic.movement_speed",
          "operation": "multiply_base",
          "amount": 0.25
        }
      ],
      "status_effects": [
        {
          "name": "minecraft:hunger",
          "power": 3
        }
      ],
      "conditions": [
        {
          "groups": ["sugars"],
          "match": "all",
          "above": 0.8,
          "below": 1.0
        }
      ]
    }
  ]
}
```
</details>
  