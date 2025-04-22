---
sidebar_position: 8
---

# Rendering a Curio

A tutorial on how to run rendering code when a specific curio item is equipped on an entity.

## Create an `ICurioRenderer`
---
In the `top.theillusivec4.curios.api.client` package, you'll find an interface called `ICurioRenderer`. This interface
needs to be implemented on an object of your choice, as its `render` method is what will be called to run your rendering
code later.

For the full guide on the interface, see [here](../api/renderer-interface.md).

```java
public class MyCurioRenderer implements ICurioRenderer {
  
  @Override
  public <T extends LivingEntity, M extends EntityModel<T>> void render(ItemStack stack,
                                                                        SlotContext slotContext,
                                                                        PoseStack matrixStack,
                                                                        RenderLayerParent<T, M> renderLayerParent,
                                                                        MultiBufferSource renderTypeBuffer,
                                                                        int light, float limbSwing,
                                                                        float limbSwingAmount,
                                                                        float partialTicks,
                                                                        float ageInTicks,
                                                                        float netHeadYaw,
                                                                        float headPitch) {
    // Render code goes here
  }
}
```

## Register your renderer
---
Once you have an implementation of `ICurioRenderer`, you need to register an instance of that to an item. This is done
by calling the `register` method in `top.theillusivec4.curios.api.client.CuriosRendererRegistry` during the
`FMLClientSetupEvent` in mod loading.

```java
@Mod("CurioMod")
public class CurioMod {
  
  public CurioMod(final IEventBus eventBus) {
    eventBus.addListener(this::clientSetup);
  }

  private void clientSetup(final FMLClientSetupEvent evt) {
    CuriosRendererRegistry.register(CurioModItems.MY_ITEM, () -> new MyCurioRenderer());
  }
}
```

:::tip
Multiple items are allowed to share a renderer instance or type. This can be handy if your `ICurioRenderer`
implementation shares a lot of common code or if your items have very similar renders, in which case you may find it
advantageous to simply register those items with a single renderer rather than multiple.
:::
