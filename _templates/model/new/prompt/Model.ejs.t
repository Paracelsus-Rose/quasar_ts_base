---
to: <%= directories.models %>/<%= modelPascal %>/<%= modelPascal %>.ts
---
import { Model } from 'pinia-orm'
import { Uid, Attr, BelongsTo } from 'pinia-orm/dist/decorators'

export default class <%= modelPascal %> extends Model {
  static entity = '<%= modelKebabPlural %>'
  static primaryKey = 'id'

  @Uid()
    id: string

}
