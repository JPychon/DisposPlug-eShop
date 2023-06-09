import clsx from 'clsx';
import {flattenConnection, Image, Money, useMoney} from '@shopify/hydrogen';
import {isDiscounted, isNewArrival} from '~/lib/utils';
import {getProductPlaceholder} from '~/lib/placeholders';
import {Text} from '~/components';

export function ProductDisplayCard({product, label, loading}) {
    let cardLabel;
    
    const cardProduct = product?.variants ? product : getProductPlaceholder();
    if (!cardProduct?.variants?.nodes?.length) return null;
  
    const selectedVariant = flattenConnection(cardProduct.variants)[0];
    const { image, price, compareAtPrice } = selectedVariant;
  
    if (label) {
      cardLabel = label;
    } else if (isDiscounted(price, compareAtPrice)) {
      cardLabel = 'Sale';
    } else if (isNewArrival(product.publishedAt)) {
      cardLabel = 'New';
    }
  
    return(
    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto gap-2 sm:mt-9 md:mt-9">
        {image &&
        <Image
            className="w-full bg-gray bg-center bg-cover rounded-lg shadow-md" 
            data={image}
            alt={image.altText || `Picture of ${product.title}`}
            loading={loading}
            />
        }
        <div className="w-56 -mt-10 overflow-hidden bg-primary rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-clearWhite uppercase">
                {product.title}
            </h3>
            <div className="flex items-center justify-center px-3 py-2 bg-lightGray">
                <span className="font-bold text-gray-800 dark:text-gray-200">
                    <Text className="flex gap-4 text-center">
                        <Money withoutTrailingZeros data={price} />
                        {isDiscounted(price, compareAtPrice) && (
                        <CompareAtPrice
                            className={'opacity-50'}
                            data={compareAtPrice}
                        />
                        )}
                    </Text>
                </span>
            </div>
        </div>
    </div>
)}

function CompareAtPrice({data, className}) {
    const {currencyNarrowSymbol, withoutTrailingZerosAndCurrency} =
      useMoney(data);
  
    const styles = clsx('strike', className);
  
    return (
      <span className={styles}>
        {currencyNarrowSymbol}
        {withoutTrailingZerosAndCurrency}
      </span>
    );
}