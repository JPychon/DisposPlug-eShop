import {Grid, ProductCard, Section} from '~/components';

const mockProducts = new Array(12).fill('');

export function ProductSwimlane({
  title = 'New Arrivals',
  products = mockProducts,
  count = 12,
  ...props
}) {
  return (
    <Section className="mx-8" heading={title} padding="y" {...props}>
      <Grid layout="products" items={4}>
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className="snap-start w-80"
          />
        ))}
      </Grid>
    </Section>
  );
}
