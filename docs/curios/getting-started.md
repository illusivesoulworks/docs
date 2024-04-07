---
sidebar_position: 1
---

# Setting Up the Development Environment

A tutorial on how to set up your development workspace to work with Curios API interfaces and methods.

## Set up your build script
---
### Add repository

First, add the repository hosting the Curios API files by adding the following to your build script's
`repositories` block:

```gradle
repositories {
  maven {
    name = "Illusive Soulworks maven"
    url = "https://maven.theillusivec4.top/"
  }
}
```

### Add dependencies

Secondly, add the Curios API dependencies to your build script's `dependencies` block:

```gradle
dependencies {
    // Compile against only the API artifact
    compileOnly(fg.deobf("top.theillusivec4.curios:curios-forge:${curios_version}:api"))
    // Use the full Curios API jar at runtime
    runtimeOnly(fg.deobf("top.theillusivec4.curios:curios-forge:${curios_version}"))
}
```

:::note
**Why compile against only the API artifact?**

Compiling against only the API artifact is recommended because the artifact only contains the public API packages,
interfaces, and methods. These are all intended to be stable and will not break within the same major version if used.
The same cannot be said about internal packages and methods, which may accidentally be used if the full jar is included
during compile time. Including the full jar at runtime still means that testing can occur normally in development.

If there is an internal package and or method you would like to use, please make a suggestion on the [issue tracker](https://github.com/TheIllusiveC4/Curios/issues)
so that it may potentially be included in the public API.
:::

### Configure runs for mixin

Finally, since Curios uses mixins, your run configurations will need to ensure that the remapping functions correctly:

```gradle
property 'mixin.env.remapRefMap', 'true'
property 'mixin.env.refMapRemappingFile', "${projectDir}/build/createSrgToMcp/output.srg"
```

Add the above code block into each of the run configurations that you plan on using, for example:

```gradle
runs {
    client {
        property 'mixin.env.remapRefMap', 'true'
        property 'mixin.env.refMapRemappingFile', "${projectDir}/build/createSrgToMcp/output.srg"
    }
}
```

Remember to regenerate the run configurations after changing the settings.

## Select a version
---
If you followed the steps above, `${curios_version}` should be defined so that it is replaced by the specific Curios API
version that you want to use. This property can be set up by including a mapping in the `gradle.properties` file located
in the same directory as the `build.gradle` file.

Please see [CurseForge](https://www.curseforge.com/minecraft/mc-mods/curios/files), [Modrinth](https://modrinth.com/mod/curios/versions),
or the [maven](https://maven.theillusivec4.top/top/theillusivec4/curios/curios-forge/) for possible versions.

Example in `gradle.properties`:
```
curios_version=5.3.1+1.20.1
```
