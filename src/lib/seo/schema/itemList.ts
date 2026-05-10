export function makeItemListSchema(
  items: Array<{ name: string; url: string }>,
  id?: string
) {
  return {
    "@type": "ItemList",
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}