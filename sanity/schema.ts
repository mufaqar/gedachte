
import events from './schema/events'
import teams from './schema/teams'
import faqs from './schema/faqs'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [events,teams , faqs],
}
