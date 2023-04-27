import {
    useDrawer,
    MobileHeader,
    DesktopHeader,
    CartDrawer,
    MenuDrawer,
    WarningBanner,
  } from '~/components';
  import {useEffect} from 'react';
  import {useIsHomePath} from '~/lib/utils';
  import {useCartFetchers} from '~/hooks/useCartFetchers';

export function Header({title, menu, logo}) {
    const isHome = useIsHomePath();
  
    const {
      isOpen: isCartOpen,
      openDrawer: openCart,
      closeDrawer: closeCart,
    } = useDrawer();
  
    const {
      isOpen: isMenuOpen,
      openDrawer: openMenu,
      closeDrawer: closeMenu,
    } = useDrawer();
  
    const addToCartFetchers = useCartFetchers('ADD_TO_CART');
  
    // toggle cart drawer when adding to cart
    useEffect(() => {
      if (isCartOpen || !addToCartFetchers.length) return;
      openCart();
    }, [addToCartFetchers, isCartOpen, openCart]);
  
    return (
      <>
        <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
        {menu && (
          <MenuDrawer isOpen={isMenuOpen} onClose={closeMenu} menu={menu} />
        )}
      {isHome ? (
        <WarningBanner
          title="WARNING:"
          description="These products contain nicotine - Nicotine is an addictive chemical."
        />
      ) : null}
        <DesktopHeader
          isHome={isHome}
          title={title}
          menu={menu}
          openCart={openCart}
        />
        <MobileHeader
          isHome={isHome}
          title={title}
          openCart={openCart}
          openMenu={openMenu}
        />
      </>
    );
  }