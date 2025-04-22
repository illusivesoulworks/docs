---
sidebar_position: 2
---

# Creating a Curio

A tutorial on how to attach curio capabilities to your items.

## Overview
---
Curios comes with interfaces that you can attach to your items in order to define certain behaviors for those items when
interacting with curios slots. This includes events such as ticking while in a curio slot or triggering certain actions
when equipped or unequipped into a curio slot.

There are three main ways to implement the capability on your item: directly attaching an `ICurio` implementation as a
capability, extending the `ICurioItem` interface on your item, or registering an `ICurioItem` implementation to an item.

Only **one** of these methods needs to be implemented for the curio item to work.

## Attaching an `ICurio` capability
---
This is recommended for mods that are NeoForge-oriented, due to the use of capabilities, and/or want to attach the
capability optionally to their own items or another mod's items.

To attach the capability to any item, including vanilla's and other mods', subscribe to the
`RegisterCapabilitiesEvent` on the mod event bus and use its methods:
```java
@Mod("examplemod")
public class ExampleMod {

    public ExampleMod(final IEventBus modEventBus) {
        modEventBus.addListener(this::registerCapabilities);
    }

    public void registerCapabilities(final RegisterCapabilitiesEvent evt) {
        evt.registerItem(
            CuriosCapability.ITEM,
            (stack, context) -> new ICurio() {

                @Override
                public ItemStack getStack() {
                  return stack;
                }

                @Override
                public void curioTick(SlotContext slotContext) {
                  // ticking logic here
            },
            ExampleMod.ITEM);
    }
```
The `ICurio` implementation in the example can be replaced or extended by your own custom implementation.

:::note
You will need to pass in the `ItemStack` from the `(stack, context)` lambda in the `RegisterCapabilitiesEvent#registerItem`
method to the return of `ICurio#getStack` as shown in the example. This makes sure that the implementation receives the
correct `ItemStack` for further curios logic. Technically, `ICurio#getStack` can return any stack if proxies are needed,
but the use-case for that is outside the scope of this documentation.
:::

## Implementing the `ICurioItem` interface
---
This is recommended for mods that want the simplest and most straightforward method, do not mind having Curios as a
required dependency, and are only working with their own items.

To implement the `ICurioItem` interface, simply implement it on your item class:
```java
public class CurioItem extends Item implements ICurioItem {

  public CurioItem() {
    super(new Item.Properties().stacksTo(1).defaultDurability(0));
  }

  @Override
  public void curioTick(SlotContext slotContext, ItemStack stack) {
    // ticking logic here
  }
}
```

## Registering an `ICurioItem` implementation
---
This is recommended for multi-loader mods as a platform-agnostic method of registering Curios behavior to their own
items or another mod's items that can be loaded optionally.

To register an `ICurioItem` implementation, first create the implementation:
```java
public class CurioItem implements ICurioItem {

  @Override
  public void curioTick(SlotContext slotContext, ItemStack stack) {
    // ticking logic here
  }
}
```

And then register it by using `CurioApi#registerCurio`:
```java
CuriosApi.registerCurio(CurioModItems.MY_ITEM, new CurioItem());
```

Registration can occur at any time, but for simplicity can be called during the `FMLCommonSetupEvent` phase during mod
loading:

```java
@Mod("CurioMod")
public class CurioMod {

  public CurioMod(final IEventBus eventBus) {
    eventBus.addListener(this::setup);
  }

  private void setup(final FMLCommonSetupEvent evt) {
    CuriosApi.registerCurio(CurioModItems.MY_ITEM, new CurioItem());
  }
}
```

## Priority
---
In situations where multiple implementations are registered to the same item, there a few things to take note of:
* Only one implementation will be used on any one item, any other implementations found will be ignored.
* `ICurioItem` implementations registered through `CuriosApi#registerCurio` will be prioritized over `ICurioItem`
implementations directly on the item class.
