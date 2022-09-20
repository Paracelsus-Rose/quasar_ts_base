---
to: <%= componentDirectory %>/<%= componentNamePascal %>_compdoc.md
---
# <%= componentNamePascal %> Component

```html
<script setup lang="ts">
import { ThreatLevel } from 'types/Cases/ThreatLevel'

interface Props {
  threatLevel: ThreatLevel
  amount?: number
}

defineProps<Props>()

</script>

<template>
  <q-chip
    rounded
    :color="threatLevel.color"
  >
    {{ threatLevel.label }} Threat: <span class="q-pl-sm">({{ amount }})</span>
  </q-chip>
</template>
```
## Description:



## Usage:



#### Props:



#### Slots:


##### External CSS Needed:



