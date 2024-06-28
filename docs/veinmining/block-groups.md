---
sidebar_position: 1
---

# Assigning Block Groups

A tutorial on how to assign blocks to groups so that they are vein mined together when applicable.

## Overview
Block groups are used by Vein Mining to determine which blocks should be vein mined together if they are next to each
other but are not the same type of block. This is useful when there are different blocks in a world that share
enough similar characteristics that they should be vein mined together and not separately. For example, ores and their
deepslate versions are functionally identical. As such, Vein Mining configures these groupings natively already.

These groups can be configured through the configuration file or through datapacks, allowing both modpack developers and
mod developers to specify which groupings should apply within their specific environment.

## Configuration
---
The configuration field for block groups is located in the `veinmining-server.toml` file in the `config` folder in the
root Minecraft instance folder.

The field is called `groupsList` and will, by default, be auto-populated with a list of common ore tags so that similar
ores can be vein mined together.

This is represented as a list of strings, and each string is a group entry with blocks IDs or tags seperated by a
semicolon.

### Example
```toml
groupsList = ["minecraft:grass_block;minecraft:dirt", "minecraft:diamond_ore;minecraft:emerald_ore"]
```
These entries specify two different groups:
* Group 1 - Grass blocks and dirt blocks
* Group 2 - Diamond ores and emerald ores

This means that, when vein mined, grass blocks and dirt blocks will be vein mined together. This applies regardless of
which block is the origin block. The same will apply to diamond ores and emerald ores.

## Datapack
---
Block groups can be specified purely through datapacks, allowing specifications to be applied without depending on Vein
Mining directly. The data file should be created as `~/data/(namespace)/veinmining/groups.json` in the datapack.

:::note
The `(namespace)` field should be replaced by the namespace chosen for this portion of the datapack. If this is a part
of a mod, the namespace is usually the mod ID. If this is part of a user-defined datapack, then the namespace can be
anything that is lowercased with no special characters.
:::

### Syntax
The structure of the `.json` file for the groups consists of a top-level JSON object that holds various fields
related to the groups specifications.

| Field     | Type     | Default | Required | Description                                                                            |
|-----------|----------|---------|----------|----------------------------------------------------------------------------------------|
| `replace` | boolean  | `false` | `false`  | If true, replaces all entries on lower-priority datapacks with this one                |
| `groups`  | string[] | `[]`    | `false`  | The list of block groups represented as an array of string arrays of block IDs or tags |

### Example
```json
{
  "replace": false,
  "groups": [
    ["minecraft:grass_block", "minecraft:dirt"],
    ["minecraft:diamond_ore", "minecraft:emerald_ore"]
  ]
}
```
Same as the example from [the previous section](#-example), this `groups.json` file specifies two different groups:
* Group 1 - Grass blocks and dirt blocks
* Group 2 - Diamond ores and emerald ores

This means that, when vein mined, grass blocks and dirt blocks will be vein mined together. This applies regardless of
which block is the origin block. The same will apply to diamond ores and emerald ores.
