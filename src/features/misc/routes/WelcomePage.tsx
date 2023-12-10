import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import { useI18NContext } from '@/providers/i18n';

export const WelcomePage = (): JSX.Element => {
  const { translate } = useI18NContext();

  return (
    <>
      <h1>Welcome</h1>
      <p>{translate('greeting')}</p>

      <nav>
        <Link to="/auth">Sign In / Sign Up Page</Link>
        <Link to="/main">Main Page</Link>
      </nav>
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci augue, condimentum non
        sagittis ut, varius at ipsum. Donec dictum luctus neque, quis fermentum felis vestibulum
        vel. Curabitur iaculis sagittis tristique. Nullam orci nulla, fringilla sit amet scelerisque
        a, porttitor sed eros. Nulla convallis pulvinar elit. Maecenas tristique mauris nec nibh
        cursus rutrum. Pellentesque consectetur dapibus finibus. Praesent euismod molestie
        consectetur. Donec suscipit neque nec eleifend imperdiet. Etiam vitae cursus lorem. Proin at
        erat facilisis, ullamcorper ex non, scelerisque nulla. Praesent imperdiet ex ut quam cursus,
        non egestas urna hendrerit. Suspendisse sit amet iaculis justo. In a nisl elit. Nam
        ullamcorper elit id nibh bibendum, in dignissim tellus pulvinar. Etiam iaculis lorem non
        risus lobortis placerat. Fusce vel justo quis magna aliquet faucibus. Sed ullamcorper augue
        malesuada malesuada ultrices. Nunc semper pharetra lobortis. Curabitur euismod eget enim sit
        amet rhoncus. Maecenas in justo tellus. Duis nec massa id neque tristique tristique. Nunc
        euismod tellus in lectus venenatis mattis. Cras ut egestas metus. Maecenas quis euismod
        nunc. Pellentesque at metus orci. Nulla elementum tristique massa sed posuere. Etiam tortor
        lacus, scelerisque nec suscipit eget, semper at augue. Phasellus vulputate viverra orci, in
        dapibus turpis lacinia vitae. Praesent consequat malesuada lectus, sit amet volutpat ligula
        molestie id. Donec dictum tortor in elit vulputate, non interdum felis elementum. Maecenas
        quis vehicula ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Quisque vel leo eu nisi elementum vestibulum sed et est. In eu nibh tempus,
        porttitor libero sit amet, ullamcorper risus. Nunc euismod fringilla ullamcorper. Duis
        vestibulum, velit egestas tempus volutpat, nibh augue placerat urna, et mattis ante urna eu
        quam. Suspendisse sagittis sagittis augue sed iaculis. Vivamus sagittis enim et rutrum
        feugiat. Nunc id sem in elit commodo blandit. Nam at fermentum diam, vel molestie leo. Ut
        placerat, urna sit amet bibendum imperdiet, ligula ipsum tristique enim, ac maximus libero
        sapien sit amet nisi. Nunc ultrices nulla id sem hendrerit, eu ultricies nibh porta. Nam sit
        amet felis eu felis accumsan fermentum vel id dui. Morbi fringilla, odio at eleifend
        facilisis, eros arcu viverra quam, a lobortis purus nibh vel mauris. Fusce nec fermentum
        neque. Proin vehicula, elit pharetra egestas porttitor, felis justo accumsan leo, mollis
        euismod mauris metus a lorem. Integer molestie, ligula a mollis ultricies, mauris ante
        ultricies libero, eget feugiat turpis lorem tristique mauris. In pellentesque sodales orci
        ac molestie. Sed sit amet augue et lorem elementum suscipit at eget dolor. Vestibulum nec
        ultricies sapien. Maecenas interdum suscipit feugiat. Donec finibus lectus sed mauris
        sollicitudin, eget finibus ante fringilla. In sed quam at sapien malesuada efficitur sed et
        mauris. Donec ornare tortor nisi, at vulputate mi laoreet a. Phasellus ultrices enim ipsum,
        sed lacinia metus venenatis sed. Curabitur id cursus nisl. Donec venenatis urna nisi, et
        ornare lacus fermentum quis. Pellentesque viverra Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut orci augue, condimentum non sagittis ut, varius at ipsum. Donec dictum
        luctus neque, quis fermentum felis vestibulum vel. Curabitur iaculis sagittis tristique.
        Nullam orci nulla, fringilla sit amet scelerisque a, porttitor sed eros. Nulla convallis
        pulvinar elit. Maecenas tristique mauris nec nibh cursus rutrum. Pellentesque consectetur
        dapibus finibus. Praesent euismod molestie consectetur. Donec suscipit neque nec eleifend
        imperdiet. Etiam vitae cursus lorem. Proin at erat facilisis, ullamcorper ex non,
        scelerisque nulla. Praesent imperdiet ex ut quam cursus, non egestas urna hendrerit.
        Suspendisse sit amet iaculis justo. In a nisl elit. Nam ullamcorper elit id nibh bibendum,
        in dignissim tellus pulvinar. Etiam iaculis lorem non risus lobortis placerat. Fusce vel
        justo quis magna aliquet faucibus. Sed ullamcorper augue malesuada malesuada ultrices. Nunc
        semper pharetra lobortis. Curabitur euismod eget enim sit amet rhoncus. Maecenas in justo
        tellus. Duis nec massa id neque tristique tristique. Nunc euismod tellus in lectus venenatis
        mattis. Cras ut egestas metus. Maecenas quis euismod nunc. Pellentesque at metus orci. Nulla
        elementum tristique massa sed posuere. Etiam tortor lacus, scelerisque nec suscipit eget,
        semper at augue. Phasellus vulputate viverra orci, in dapibus turpis lacinia vitae. Praesent
        consequat malesuada lectus, sit amet volutpat ligula molestie id. Donec dictum tortor in
        elit vulputate, non interdum felis elementum. Maecenas quis vehicula ante. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vel leo
        eu nisi elementum vestibulum sed et est. In eu nibh tempus, porttitor libero sit amet,
        ullamcorper risus. Nunc euismod fringilla ullamcorper. Duis vestibulum, velit egestas tempus
        volutpat, nibh augue placerat urna, et mattis ante urna eu quam. Suspendisse sagittis
        sagittis augue sed iaculis. Vivamus sagittis enim et rutrum feugiat. Nunc id sem in elit
        commodo blandit. Nam at fermentum diam, vel molestie leo. Ut placerat, urna sit amet
        bibendum imperdiet, ligula ipsum tristique enim, ac maximus libero sapien sit amet nisi.
        Nunc ultrices nulla id sem hendrerit, eu ultricies nibh porta. Nam sit amet felis eu felis
        accumsan fermentum vel id dui. Morbi fringilla, odio at eleifend facilisis, eros arcu
        viverra quam, a lobortis purus nibh vel mauris. Fusce nec fermentum neque. Proin vehicula,
        elit pharetra egestas porttitor, felis justo accumsan leo, mollis euismod mauris metus a
        lorem. Integer molestie, ligula a mollis ultricies, mauris ante ultricies libero, eget
        feugiat turpis lorem tristique mauris. In pellentesque sodales orci ac molestie. Sed sit
        amet augue et lorem elementum suscipit at eget dolor. Vestibulum nec ultricies sapien.
        Maecenas interdum suscipit feugiat. Donec finibus lectus sed mauris sollicitudin, eget
        finibus ante fringilla. In sed quam at sapien malesuada efficitur sed et mauris. Donec
        ornare tortor nisi, at vulputate mi laoreet a. Phasellus ultrices enim ipsum, sed lacinia
        metus venenatis sed. Curabitur id cursus nisl. Donec venenatis urna nisi, et ornare lacus
        fermentum quis. Pellentesque viverraLorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ut orci augue, condimentum non sagittis ut, varius at ipsum. Donec dictum luctus neque, quis
        fermentum felis vestibulum vel. Curabitur iaculis sagittis tristique. Nullam orci nulla,
        fringilla sit amet scelerisque a, porttitor sed eros. Nulla convallis pulvinar elit.
        Maecenas tristique mauris nec nibh cursus rutrum. Pellentesque consectetur dapibus finibus.
        Praesent euismod molestie consectetur. Donec suscipit neque nec eleifend imperdiet. Etiam
        vitae cursus lorem. Proin at erat facilisis, ullamcorper ex non, scelerisque nulla. Praesent
        imperdiet ex ut quam cursus, non egestas urna hendrerit. Suspendisse sit amet iaculis justo.
        In a nisl elit. Nam ullamcorper elit id nibh bibendum, in dignissim tellus pulvinar. Etiam
        iaculis lorem non risus lobortis placerat. Fusce vel justo quis magna aliquet faucibus. Sed
        ullamcorper augue malesuada malesuada ultrices. Nunc semper pharetra lobortis. Curabitur
        euismod eget enim sit amet rhoncus. Maecenas in justo tellus. Duis nec massa id neque
        tristique tristique. Nunc euismod tellus in lectus venenatis mattis. Cras ut egestas metus.
        Maecenas quis euismod nunc. Pellentesque at metus orci. Nulla elementum tristique massa sed
        posuere. Etiam tortor lacus, scelerisque nec suscipit eget, semper at augue. Phasellus
        vulputate viverra orci, in dapibus turpis lacinia vitae. Praesent consequat malesuada
        lectus, sit amet volutpat ligula molestie id. Donec dictum tortor in elit vulputate, non
        interdum felis elementum. Maecenas quis vehicula ante. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Quisque vel leo eu nisi elementum
        vestibulum sed et est. In eu nibh tempus, porttitor libero sit amet, ullamcorper risus. Nunc
        euismod fringilla ullamcorper. Duis vestibulum, velit egestas tempus volutpat, nibh augue
        placerat urna, et mattis ante urna eu quam. Suspendisse sagittis sagittis augue sed iaculis.
        Vivamus sagittis enim et rutrum feugiat. Nunc id sem in elit commodo blandit. Nam at
        fermentum diam, vel molestie leo. Ut placerat, urna sit amet bibendum imperdiet, ligula
        ipsum tristique enim, ac maximus libero sapien sit amet nisi. Nunc ultrices nulla id sem
        hendrerit, eu ultricies nibh porta. Nam sit amet felis eu felis accumsan fermentum vel id
        dui. Morbi fringilla, odio at eleifend facilisis, eros arcu viverra quam, a lobortis purus
        nibh vel mauris. Fusce nec fermentum neque. Proin vehicula, elit pharetra egestas porttitor,
        felis justo accumsan leo, mollis euismod mauris metus a lorem. Integer molestie, ligula a
        mollis ultricies, mauris ante ultricies libero, eget feugiat turpis lorem tristique mauris.
        In pellentesque sodales orci ac molestie. Sed sit amet augue et lorem elementum suscipit at
        eget dolor. Vestibulum nec ultricies sapien. Maecenas interdum suscipit feugiat. Donec
        finibus lectus sed mauris sollicitudin, eget finibus ante fringilla. In sed quam at sapien
        malesuada efficitur sed et mauris. Donec ornare tortor nisi, at vulputate mi laoreet a.
        Phasellus ultrices enim ipsum, sed lacinia metus venenatis sed. Curabitur id cursus nisl.
        Donec venenatis urna nisi, et ornare lacus fermentum quis. Pellentesque viverra
      </>
    </>
  );
};
