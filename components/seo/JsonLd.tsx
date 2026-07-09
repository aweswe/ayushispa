import type { Thing, WithContext } from 'schema-dts';

interface JsonLdProps {
  schema: WithContext<Thing> | Record<string, any>;
}

export function JsonLd({ schema }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
