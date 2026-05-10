type RenderJsonLdProps = {
  data: Record<string, unknown>;
};

export function RenderJsonLd({ data }: RenderJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}