---
sidebar_position: 13
---

# Data Generation

A tutorial on how to programmatically generate the Curios data files.

## Prerequisites
---
The documentation on this page was written with the assumption that readers are already familiar with basic data
generation and its usages. If you are not, please prime yourself by learning about data generation on either [Forge](https://forge.gemwire.uk/wiki/Datageneration)
or [NeoForge](https://docs.neoforged.net/docs/datagen/) before proceeding further.

## Getting Started
---
Slots and entities can be generated for a mod by constructing a new implementation of the
`top.theillusivec4.curios.api.CuriosDataProvider` class, making sure to override the `generate` method to run the
generation code.

```java
public class CuriosTestProvider extends CuriosDataProvider {

  public CuriosTestProvider(String modId, PackOutput output,
                            ExistingFileHelper fileHelper,
                            CompletableFuture<HolderLookup.Provider> registries) {
    super(modId, output, fileHelper, registries);
  }

  @Override
  public void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {
    // Generation code here
  }
}
```

A new instance of the implementation should be constructed in the `GatherDataEvent` event on the MOD event bus.

```java
// On the MOD event bus
@SubscribeEvent
public void gatherData(GatherDataEvent event) {
    event.getGenerator().addProvider(
        // Tell generator to run only when server data are generating
        event.includeServer(),
        new CuriosTestProvider(
            "mod_id",
            event.getGenerator().getPackOutput(),
            event.getExistingFileHelper(),
            event.getLookupProvider()
        )
    );
}
```

## Slot Generation
---
`CuriosDataProvider` has a `createSlot` method to facilitate easy data generation of slot types, by taking in an initial
`String` identifier/file name and allowing developers to chain additional parameters as needed.

```java
@Override
public void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {
    this.createSlot("test_slot"); // Create a slot with the identifier and file name "test_slot"
}
```

Additional parameters can be added by calling methods on the `ISlotData` returned by the `createSlot` method call. Most
of these parameters are linked to fields for `ISlotType`, more information on how these fields are constructed and what
they represent can be found on the page for [slot registration](slot-register.md#-syntax).

| Method         | Parameters         | Field            |
|----------------|--------------------|------------------|
| `replace`      | boolean            | `replace`        |
| `size`         | integer            | `size`           |
| `operation`    | string             | `operation`      |
| `order`        | integer            | `order`          |
| `icon`         | `ResourceLocation` | `icon`           |
| `addCosmetic`  | boolean            | `add_cosmetic`   |
| `useNativeGui` | boolean            | `use_native_gui` |
| `renderToggle` | boolean            | `render_toggle`  |
| `dropRule`     | `ICurio$DropRule`  | `drop_rule`      |
| `addCondition` | `ICondition`       | N/A              |

### Example

The following example creates a slot file with the file name and identifier `test_slot`, gives it a size of `4`, sets the
drop rule to `"ALWAYS_KEEP"` so that it is never dropped upon death, and gives it a cosmetic slot by setting `addCosmetic`
to `true`.

```java
@Override
public void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {
    this.createSlot("test_slot")
        .size(4)
        .dropRule(ICurio.DropRule.ALWAYS_KEEP)
        .addCosmetic(true);
}
```

## Entities Generation
---
`CuriosDataProvider` has a `createEntities` method to facilitate easy data generation of adding slot types to entities,
by taking in an initial `String` file name and allowing developers to chain additional parameters as needed.

```java
@Override
public void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {
    this.createEntities("test_entities"); // Create an entities file with the name "test_entities"
}
```
Additional parameters can be added by calling methods on the `IEntitiesData` returned by the `createEntities` method
call. All of these parameters correspond to JSON fields, more information on these can be found on the page for
[entity registration](entity-register.md#-syntax).

| Method         | Parameters        | Field        | Notes                                                      |
|----------------|-------------------|--------------|------------------------------------------------------------|
| `replace`      | boolean           | `replace`    |                                                            |
| `addPlayer`    | N/A               | `entities`   | Adds `"minecraft:player"` to the `entities` array          |
| `addEntities`  | `EntityType<?>[]` | `entities`   |                                                            |
| `addSlots`     | string[]          | `slots`      | Adds each string as a slot identifier to the `slots` array |
| `addCondition` | `ICondition`      | `conditions` |                                                            |

### Example

The following example creates an entities file with the file name `test_entities`, and assigns the `"head"`, `"ring"`,
and `"necklace"` slot types to the `"minecraft:player"` and `"minecraft:zombie"` entities.

```java
@Override
public void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) {
    this.createEntities("test_entities")
        .addPlayer()
        .addEntities(EntityType.ZOMBIE)
        .addSlots("head", "ring", "necklace");
}
```

## Criterion Triggers

Curios provides several helper methods in the `top.theillusivec4.curios.api.CuriosTriggers` class to generate data
associated with criterion triggers used for advancements and other similar files.

Currently, the only triggers available are `equip` and `equipAtLocation` for triggering when a certain item is equipped
into a curio slot.

### Example

The following example will create an advancement file, `curiostest/test`, that adds a criteration called `"test"`, that
is triggered when a `"minecraft:diamond"` item is equipped in the Badlands biome.

```java
Advancement.Builder.advancement()
    .addCriterion("test",
        CuriosTriggers.equipAtLocation(
            ItemPredicate.Builder.item().of(Items.DIAMOND),
            LocationPredicate.Builder.location().setBiome(Biomes.BADLANDS)))
    .save(saver, new ResourceLocation("curiostest", "test"), existingFileHelper);
```
